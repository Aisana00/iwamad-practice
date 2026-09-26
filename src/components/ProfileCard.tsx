import { useState } from 'react';
import type { Skill, ProfileLink } from '../types';
import SkillBadge from './SkillBadge';
import LinkItem from './LinkItem';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  skills: Skill[];
  links: ProfileLink[];
};

export default function ProfileCard({ name, role, bio, avatarUrl, skills, links }: ProfileCardProps) {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  function handleLike() {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  }

  return (
    <article className={liked ? 'card card--liked' : 'card'}>
      {avatarUrl && <img className="avatar" src={avatarUrl} alt={`${name}'s profile avatar photo`} />}
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>

      <div className="links">
        {links.map(link => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>

      <button className="like-btn" onClick={handleLike}>
        {liked ? '❤️ Liked' : '🤍 Like'} · {likes}
      </button>

      <h3>Skills</h3>
      {skills.length === 0 ? (
        <p>No skills added yet.</p>
      ) : (
        <ul className="skills">
          {skills.map(skill => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      )}
    </article>
  );
}