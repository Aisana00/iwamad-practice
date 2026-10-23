import EventCard from '../components/EventCard';
import { events } from '../data/events';

export default function EventsPage() {
  return (
    <section className="page">
      <h1>Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}