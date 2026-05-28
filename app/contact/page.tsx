import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8 tracking-tight">Contact</h1>
      <p className="text-neutral-400 text-lg mb-16">
        Booking, press inquiries, and general questions.
      </p>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Management</h2>
        <div className="space-y-4">
          <ContactInfo label="Email" value="management@example.com" />
          <ContactInfo label="Phone" value="+1 (555) 123-4567" />
          <ContactInfo label="Social Media" value="@artistname" />
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">Booking Agencies</h2>
        <p className="text-neutral-400 mb-4">Artist is represented by:</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
            Booking Agency Name &lt;booking@example.com&gt;
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Press</h2>
        <p className="text-neutral-400 mb-4">
          For press inquiries and interviews, please contact:
        </p>
        <ContactInfo label="Email" value="press@example.com" />
      </section>

      <section className="mt-16 pt-8 border-t border-neutral-900">
        <h2 className="text-lg font-semibold mb-4">Label / Distro</h2>
        <ContactInfo label="Record Label" value="Independent • Self-Released" />
      </section>

      <Link
        href="/"
        className="mt-16 text-neutral-500 hover:text-white transition-colors underline decoration-neutral-700 underline-offset-4"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

function ContactInfo({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-center justify-between text-neutral-300">
      <span className="text-neutral-500">{label}</span>
      <span>{value}</span>
    </p>
  );
}
