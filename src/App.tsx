import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import type { Skill, ProfileLink } from './types';
import './style.css';

const skills: Skill[] = [
  { id: 1, label: 'Excel' },
  { id: 2, label: 'Data Analysis' },
  { id: 3, label: 'Reporting' },
  { id: 4, label: 'HTML' },
  { id: 5, label: 'CSS' },
  { id: 6, label: 'TypeScript' },
  { id: 7, label: 'React' },
];

const links: ProfileLink[] = [
  { id: 1, label: 'Email', url: 'mailto:ai_zhumagali@kbtu.kz' },
  { id: 2, label: 'GitHub', url: 'https://github.com/Aisana00' },
];

const bio =
  "Hi, I'm Aisana, a 3rd-year IT Management student combining my studies with a job at Sulpak, " +
  "where I work with data and reporting daily. Through this course I'm building a solid foundation " +
  'in web development so I can connect data analysis with usable interfaces.';

export default function App() {
  return (
    <>
      <Header title="Aisana" subtitle="Excel Data Analyst" />
      <main>
        <ProfileCard
          name="Aisana"
          role="Excel Data Analyst · IT Management Student"
          bio={bio}
          avatarUrl="/images/mee.jpeg"
          skills={skills}
          links={links}
        />
      </main>
      <Footer year={2026} author="Aisana" />
    </>
  );
}