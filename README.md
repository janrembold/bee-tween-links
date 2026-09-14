# Bee Tween Links

Music distribution landing pages with click tracking for Spotify and Apple Music links.

## Setup

```bash
npm install
npm run dev
```

## Deployment to Vercel

```bash
vercel
```

The project automatically builds with the Vercel adapter and tracks all music service clicks via `/api/track`.

## Adding New Songs

1. **Open** [src/data/songs.ts](src/data/songs.ts)
2. **Add** a new song object to the `songs` array:

```typescript
{
  id: 'your-song-id',
  title: 'Song Title',
  artist: 'Bee Tween',
  coverImage: '/cover-file.png',  // Add image to /public
  links: {
    spotify: 'https://open.spotify.com/track/...',
    appleMusicMusic: 'https://music.apple.com/...',
  },
}
```

3. **Add** the cover image to `/public/` folder
4. **Access** the song at `http://localhost:3000/song/your-song-id` or the homepage displays the default song

## Click Tracking

Every click is logged to Vercel with:

- `song`: Song ID
- `platform`: "spotify" or "apple"
- `timestamp`: ISO 8601 format

View logs in Vercel Dashboard → Logs section.

## Project Structure

```
src/
├── data/songs.ts              # Song configuration
├── components/SongCard.astro  # Song display component
├── pages/
│   ├── index.astro           # Homepage (defaults to quiet-carnival)
│   ├── api/track.ts          # Click tracking endpoint
│   └── song/[id].astro       # Dynamic song pages
public/
├── cover.png                 # Song artwork
```

## Build & Preview

```bash
npm run build    # Build for Vercel
npm run preview  # Preview production build locally
```
