'use client';

import { useEffect } from 'react';
import { IconLink } from '../components/IconLink';

export default function UpcomingShowsPage() {
  useEffect(() => {
    const script = document.createElement('script');
    // charset is deprecated but still supported for backwards compatibility
    script.charset = 'utf-8';
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='max-w-4xl mx-auto px-6 py-24'>
      <h1 className='text-5xl font-bold mb-8 tracking-tight'>Upcoming Shows</h1>
      <p className='text-neutral-400 font-light text-lg mb-16 flex flex-row items-center gap-1'>
        For booking inquiries or to request a show in your area, please reach
        out through the <IconLink href={'/contact'} title={'Contact Page'} />
      </p>

      <section
        id='shows'
        className='w-full flex flex-col mt-8 bg-neutral-900 py-6 px-3 text-white font-light z-10 shadow-lg gap-2'
      >
        <a
          className='bit-widget-initializer'
          data-artist-name='id_15588782'
          data-background-color='rgba(31,41,55,0)'
          data-separator-color='rgba(99,102,106,1)'
          data-text-color='rgba(255,255,255,1)'
          data-font='Verdana'
          data-auto-style='true'
          data-button-label-capitalization='uppercase'
          data-header-capitalization='uppercase'
          data-location-capitalization='uppercase'
          data-venue-capitalization='uppercase'
          data-local-dates-position='tab'
          data-display-details='true'
          data-display-lineup='true'
          data-display-start-time='true'
          data-social-share-icon='false'
          data-display-limit='10'
          data-date-format='MMM. DD YYYY'
          data-date-orientation='vertical'
          data-date-border-color='#4A4A4A'
          data-date-border-width='1px'
          data-date-capitalization='uppercase'
          data-date-border-radius='10px'
          data-event-ticket-cta-size='small'
          data-event-ticket-text='TICKETS'
          data-event-ticket-icon='false'
          data-event-ticket-cta-text-color='rgba(255,255,255,1)'
          data-event-ticket-cta-bg-color='rgba(74,74,74,1)'
          data-event-ticket-cta-border-color='rgba(74,74,74,1)'
          data-event-ticket-cta-border-width='0px'
          data-event-ticket-cta-border-radius='2px'
          data-sold-out-button-text-color='rgba(255,255,255,1)'
          data-sold-out-button-background-color='rgba(74,74,74,1)'
          data-sold-out-button-border-color='rgba(74,74,74,1)'
          data-sold-out-button-clickable='true'
          data-event-rsvp-position='hidden'
          data-event-rsvp-cta-size='medium'
          data-event-rsvp-only-show-icon='false'
          data-event-rsvp-text='RSVP'
          data-event-rsvp-icon='false'
          data-event-rsvp-cta-text-color='rgba(74,74,74,1)'
          data-event-rsvp-cta-bg-color='rgba(255,255,255,1)'
          data-event-rsvp-cta-border-color='rgba(74,74,74,1)'
          data-event-rsvp-cta-border-width='1px'
          data-event-rsvp-cta-border-radius='2px'
          data-follow-section-position='hidden'
          data-follow-section-alignment='center'
          data-follow-section-header-text='Get updates on new shows, new music, and more'
          data-follow-section-cta-size='medium'
          data-follow-section-cta-text='FOLLOW'
          data-follow-section-cta-icon='false'
          data-follow-section-cta-text-color='rgba(255,255,255,1)'
          data-follow-section-cta-bg-color='rgba(74,74,74,1)'
          data-follow-section-cta-border-color='rgba(74,74,74,1)'
          data-follow-section-cta-border-width='0px'
          data-follow-section-cta-border-radius='2px'
          data-play-my-city-position='hidden'
          data-play-my-city-alignment='center'
          data-play-my-city-header-text="Don't see a show near you?"
          data-play-my-city-cta-size='medium'
          data-play-my-city-cta-text='REQUEST A SHOW'
          data-play-my-city-cta-icon='false'
          data-play-my-city-cta-text-color='rgba(255,255,255,1)'
          data-play-my-city-cta-bg-color='rgba(74,74,74,1)'
          data-play-my-city-cta-border-color='rgba(74,74,74,1)'
          data-play-my-city-cta-border-width='0px'
          data-play-my-city-cta-border-radius='2px'
          data-language='en'
          data-layout-breakpoint='100'
          data-app-id='f229d8fbaeb307759a68136e159e5e7d'
          data-bit-logo-position='bottomRight'
          data-bit-logo-color='rgba(66,66,66,1)'
        />
      </section>

      <div className='mt-12 text-center'>
        <p className='text-neutral-400 font-light text-lg mb-16 flex flex-row items-center gap-1'>
          For booking inquiries or to request a show in your area, please reach
          out through the <IconLink href={'/contact'} title={'Contact Page'} />
        </p>
      </div>
    </div>
  );
}
