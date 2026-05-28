import Image from 'next/image';
import Link from 'next/link';
import { Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../gallery';
import { BLOB_STORAGE_URL } from '../constants';

export const metadata = {
  title: 'Gallery',
  description:
    'A collection of photos from performances and behind-the-scenes moments.',
};

export default function GalleryPage() {
  return (
    <main className='flex-1'>
      {/* Header */}
      <section className='max-w-4xl mx-auto px-6 py-24'>
        <h1 className='text-4xl md:text-5xl font-semibold mb-8'>Gallery</h1>
        <p className='text-lg text-neutral-400 max-w-2xl'>
          A collection of photos from performances and photoshoots.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className='max-w-4xl mx-auto px-6 pb-24'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {GALLERY_IMAGES.map((image, idx) => (
            <Link
              key={idx}
              href={`${BLOB_STORAGE_URL}/gallery/${image}`}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative aspect-square overflow-hidden rounded-lg bg-neutral-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-600'
            >
              <Image
                src={`${BLOB_STORAGE_URL}/gallery/${image}`}
                alt=''
                fill
                loading='lazy'
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              {/* Overlay on hover */}
              <div className='absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <ImageIcon className='w-8 h-8 text-white' />
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state if no images */}
        {GALLERY_IMAGES.length === 0 && (
          <div className='text-center py-16 border-2 border-dashed border-neutral-800 rounded-lg'>
            <p className='text-neutral-500'>No gallery images available yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}
