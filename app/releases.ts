export interface Release {
  trackId: string;
  title: string
  type: "Album" | "Single" | "EP"
  albumArt: string;
  year: number
  bandcampSlug: string
  spotifyUrl: string;
  appleMusicUrl: string;
}


export const RELEASES: Release[] = [
  {
    trackId: "3828787856",
    title: "Train Station",
    type: "Single",
    year: 2026,
    albumArt: "train-station-cover.jpg",
    bandcampSlug: "train-station",
    spotifyUrl: "0JRMrNcQ4gtTwSiDEgKp2p",
    appleMusicUrl: "train-station/1885216794",
  },
  {
    trackId: "2416956967",
    title: "Back To",
    type: "Single",
    year: 2026,
    albumArt: "back-to-cover.jpg",
    bandcampSlug: "back-to",
    spotifyUrl: "54uQjn41V11deiHUeSK4WN",
    appleMusicUrl: "back-to/1860161362",
  },
]
