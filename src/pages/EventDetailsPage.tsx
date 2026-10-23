import { Link, useParams } from 'react-router';
import EventSignupForm from '../components/EventSignupForm';
import { events } from '../data/events';

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <section className="page">
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">← Back to Events</Link>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>{event.title}</h1>
      <p>
        {event.date} · {event.place}
      </p>
      <EventSignupForm event={event} />
      <Link to="/events">← Back to Events</Link>
    </section>
  );
}