import type { Skill } from '../types';

type SkillBadgeProps = {
  skill: Skill;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return <li className="skill-badge">{skill.label}</li>;
}