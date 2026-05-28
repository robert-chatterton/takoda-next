import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { ARTIST_NAME, LOWER_ARTIST_NAME } from "./constants";
import { Music, MicVocal, UserRound } from "lucide-react";
import localFont from "next/font/local";

const STACK_SANS_FONT = localFont({
  src: "./fonts/StackSansHeadline-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: `${ARTIST_NAME} - Live Looping Musician`,
  description: `Official website for ${ARTIST_NAME} - Music, upcoming shows, and live looping performances.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${STACK_SANS_FONT.className} h-full antialiased bg-neutral-950 text-neutral-100`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-900">
          <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              {LOWER_ARTIST_NAME}
            </Link>
            <div className="hidden md:flex gap-8">
              <Link
                href="/music"
                className="flex flex-row items-center gap-1 text-neutral-100 opacity-70 hover:opacity-100 transition-opacity text-sm"
              >
                <Music className="w-4 h-4" />
                music
              </Link>
              <Link
                href="/upcoming-shows"
                className="flex flex-row items-center gap-1 text-neutral-100 opacity-70 hover:opacity-100 transition-opacity text-sm"
              >
                <MicVocal className="w-4 h-4" />
                upcoming shows
              </Link>
              <Link
                href="/bio"
                className="flex flex-row items-center gap-1 text-neutral-100 opacity-70 hover:opacity-100 transition-opacity text-sm"
              >
                <UserRound className="w-4 h-4" />
                bio
              </Link>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 border border-neutral-700 text-neutral-100 opacity-70 hover:opacity-100 transition-opacity text-sm"
            >
              contact
            </Link>
          </nav>
        </header>
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
