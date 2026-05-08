import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Artist Name
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10">
            Singer / Songwriter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music/releases"
              className="px-8 py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              Listen Now
            </Link>
            <Link
              href="/tour"
              className="px-8 py-4 border border-neutral-700 text-neutral-300 hover:border-white hover:text-white transition-colors"
            >
              Tour Dates
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-10">Latest Releases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Link key={i} href={`/music/releases`} className="group block cursor-pointer">
              <div className="aspect-square bg-neutral-900 mb-6 group-hover:bg-neutral-800 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-neutral-400 text-sm">View Release</span>
                </div>
              </div>
              <h3 className="font-medium text-xl">Release Title {i}</h3>
              <p className="text-neutral-500 mt-2 text-sm">Single • 2026</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tour Dates Preview */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-neutral-900">
        <h2 className="text-3xl font-semibold mb-10">Upcoming Shows</h2>
        <div className="space-y-0">
          {[
            { city: "New York", venue: "Terminal 5", date: "Jan 15, 2026" },
            { city: "Los Angeles", venue: "The Wiltern", date: "Feb 20, 2026" },
            { city: "Chicago", venue: "Metro", date: "Mar 10, 2026" },
          ].map((show, i) => (
            <Link
              key={i}
              href={`/tour`}
              className="flex items-center justify-between py-5 border-b border-neutral-900 last:border-0 group hover:bg-neutral-900/50 -mx-6 px-6 transition-colors"
            >
              <div>
                <h3 className="font-medium text-lg">{show.city}</h3>
                <p className="text-neutral-500 text-sm">{show.venue}</p>
              </div>
              <span className="text-neutral-400 font-mono text-sm">{show.date}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/tour"
            className="text-neutral-500 hover:text-white transition-colors underline decoration-neutral-700 underline-offset-4"
          >
            View Full Tour →
          </Link>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-neutral-400 mb-8">Sign up for news, exclusive content, and ticket pre-sales.</p>
        <Link href="/contact" className="px-6 py-3 border border-neutral-700 text-neutral-300 hover:border-white hover:text-white transition-colors">
          Contact & Bookings
        </Link>
      </section>
    </main>
  )
}
