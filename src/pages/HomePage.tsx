import ProfileCard from '../components/ProfileCard';
import { bio, links } from '../data';

export default function HomePage() {
  return (
    <ProfileCard
      name="Aisana"
      role="Excel Data Analyst · IT Management Student"
      bio={bio}
      avatarUrl={`${import.meta.env.BASE_URL}images/mee.jpeg`}
      links={links}
    />
  );
}