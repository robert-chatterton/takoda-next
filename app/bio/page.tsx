import Link from "next/link"

export default function BioPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8 tracking-tight">Biography</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-neutral-400 leading-relaxed">
          Artist Name is a singer/songwriter based in [City], known for their intimate lyrics and
          dynamic live performances. Drawing from personal experiences and observations, each song
          tells a story of love, heartbreak, hope, and the journey of self-discovery.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Musical Influences</h2>
        <p className="text-neutral-400 leading-relaxed">
          Artist has cited influences ranging from classic folk storytellers to modern indie rock.
          Their sound blends acoustic textures with subtle electronic elements, creating a sonic
          landscape that is both grounded and expansive.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Press & Media</h2>
        <div className="space-y-4">
          {[
            { outlet: "Pitchfork", quote: "A voice that demands to be heard." },
            { outlet: "NPR", quote: "Stunning songwriting and unforgettable melodies." },
            { outlet: "Billboard", quote: "Rising star with a fresh perspective." },
          ].map((item, i) => (
            <div key={i} className="pb-6 border-b border-neutral-900 last:border-0">
              <span className="text-neutral-500 text-sm">{item.outlet}</span>
              <p className="text-neutral-300 mt-1 italic">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Management & Booking</h2>
        <p className="text-neutral-400 mb-4">
          For bookings, press inquiries, or partnerships:
        </p>
        <Link href="/contact" className="text-white underline decoration-neutral-700 underline-offset-4 hover:text-neutral-300">
          Contact Management →
        </Link>
      </section>
    </div>
  )
}
