import type { APIRoute } from "astro";
import { getSongById } from "../../data/songs";

export const GET: APIRoute = async ({ url }) => {
  const song = url.searchParams.get("song");
  const platform = url.searchParams.get("platform");

  // Validierung
  if (!song || !platform) {
    return new Response("Missing song or platform parameter", { status: 400 });
  }

  // Song überprüfen
  const songData = getSongById(song);
  if (!songData) {
    return new Response("Song not found", { status: 404 });
  }

  // Link basierend auf Plattform auswählen
  const targetUrl =
    platform === "spotify"
      ? songData.links.spotify
      : songData.links.appleMusicMusic;

  // Tracking-Log
  console.log(
    `[CLICK] Song: ${song} | Platform: ${platform} | Time: ${new Date().toISOString()}`,
  );

  // Redirect zur echten Song-URL
  return new Response(null, {
    status: 302,
    headers: {
      Location: targetUrl,
    },
  });
};
