import React, { useState, useEffect } from 'react';
import type { NowPlayingData } from '../types/spotify';
import { SpotifyLogo } from '@phosphor-icons/react';

const SpotifyNowPlaying: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAccessToken = async (): Promise<string | null> => {
    try {
      // Updated to use external API
      const response = await fetch('https://spotify-api-silk-nine.vercel.app/api/spotify', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = await response.json();
      return data.access_token;
    } catch (err) {
      setError('Authentication error');
      console.error('Authentication error:', err);
      return null;
    }
  };

  const fetchNowPlaying = async (token: string): Promise<void> => {
    try {
      // First try to get currently playing
      let response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // If no track is currently playing, get the most recently played
      if (response.status === 204) {
        response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
          headers: {
            Authorization: `Bearer ${token}`,
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
      } else {
        console.error('Error fetching data:', response.status);
      }

      setLoading(false);
    } catch (err) {
      setError('Error fetching data from Spotify');
      setLoading(false);
      console.error('Error fetching data from Spotify:', err);
    }
  };

  useEffect(() => {
    const initializeSpotify = async (): Promise<void> => {
      const token = await fetchAccessToken();
      if (token) {
        fetchNowPlaying(token);

        // Set up auto-refresh every 30 seconds
        const interval = setInterval(async () => {
          const refreshedToken = await fetchAccessToken();
          if (refreshedToken) {
            fetchNowPlaying(refreshedToken);
          }
        }, 30000);

        return () => clearInterval(interval);
      }
    };

    initializeSpotify();
  }, []);

  return (
    <div className="flex">
      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {nowPlaying && (
        <div className="flex">
          <div className="flex space-x-1">
            {nowPlaying.isCurrentlyPlaying ? (
              <span className="text-gray-400 text-sm md:text-md">
                <SpotifyLogo size={16} />
              </span>
            ) : (
              <span className="text-gray-400 text-sm md:text-md">
                <SpotifyLogo size={16} />
              </span>
            )}
            <h3 className=" text-sm md:text-md">
              <a href={nowPlaying.trackLink}>"{nowPlaying.name}"</a>
            </h3>
            <p className=" text-sm md:text-md">
              – <a href={nowPlaying.artistLink}>{nowPlaying.artist}</a>
            </p>
            {/* <p className="">from <a href={nowPlaying.albumLink}>{nowPlaying.album}</a></p> */}
            <div className="status text-sm md:text-md"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyNowPlaying;
