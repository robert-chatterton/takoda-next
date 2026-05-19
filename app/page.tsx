import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Takoda Dionne
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10">
            Live Looping Singer-Songwriter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music/releases"
              className="px-8 py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              Listen Now
            </Link>
            <Link
              href="/upcoming-shows"
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
          <Link href="/music/releases" className="group block cursor-pointer">
            <div className="aspect-square bg-neutral-900 mb-6 group-hover:bg-neutral-800 transition-colors relative overflow-hidden">
              <Image
                src="/images/music/train-station-cover.jpg"
                alt="Train Station EP cover"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <h3 className="font-medium text-xl">Train Station</h3>
            <p className="text-neutral-500 mt-2 text-sm">EP • 2026</p>
          </Link>

          <Link href="/music/releases" className="group block cursor-pointer">
            <div className="aspect-square bg-neutral-900 mb-6 group-hover:bg-neutral-800 transition-colors relative overflow-hidden flex items-center justify-center">
              <span className="text-neutral-500 text-sm font-medium">Previous Release</span>
            </div>
            <h3 className="font-medium text-xl">Check Out My Music</h3>
            <p className="text-neutral-500 mt-2 text-sm">Available on all platforms</p>
          </Link>

          <Link href="/music/releases" className="group block cursor-pointer">
            <div className="aspect-square bg-neutral-900 mb-6 group-hover:bg-neutral-800 transition-colors relative overflow-hidden flex items-center justify-center">
              <span className="text-neutral-500 text-sm font-medium">More Music</span>
            </div>
            <h3 className="font-medium text-xl">Listen Now</h3>
            <p className="text-neutral-500 mt-2 text-sm">Spotify • Apple Music & more</p>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-neutral-900">
        <h2 className="text-3xl font-semibold mb-10">About Me</h2>
        <div className="bg-neutral-900/50 rounded-lg p-8">
          <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
            Takoda Dionne is a live looping singer-songwriter born and raised on the coast of Maine and currently based in Bar Harbor.
          </p>
          <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
            He plays a curated selection of covers and originals, both live looped and acoustic, using guitar and piano. Takoda&apos;s music is a thoughtful blend of pop, rock, folk and hip-hop with honest lyrics. His impressive live performances are celebrated for his songwriting ability and technical musical skills.
          </p>
          <div className="rounded-lg my-6 overflow-hidden">
            <Image
              src="/images/DSC_0272.png"
              alt="Takoda performing live at a venue"
              width={800}
              height={600}
              className="w-full max-w-md mx-auto"
            />
          </div>
          <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
            Using live looping, Takoda layers acoustic guitar, percussion, bass and vocals using a single guitar and piano. He adds his fiery vocals and layered harmonies to create the sound of a multi-instrumental band with multiple singers. His music is always live with nothing pre-recorded.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-neutral-900">
        <h2 className="text-3xl font-semibold mb-10">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Image
            src="/images/about1.jpg"
            alt="Live performance photo 1"
            width={400}
            height={300}
            className="rounded-lg w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <Image
            src="/images/about2.jpg"
            alt="Live performance photo 2"
            width={400}
            height={300}
            className="rounded-lg w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <Image
            src="/images/DSC_0272.png"
            alt="Live performance photo 3"
            width={400}
            height={300}
            className="rounded-lg w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
        <Link
          href="/gallery"
          className="mt-8 text-neutral-400 hover:text-white underline underline-offset-4"
        >
          View Full Gallery →
        </Link>
      </section>

      {/* Contact/Booking */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact & Bookings</h2>
        <Link
          href="/contact"
          className="text-neutral-400 hover:underline underline-offset-4 decoration-neutral-400"
        >
          Contact Me!
        </Link>
      </section>
    </main>
  )
}
