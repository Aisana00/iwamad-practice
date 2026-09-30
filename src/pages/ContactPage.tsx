import LinkItem from '../components/LinkItem';
import { links } from '../data';

export default function ContactPage() {
  return (
    <section className="page">
      <h2>Contact</h2>
      <p>Feel free to reach out by email or check my projects on GitHub.</p>
      <div className="links">
        {links.map(link => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}