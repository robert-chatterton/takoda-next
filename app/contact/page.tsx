import Link from 'next/link';
import {
  APPLE_MUSIC,
  BANDCAMP,
  EMAIL,
  FACEBOOK,
  INSTAGRAM,
  SOUNDCLOUD,
  SPOTIFY,
  TIKTOK,
  YOUTUBE_CHANNEL,
  YOUTUBE_MUSIC,
} from '../constants';

export default function ContactPage() {
  return (
    <div className='max-w-2xl mx-auto px-6 py-24'>
      <h1 className='text-5xl font-bold mb-8 tracking-tight'>Contact</h1>
      <p className='text-neutral-400 text-lg mb-16'>
        For booking, press inquiries, and general questions, the best place to reach me is my email.
      </p>

      <section className='mb-16'>
        <h2 className='text-xl font-semibold mb-6'>Contact and Social Media</h2>
        <div className='space-y-4'>
          <ContactInfo label='Email' value={EMAIL} />
          <ContactInfoLink
            label='Instagram'
            value='@takodadionne'
            href={INSTAGRAM}
          />
          <ContactInfoLink
            label='TikTok'
            value='@takodadionne'
            href={TIKTOK}
          />
          <ContactInfoLink
            label='Facebook'
            value='Takoda Dionne'
            href={FACEBOOK}
          />
          <ContactInfoLink
            label='Youtube'
            value='@TakodaDionneMusic'
            href={YOUTUBE_CHANNEL}
          />
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-xl font-semibold mb-6'>Streaming Services</h2>
        <div className='space-y-4'>
          <ContactInfoLink
            label='Spotify'
            value='Takoda Dionne on Spotify'
            href={SPOTIFY}
          />
          <ContactInfoLink
            label='Apple Music'
            value='Takoda Dionne on Apple Music'
            href={APPLE_MUSIC}
          />
          <ContactInfoLink
            label='Youtube Music'
            value='@TakodaDionneMusic on Youtube Music'
            href={YOUTUBE_MUSIC}
          />
          <ContactInfoLink
            label='Bandcamp'
            value='Takoda Dionne on Bandcamp'
            href={BANDCAMP}
          />
          <ContactInfoLink
            label='Soundcloud'
            value='Takoda Dionne on Soundcloud'
            href={SOUNDCLOUD}
          />
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ label, value }: { label: string; value: string }) {
  return (
    <p className='flex items-center justify-between text-neutral-300'>
      <span className='text-neutral-500'>{label}</span>
      <span>{value}</span>
    </p>
  );
}

function ContactInfoLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <p className='flex items-center justify-between text-neutral-300'>
      <span className='text-neutral-500'>{label}</span>
      <Link
        target={'_blank'}
        rel={'noreferrer'}
        href={href}
        className='underline-offset-4 hover:underline'
      >
        {value}
      </Link>
    </p>
  );
}
