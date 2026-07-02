import { BLOB_STORAGE_URL } from './constants';

export interface Release {
  trackId: string;
  title: string;
  type: 'Album' | 'Single' | 'EP';
  albumArt: string;
  year: number;
  bandcampSlug: string;
  spotifyUrl: string;
  appleMusicUrl: string;
}

export const RELEASES: Release[] = [
  // {
  //   trackId: '1672379630', // FIXME
  //   title: 'Liar Liar',
  //   type: 'Single',
  //   year: 2026,
  //   albumArt: `${BLOB_STORAGE_URL}/music/liar-liar-cover.jpeg`,
  //   bandcampSlug: 'liar-liar',
  //   spotifyUrl: '1GZQeATN2p8YCQuJCNytIV', // FIXME
  //   appleMusicUrl: 'liar-liar/1885384286', // FIXME
  // },
  {
    trackId: '1672379630',
    title: 'To Find You',
    type: 'Single',
    year: 2026,
    albumArt: `${BLOB_STORAGE_URL}/music/to-find-you-cover.jpeg`,
    bandcampSlug: 'to-find-you',
    spotifyUrl: '1GZQeATN2p8YCQuJCNytIV',
    appleMusicUrl: 'to-find-you/1885384286',
  },
  {
    trackId: '3828787856',
    title: 'Train Station',
    type: 'Single',
    year: 2026,
    albumArt: `${BLOB_STORAGE_URL}/music/train-station-cover.jpg`,
    bandcampSlug: 'train-station',
    spotifyUrl: '0JRMrNcQ4gtTwSiDEgKp2p',
    appleMusicUrl: 'train-station/1885216794',
  },
  {
    trackId: '2416956967',
    title: 'Back To',
    type: 'Single',
    year: 2026,
    albumArt: `${BLOB_STORAGE_URL}/music/back-to-cover.jpg`,
    bandcampSlug: 'back-to',
    spotifyUrl: '54uQjn41V11deiHUeSK4WN',
    appleMusicUrl: 'back-to/1860161362',
  },
];
