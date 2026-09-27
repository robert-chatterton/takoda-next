export interface SiteNotification {
  id: string;
  message: string;
  href?: string;
  linkLabel?: string;
  startDate: string; // ISO date, banner becomes eligible at start of this day
  endDate: string; // ISO date, banner stops showing after end of this day
}

// Queue notifications here ahead of time. Only the first notification whose
// date range contains today (and hasn't been dismissed) is shown.
export const NOTIFICATIONS: SiteNotification[] = [
  {
    id: 'ne-rising-star',
    message: 'I was nominated for Rising Star of Maine in the New England Music Awards!',
    href: 'https://nemusicawards.com/vote/',
    linkLabel: 'Vote for me here!',
    startDate: '2026-09-01',
    endDate: '2026-10-10',
  },
];
