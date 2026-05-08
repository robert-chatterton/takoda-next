import Link from "next/link"

export default function VideoPage() {
  const videos = [
    {
      title: "Song Title",
      year: 2025,
      type: "Music Video",
      description: "Directed by Jane Doe.",
    },
    {
      title: "Acoustic Sessions",
      year: 2024,
      type: "Live Session",
      description: "Recorded at The Blue Note.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6 tracking-tight">Video</h1>
      <p className="text-neutral-400 text-lg mb-16">
        Official music videos, live performances, and behind-the-scenes content.
      </p>

      <div className="space-y-12">
        {videos.map((video, i) => (
          <div key={i} className="group">
            <div className="flex flex-col sm:flex-row gap-6 mb-6 group-hover:bg-neutral-900/30 p-6 -mx-6 transition-colors">
              <div className="aspect-video bg-neutral-900 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-neutral-500 text-sm font-mono">{video.type} • {video.year}</span>
                <h2 className="text-3xl font-semibold mt-2 mb-4">{video.title}</h2>
                <p className="text-neutral-400">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 pt-16 border-t border-neutral-900">
        <h2 className="text-2xl font-semibold mb-8 text-center">Subscribe to YouTube</h2>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
        >
          Subscribe
        </a>
      </section>
    </div>
  )
}
