export interface Song {
  id: string;
  title: string;
  artist: string;
  coverImage: string;
  links: {
    spotify: string;
    appleMusicMusic: string;
  };
}

export const songs: Song[] = [
  {
    id: "quiet-carnival",
    title: "The Quiet Carnival",
    artist: "Bee Tween",
    coverImage: "/cover.png",
    links: {
      spotify: "https://open.spotify.com/track/REPLACE_WITH_SPOTIFY_ID",
      appleMusicMusic: "https://music.apple.com/REPLACE_WITH_APPLE_MUSIC_URL",
    },
  },
  // Füge neue Songs hier hinzu:
  // {
  //   id: 'next-song',
  //   title: 'Next Song Title',
  //   artist: 'Bee Tween',
  //   coverImage: '/next-cover.png',
  //   links: {
  //     spotify: 'https://open.spotify.com/track/...',
  //     appleMusicMusic: 'https://music.apple.com/...',
  //   },
  // },
];

export function getSongById(id: string): Song | undefined {
  return songs.find((song) => song.id === id);
}
