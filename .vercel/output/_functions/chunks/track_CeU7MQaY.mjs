import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as getSongById } from "./songs_Cf6lt6WO.mjs";
//#region src/pages/api/track.ts
var track_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ url }) => {
	const song = url.searchParams.get("song");
	const platform = url.searchParams.get("platform");
	if (!song || !platform) return new Response("Missing song or platform parameter", { status: 400 });
	const songData = getSongById(song);
	if (!songData) return new Response("Song not found", { status: 404 });
	const targetUrl = platform === "spotify" ? songData.links.spotify : songData.links.appleMusicMusic;
	console.log(`[CLICK] Song: ${song} | Platform: ${platform} | Time: ${(/* @__PURE__ */ new Date()).toISOString()}`);
	return new Response(null, {
		status: 302,
		headers: { Location: targetUrl }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/track@_@ts
var page = () => track_exports;
//#endregion
export { page };
