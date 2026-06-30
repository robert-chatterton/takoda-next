import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

export function IconLink({ title, href, newPage }: { title: string; href: string; newPage?: boolean; }) {
  return (
    <Link
      href={href}
      target={newPage ? '_blank' : undefined}
      rel={newPage ? 'noreferrer' : undefined}
      className='text-neutral-200 font-semibold hover:underline underline-offset-4 decoration-neutral-400 flex flex-row items-center gap-1'
    >
      {title} <SquareArrowOutUpRight className='w-4 h-4' />
    </Link>
  );
}
