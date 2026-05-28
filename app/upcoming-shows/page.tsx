"use client";

import { useEffect } from "react";
import { IconLink } from "../components/IconLink";

export default function UpcomingShowsPage() {
  useEffect(() => {
    const script = document.createElement("script");
    // charset is deprecated but still supported for backwards compatibility
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8 tracking-tight">Upcoming Shows</h1>
      <p className="text-neutral-400 font-light text-lg mb-16 flex flex-row items-center gap-1">
        For booking inquiries or to request a show in your area, please reach
        out through the <IconLink href={"/contact"} title={"Contact Page"} />
      </p>

      <section
        id="shows"
        className="w-full flex flex-col mt-8 bg-neutral-900 py-6 px-3 text-white font-light z-10 shadow-lg gap-2"
      >
        <div
          className="bit-widget-initializer"
          data-artist-name="id_15588782"
          data-events-to-display=""
          data-background-color="rgba(31,41,55,0)"
          data-separator-color="rgba(99,102,106,1)"
          data-text-color="rgba(255,255,255,1)"
          data-font="Helvetica"
          data-auto-style="true"
          data-button-label-capitalization="uppercase"
          data-header-capitalization="uppercase"
          data-location-capitalization="titlecase"
          data-display-local-dates="true"
          data-local-dates-position="tab"
          data-display-past-dates="true"
          data-display-details="true"
          data-display-lineup="true"
          data-display-start-time="true"
          data-social-share-icon="false"
          data-display-limit="10"
          data-date-format="MMM. DD YYYY"
          data-date-orientation="vertical"
          data-date-border-color="#4A4A4A"
          data-date-border-width="1px"
          data-date-capitalization="uppercase"
          data-date-border-radius="10px"
          data-event-ticket-cta-size="small"
          data-event-custom-ticket-text=""
          data-event-ticket-text="TICKETS"
          data-event-ticket-icon="false"
          data-event-ticket-cta-text-color="rgba(255,255,255,1)"
          data-event-ticket-cta-bg-color="rgba(0,0,0,1)"
          data-event-ticket-cta-border-color="rgba(99,102,106,1)"
          data-event-ticket-cta-border-width="0px"
          data-event-ticket-cta-border-radius="2px"
          data-sold-out-button-text-color="rgba(255,255,255,1)"
          data-sold-out-button-background-color="rgba(0,0,0,1)"
          data-sold-out-button-border-color="rgba(99,102,106,1)"
          data-sold-out-button-clickable="true"
          data-event-rsvp-position="hidden"
          data-follow-section-position="hidden"
          data-play-my-city-position="hidden"
          data-language="en"
        />
      </section>

      <div className="mt-12 text-center">
        <p className="text-neutral-400 font-light text-lg mb-16 flex flex-row items-center gap-1">
          For booking inquiries or to request a show in your area, please reach
          out through the <IconLink href={"/contact"} title={"Contact Page"} />
        </p>
      </div>
    </div>
  );
}
