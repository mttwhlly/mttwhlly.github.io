export interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  uri: string;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  uri: string;
  images: SpotifyImage[];
}

export interface SpotifyTrack {
  id: string;
  name: string;
  uri: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
}

export interface SpotifyCurrentlyPlaying {
  item: SpotifyTrack;
  is_playing: boolean;
  progress_ms: number;
}

export interface SpotifyHistoryItem {
  track: SpotifyTrack;
  played_at: string;
}

export interface SpotifyRecentlyPlayed {
  items: SpotifyHistoryItem[];
}

export interface NowPlayingData {
  name: string;
  artist: string;
  album: string;
  albumArt?: string;
  isCurrentlyPlaying: boolean;
  trackLink: string;
  artistLink: string;
  albumLink: string;
}
