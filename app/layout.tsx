import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Artist Name - Singer/Songwriter",
  description: "Official website for Artist Name - Music, tour dates, and more.",
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
            <a href="/" className="font-semibold text-lg hover:opacity-70 transition-opacity">
              Artist Name
            </a>
            <div className="hidden md:flex gap-8">
              <a href="/music/releases" className="text-neutral-400 hover:text-white transition-colors text-sm">Music</a>
              <a href="/video" className="text-neutral-400 hover:text-white transition-colors text-sm">Video</a>
              <a href="/tour" className="text-neutral-400 hover:text-white transition-colors text-sm">Tour</a>
              <a href="/bio" className="text-neutral-400 hover:text-white transition-colors text-sm">Bio</a>
            </div>
            <a
              href="/contact"
              className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Contact
            </a>
          </nav>
        </header>
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  )
}
