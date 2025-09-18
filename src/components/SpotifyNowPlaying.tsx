import React, { useState, useEffect, useRef } from 'react';
import type { NowPlayingData } from '../types/spotify';
import { MusicNotesSimple } from '@phosphor-icons/react';

const SpotifyNowPlaying: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [shouldScroll, setShouldScroll] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tokenExpiryRef = useRef<number>(0);
  const currentTokenRef = useRef<string | null>(null);

  const fetchAccessToken = async (): Promise<string | null> => {
    try {
      const response = await fetch('https://spotify-api-silk-nine.vercel.app/api/spotify', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = await response.json();

      // Store token and expiry time
      currentTokenRef.current = data.access_token;
      tokenExpiryRef.current = Date.now() + data.expires_in * 1000 - 60000; // Refresh 1 minute early

      return data.access_token;
    } catch (err) {
      setError('Authentication error');
      console.error('Authentication error:', err);
      return null;
    }
  };

  const getValidToken = async (): Promise<string | null> => {
    // Check if current token is still valid
    if (currentTokenRef.current && Date.now() < tokenExpiryRef.current) {
      return currentTokenRef.current;
    }

    // Token expired or doesn't exist, fetch new one
    return await fetchAccessToken();
  };

  const fetchNowPlaying = async (): Promise<void> => {
    try {
      const token = await getValidToken();
      if (!token) return;

      // First try to get currently playing
      let response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle token expiry
      if (response.status === 401) {
        // Token expired, get new one and retry
        const newToken = await fetchAccessToken();
        if (newToken) {
          response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          });
        }
      }

      // If no track is currently playing, get the most recently played
      if (response.status === 204) {
        response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
          headers: {
            Authorization: `Bearer ${currentTokenRef.current}`,
          },
        });

        const data = await response.json();
        if (data && data.items && data.items.length > 0) {
          setNowPlaying({
            name: data.items[0].track.name,
            artist: data.items[0].track.artists[0].name,
            album: data.items[0].track.album.name,
            albumArt: data.items[0].track.album.images[0]?.url,
            isCurrentlyPlaying: false,
            trackLink: data.items[0].track.external_urls.spotify,
            artistLink: data.items[0].track.artists[0].external_urls.spotify,
            albumLink: data.items[0].track.album.external_urls.spotify,
          });
        }
      } else if (response.ok) {
        const data = await response.json();
        if (data && data.item) {
          setNowPlaying({
            name: data.item.name,
            artist: data.item.artists[0].name,
            album: data.item.album.name,
            albumArt: data.item.album.images[0]?.url,
            isCurrentlyPlaying: true,
            trackLink: data.item.external_urls.spotify,
            artistLink: data.item.artists[0].external_urls.spotify,
            albumLink: data.item.album.external_urls.spotify,
          });
        }
      } else if (response.status !== 401) {
        console.error('Error fetching data:', response.status);
      }

      setError(null); // Clear any previous errors
      setLoading(false);
    } catch (err) {
      setError('Error fetching data from Spotify');
      setLoading(false);
      console.error('Error fetching data from Spotify:', err);
    }
  };

  // Check if text overflows and needs scrolling
  useEffect(() => {
    if (textRef.current && containerRef.current && nowPlaying) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      setShouldScroll(textWidth > containerWidth);

      if (textWidth > containerWidth) {
        const distance = textWidth - containerWidth;
        containerRef.current.style.setProperty('--marquee-distance', `${distance}px`);
      }
    }
  }, [nowPlaying]);

  useEffect(() => {
    const initializeSpotify = async (): Promise<void> => {
      await fetchNowPlaying();

      // Set up auto-refresh every 30 seconds
      const interval = setInterval(() => {
        fetchNowPlaying();
      }, 30000);

      return () => clearInterval(interval);
    };

    initializeSpotify();
  }, []);

  return (
    <div className="flex items-center max-w-full">
      {loading && <p className="text-sm text-gray-400">Loading...</p>}

      {error && <p className="text-sm text-red-400">{error}</p>}

      {nowPlaying && (
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          <span className="text-gray-400 flex-shrink-0">
            <MusicNotesSimple size={16} />
          </span>

          <div ref={containerRef} className="overflow-hidden min-w-0 flex-1 relative">
            <div
              ref={textRef}
              className={`whitespace-nowrap text-sm md:text-md ${
                shouldScroll ? 'animate-marquee' : ''
              }`}
            >
              <a href={nowPlaying.trackLink} className="hover:underline">
                {nowPlaying.name}
              </a>{' '}
              <i className="font-serif tracking-wider text-gray-400">by</i>{' '}
              <a href={nowPlaying.artistLink} className="hover:underline">
                {nowPlaying.artist}
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(0);
          }
          40% {
            transform: translateX(calc(-1 * var(--marquee-distance, 0px)));
          }
          60% {
            transform: translateX(calc(-1 * var(--marquee-distance, 0px)));
          }
          80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 10s ease-in-out infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SpotifyNowPlaying;
