import Link from "next/link"
import { RELEASES } from "../../releases"
import { BandcampIcon } from "@/app/components/BandcampIcon"
import { SpotifyIcon } from "@/app/components/SpotifyIcon"
import { AppleMusicIcon } from "@/app/components/AppleMusicIcon"

export default function ReleasesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6 tracking-tight">Music</h1>
      <p className="text-neutral-400 text-lg mb-16">
        Music descriptive text should go here.
      </p>

      <div className="space-y-8">
        {RELEASES.map((release, i) => (
          <div key={i} className="group">
            {/* Release Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
              <div>
                <h2 className="text-3xl font-semibold">{release.title}</h2>
                <span className="text-neutral-500 text-sm font-mono mt-2">
                  {release.type} &middot; {release.year}
                </span>
              </div>

              {/* Share Links */}
              <div className="flex flex-row gap-4 items-center">
                <p className="text-neutral-400 tracking-tight font-mono text-xs">stream on</p>
                <Link
                  href={`https://open.spotify.com/track/${release.spotifyUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link hover:scale-110 transition-transform duration-150 ease-out -m-0.5"
                >
                  <SpotifyIcon />
                </Link>
                <Link
                  href={`https://music.apple.com/us/song/${release.appleMusicUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link hover:scale-110 transition-transform duration-150 ease-out -m-0.5"
                >
                  <AppleMusicIcon />
                </Link>
                <Link
                  href={`https://takodadionne.bandcamp.com/track/${release.bandcampSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link hover:scale-110 transition-transform duration-150 ease-out -m-0.5"
                >
                  <BandcampIcon />
                </Link>
              </div>
            </div>

            {/* Bandcamp Embed */}
            <iframe
              style={{ border: "0", width: "100%", height: "120px" }}
              src={`https://bandcamp.com/EmbeddedPlayer/track=${release.trackId}/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/`}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              seamless
            />
          </div>
        ))}
      </div>
    </div>
  )
}
