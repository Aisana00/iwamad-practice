import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <section className="page">
      <h2>404 — Page not found</h2>
      <p>This page doesn't exist.</p>
      <Link to="/">← Back to Home</Link>
    </section>
  );
}