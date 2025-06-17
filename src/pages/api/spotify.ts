// File: src/pages/api/spotify.ts
import type { APIRoute } from 'astro';

// Disable static pre-rendering
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Log more details to help debug
    console.log('Spotify API endpoint hit');

    // Your Spotify API credentials - store these in environment variables
    const CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.SPOTIFY_CLIENT_SECRET;
    const REFRESH_TOKEN = import.meta.env.SPOTIFY_REFRESH_TOKEN;

    // Additional debugging
    console.log('Environment variables check:', {
      hasClientId: !!CLIENT_ID,
      hasClientSecret: !!CLIENT_SECRET,
      hasRefreshToken: !!REFRESH_TOKEN,
    });

    // Validate credentials
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      console.error('Missing credentials:', {
        hasClientId: !!CLIENT_ID,
        hasClientSecret: !!CLIENT_SECRET,
        hasRefreshToken: !!REFRESH_TOKEN,
      });
      return new Response(
        JSON.stringify({
          error: 'Missing credentials',
          details: 'One or more required environment variables are missing',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Create authorization header
    const authHeader = 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64');
    console.log('Authorization header created (not showing actual value)');

    // Create body parameters
    const bodyParams = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    });
    console.log('Request body parameters created');

    // Print the URL we're about to request (without sensitive data)
    console.log('Requesting token from: https://accounts.spotify.com/api/token');

    // Get a new access token using the refresh token
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: authHeader,
      },
      body: bodyParams,
    });

    // Log response status
    console.log('Spotify token response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Spotify token request failed:', response.status, response.statusText);
      console.error('Error details:', errorText);

      return new Response(
        JSON.stringify({
          error: 'Token request failed',
          status: response.status,
          details: errorText,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const data = await response.json();
    console.log('Successfully obtained access token');

    return new Response(
      JSON.stringify({
        access_token: data.access_token,
        expires_in: data.expires_in,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Spotify auth error:', error);
    return new Response(
      JSON.stringify({
        error: 'Authentication failed',
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

// Debug endpoint
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: 'Spotify API endpoint is working. Please use POST method for authentication.',
      env_check: {
        has_client_id: !!import.meta.env.SPOTIFY_CLIENT_ID,
        has_client_secret: !!import.meta.env.SPOTIFY_CLIENT_SECRET,
        has_refresh_token: !!import.meta.env.SPOTIFY_REFRESH_TOKEN,
      },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
