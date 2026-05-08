import Link from "next/link"

export default function ReleasesPage() {
  const releases = [
    {
      title: "Album Title",
      year: 2025,
      type: "Album",
      description: "A deeply personal collection of songs exploring love, loss, and finding yourself.",
    },
    {
      title: "Single Title",
      year: 2026,
      type: "Single",
      description: "Latest single from upcoming album.",
    },
    {
      title: "EP Title",
      year: 2024,
      type: "EP",
      description: "Four tracks that defined a moment.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6 tracking-tight">Music</h1>
      <p className="text-neutral-400 text-lg mb-16">
        All releases, available on all major streaming platforms.
      </p>

      <div className="space-y-12">
        {releases.map((release, i) => (
          <div key={i} className="group">
            <div className="flex flex-col sm:flex-row gap-6 mb-6 group-hover:bg-neutral-900/30 p-6 -mx-6 transition-colors">
              <div className="aspect-square bg-neutral-900 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-neutral-500 text-sm font-mono">{release.type} • {release.year}</span>
                <h2 className="text-3xl font-semibold mt-2 mb-4">{release.title}</h2>
                <p className="text-neutral-400">{release.description}</p>
              </div>
              <Link href={`/music/releases#${release.year}`}>
                <span className="text-neutral-500 group-hover:text-white transition-colors">Listen →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 pt-16 border-t border-neutral-900">
        <h2 className="text-2xl font-semibold mb-8 text-center">Streaming Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Spotify", "Apple Music", "YouTube", "Amazon Music"].map((platform) => (
            <a key={platform} href={`/#${platform.toLowerCase()}`} className="px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-white transition-colors">
              {platform}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
