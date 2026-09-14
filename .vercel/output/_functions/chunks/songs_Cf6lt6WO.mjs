//#region src/data/songs.ts
var songs = [{
	id: "quiet-carnival",
	title: "The Quiet Carnival",
	artist: "Bee Tween",
	coverImage: "/cover.png",
	links: {
		spotify: "https://open.spotify.com/track/REPLACE_WITH_SPOTIFY_ID",
		appleMusicMusic: "https://music.apple.com/REPLACE_WITH_APPLE_MUSIC_URL"
	}
}];
function getSongById(id) {
	return songs.find((song) => song.id === id);
}
//#endregion
export { getSongById as t };
