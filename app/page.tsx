import Image from "next/image"
import Link from "next/link"
import { RELEASES } from "./releases"
import { ReleaseLink } from "./components/ReleaseLink"
import { HeroCarousel } from "./components/HeroCarousel"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroCarousel />

      {/* Latest Releases */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-10">Latest Releases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {RELEASES.slice(0, 5).map((release, idx) => (
            <ReleaseLink key={idx} release={release} />
          ))}

          <Link href="/music" className="group block cursor-pointer">
            <div className="aspect-square bg-neutral-900 mb-6 group-hover:bg-neutral-800 transition-colors relative overflow-hidden flex items-center justify-center">
              <span className="text-neutral-500 text-sm font-medium">See more of my music</span>
            </div>
            <h3 className="font-medium text-xl">Listen Now</h3>
            <p className="text-neutral-500 mt-2 text-sm">Spotify • Apple Music • Bandcamp & more</p>
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
