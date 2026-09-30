import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <p className="header-likes">♥ {likes}</p>
    </header>
  );
}