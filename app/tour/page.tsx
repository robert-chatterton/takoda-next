import Link from "next/link"

export default function TourPage() {
  const upcoming = [
    { city: "New York", venue: "Terminal 5", date: "Jan 15, 2026", time: "8:00 PM", tickets: "Sold Out" },
    { city: "Los Angeles", venue: "The Wiltern", date: "Feb 20, 2026", time: "8:30 PM", tickets: "Available" },
    { city: "Chicago", venue: "Metro", date: "Mar 10, 2026", time: "9:00 PM", tickets: "Available" },
    { city: "Boston", venue: "Warfield", date: "Apr 5, 2026", time: "8:00 PM", tickets: "Available" },
    { city: "Seattle", venue: "Neumos", date: "Apr 18, 2026", time: "8:30 PM", tickets: "Available" },
    { city: "Portland", venue: "Crystal Ballroom", date: "Apr 25, 2026", time: "9:00 PM", tickets: "Available" },
  ]

  const past = [
    { city: "Toronto", venue: "Meridian Hall", date: "Dec 10, 2025", status: "Past Show" },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6 tracking-tight">Tour</h1>
      <p className="text-neutral-400 text-lg mb-16">
        Join me on the road. Dates subject to change.
      </p>

      {/* Upcoming */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Upcoming Shows
        </h2>
        <div className="space-y-2">
          {upcoming.map((show, i) => (
            <Link key={i} href={`/tour#${show.city.toLowerCase()}`} className="group flex items-baseline justify-between py-4 border-b border-neutral-900 last:border-0 hover:bg-neutral-900/30 -mx-6 px-6 transition-colors">
              <div>
                <h3 className="font-medium text-lg">{show.city}</h3>
                <p className="text-neutral-500 text-sm">{show.venue}</p>
              </div>
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-neutral-400">{show.date}</span>
                {show.time && (
                  <>
                    <span className="text-neutral-600 text-sm hidden sm:inline">×</span>
                    <span className="text-neutral-500 text-sm">{show.time}</span>
                  </>
                )}
                <span className={`font-mono text-sm px-3 py-1 rounded-full ${show.tickets === "Sold Out" ? "bg-neutral-800 text-neutral-400" : "bg-green-900/50 text-green-400 border border-green-900"}`}>
                  {show.tickets}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Past */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neutral-700" />
          Past Shows
        </h2>
        <div className="space-y-2">
          {past.map((show, i) => (
            <Link key={i} href={`/tour#${show.city.toLowerCase()}`} className="group flex items-baseline justify-between py-4 border-b border-neutral-900 last:border-0 text-neutral-600 -mx-6 px-6 hover:text-neutral-400 transition-colors">
              <div>
                <h3 className="font-medium">{show.city}</h3>
                <p className="text-sm">{show.venue}</p>
              </div>
              <span className="font-mono text-sm">{show.date} • {show.status}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section className="mt-20 pt-16 border-t border-neutral-900 bg-neutral-900/30 rounded-lg p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Booking & Promotions</h2>
        <p className="text-neutral-400 mb-6 max-w-md mx-auto">
          For bookings, press inquiries, or festival slots, please contact the team below.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 border border-neutral-700 text-neutral-300 hover:border-white hover:text-white transition-colors">
          Contact Management
        </Link>
      </section>
    </div>
  )
}
