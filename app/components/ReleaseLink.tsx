import Link from "next/link";
import Image from "next/image";
import { Release } from "../releases";

export function ReleaseLink({ release }: { release: Release }) {
  return (
    <Link href="/music" className="group block cursor-pointer">
      <div className="aspect-square bg-neutral-900 mb-6 group-hover:bg-neutral-800 transition-colors relative overflow-hidden">
        <Image
          src={release.albumArt}
          alt={release.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <h3 className="font-medium text-xl">{release.title}</h3>
      <p className="text-neutral-500 mt-2 text-sm">
        {release.type} • {release.year}
      </p>
    </Link>
  );
}
