import SkillBadge from '../components/SkillBadge';
import { skills } from '../data';

export default function SkillsPage() {
  return (
    <section className="page">
      <h2>Skills</h2>
      {skills.length === 0 ? (
        <p>No skills added yet.</p>
      ) : (
        <ul className="skills">
          {skills.map(skill => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      )}
    </section>
  );
}