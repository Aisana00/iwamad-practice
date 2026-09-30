import { useState } from 'react';
import type { ProfileLink } from '../types';
import LinkItem from './LinkItem';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  links: ProfileLink[];
};

export default function ProfileCard({ name, role, bio, avatarUrl, links }: ProfileCardProps) {
  const [likes, setLikes] = useState<number>(0);

  return (
    <article className="card">
      {avatarUrl && <img className="avatar" src={avatarUrl} alt={`${name}'s profile avatar photo`} />}
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>

      <div className="links">
        {links.map(link => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>

      <button className="like-btn" onClick={() => setLikes(likes + 1)}>
        ❤️ Like · {likes}
      </button>
    </article>
  );
}