import { redirect } from 'next/navigation';

export default function TourPage() {
  // Redirect all /tour requests to the new /upcoming-shows route
  redirect('/upcoming-shows');
}
