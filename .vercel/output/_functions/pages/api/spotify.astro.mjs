export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    console.log("Spotify API endpoint hit");
    const CLIENT_ID = "a385f63458f54b75acd2f9e935ddd708";
    const CLIENT_SECRET = "a408b5969c204b7f8019a918f1261641";
    const REFRESH_TOKEN = "AQA1r5Vp1w0J9AL0O8a3vZpwBn5R9st6lWKJvBSWcDkCplC8XTqC5QS4cH3TnhJGnfP-xtJ2oFTd2wMzvX_ouLbQkMIQJ_k-hHv3i1JHguobR2AlS86SbkLEpDO3vDnu1Yw";
    console.log("Environment variables check:", {
      hasClientId: !!CLIENT_ID,
      hasClientSecret: !!CLIENT_SECRET,
      hasRefreshToken: !!REFRESH_TOKEN
    });
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) ;
    const authHeader = "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64");
    console.log("Authorization header created (not showing actual value)");
    const bodyParams = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN
    });
    console.log("Request body parameters created");
    console.log("Requesting token from: https://accounts.spotify.com/api/token");
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeader
      },
      body: bodyParams
    });
    console.log("Spotify token response status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify token request failed:", response.status, response.statusText);
      console.error("Error details:", errorText);
      return new Response(
        JSON.stringify({
          error: "Token request failed",
          status: response.status,
          details: errorText
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const data = await response.json();
    console.log("Successfully obtained access token");
    return new Response(
      JSON.stringify({
        access_token: data.access_token,
        expires_in: data.expires_in
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Spotify auth error:", error);
    return new Response(
      JSON.stringify({
        error: "Authentication failed",
        details: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
const GET = async () => {
  return new Response(
    JSON.stringify({
      message: "Spotify API endpoint is working. Please use POST method for authentication.",
      env_check: {
        has_client_id: true,
        has_client_secret: true,
        has_refresh_token: true
      }
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
