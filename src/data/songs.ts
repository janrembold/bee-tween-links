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
    coverImage: "/cover-quiet-carnival.png",
    links: {
      spotify: "https://open.spotify.com/track/REPLACE_WITH_SPOTIFY_ID",
      appleMusicMusic: "https://music.apple.com/REPLACE_WITH_APPLE_MUSIC_URL",
    },
  },
  {
    id: "waste-the-day",
    title: "Waste the Day",
    artist: "Bee Tween",
    coverImage: "/waste-the-day.png",
    links: {
      spotify:
        "https://open.spotify.com/intl-de/track/0YoB7MjXGQTiUU2MRZfGZg?si=7661eb9e97f24029",
      appleMusicMusic:
        "https://music.apple.com/de/album/waste-the-day/6814280553?i=6814280555",
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
