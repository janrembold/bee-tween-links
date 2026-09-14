import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, d as maybeRenderHead, f as renderHead, p as addAttribute, t as defineStyleVars, u as renderTemplate, x as createAstro } from "./server_2EROUCmy.mjs";
import { t as createComponent } from "./compiler_hc8hqqS2.mjs";
import { t as getSongById } from "./songs_Cf6lt6WO.mjs";
//#region src/components/SongCard.astro
createAstro("https://astro.build");
var $$SongCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SongCard;
	const { song } = Astro.props;
	const $$definedVars = defineStyleVars([{ coverImage: song.coverImage }]);
	return renderTemplate`${maybeRenderHead($$result)}<main class="page"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><section class="card"${addAttribute(`Listen to ${song.title}`, "aria-label")}${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><div class="cover-wrap"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><img class="cover"${addAttribute(song.coverImage, "src")}${addAttribute(`${song.title} cover artwork`, "alt")}${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja></div><div class="meta"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><h1${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>${song.title}</h1><p class="artist"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>${song.artist}</p><p class="hint"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>Choose your preferred music service.</p></div><div class="links"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><a class="service"${addAttribute(`/api/track?song=${song.id}&platform=spotify`, "href")} target="_blank" rel="noopener" data-platform="spotify"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><span class="icon" aria-hidden="true"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>S</span><span class="service-copy"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><small${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>Listen on</small><strong${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>Spotify</strong></span><span class="arrow" aria-hidden="true"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>›</span></a><a class="service"${addAttribute(`/api/track?song=${song.id}&platform=apple`, "href")} target="_blank" rel="noopener" data-platform="apple"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><span class="icon" aria-hidden="true"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>♪</span><span class="service-copy"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja><small${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>Listen on</small><strong${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>Apple Music</strong></span><span class="arrow" aria-hidden="true"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>›</span></a></div></section><div class="footer"${addAttribute($$definedVars, "style")} data-astro-cid-dimny6ja>© Bee Tween</div></main>`;
}, "/Users/jr-mb/Development/bee-tween-links/src/components/SongCard.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const song = getSongById("quiet-carnival");
	if (!song) return new Response("Song not found", { status: 404 });
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${song.title} — ${song.artist}</title><meta name="description"${addAttribute(`Listen to ${song.title} by ${song.artist} on Spotify or Apple Music.`, "content")}><!-- Social preview metadata --><meta property="og:title"${addAttribute(`${song.title} — ${song.artist}`, "content")}><meta property="og:description" content="Listen now on Spotify or Apple Music."><meta property="og:image"${addAttribute(song.coverImage, "content")}><meta property="og:type" content="music.song">${renderHead($$result)}</head><body>${renderComponent($$result, "SongCard", $$SongCard, { "song": song })}</body></html>`;
}, "/Users/jr-mb/Development/bee-tween-links/src/pages/index.astro", void 0);
var $$file = "/Users/jr-mb/Development/bee-tween-links/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
