import Link from "next/link"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ARTIST_NAME } from "./constants"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${ARTIST_NAME} - Live Looping Musician`,
  description: `Official website for ${ARTIST_NAME} - Music, upcoming shows, and live looping performances.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased bg-neutral-950 text-neutral-100`}>
      <body className="min-h-full flex flex-col font-sans">
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-900">
          <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg hover:opacity-70 transition-opacity">
              {ARTIST_NAME}
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/music/releases" className="text-neutral-400 hover:text-white transition-colors text-sm">Music</Link>
              <Link href="/video" className="text-neutral-400 hover:text-white transition-colors text-sm">Video</Link>
              <Link href="/upcoming-shows" className="text-neutral-400 hover:text-white transition-colors text-sm">Upcoming Shows</Link>
              <Link href="/bio" className="text-neutral-400 hover:text-white transition-colors text-sm">Bio</Link>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  )
}
