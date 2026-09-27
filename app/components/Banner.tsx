'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NOTIFICATIONS, SiteNotification } from '../notifications';

function isActive(notification: SiteNotification, now: Date) {
  const start = new Date(`${notification.startDate}T00:00:00`);
  const end = new Date(`${notification.endDate}T23:59:59.999`);
  return now >= start && now <= end;
}

function BannerLink({ href, label }: { href: string; label: string }) {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-200 whitespace-nowrap'
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className='underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-200 whitespace-nowrap'
    >
      {label}
    </Link>
  );
}

export function Banner() {
  const [notification, setNotification] = useState<SiteNotification | null>(
    null
  );

  useEffect(() => {
    const pickActive = () => {
      const active =
        NOTIFICATIONS.find((n) => isActive(n, new Date())) ?? null;
      setNotification(active);
    };

    pickActive();

    // Re-check periodically so a banner disappears on its own once its
    // window ends, without requiring a page refresh.
    const interval = setInterval(pickActive, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!notification) {
    return null;
  }

  return (
    <div className='bg-neutral-900 border-b border-neutral-800'>
      <div className='max-w-4xl mx-auto px-6 py-3 flex items-center justify-center text-sm text-neutral-200'>
        <p className='text-center'>
          {notification.message}
          {notification.href && notification.linkLabel && (
            <>
              {' '}
              <BannerLink
                href={notification.href}
                label={notification.linkLabel}
              />
            </>
          )}
        </p>
      </div>
    </div>
  );
}
