import type { ProfileLink } from '../types';
import LinkItem from './LinkItem';
import LikeButton from './LikeButton';
import Card from './ui/Card';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  links: ProfileLink[];
};

export default function ProfileCard({ name, role, bio, avatarUrl, links }: ProfileCardProps) {
  return (
    <Card>
      {avatarUrl && <img className="avatar" src={avatarUrl} alt={`${name}'s profile avatar photo`} />}
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>

      <div className="links">
        {links.map(link => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>

      <LikeButton />
    </Card>
  );
}