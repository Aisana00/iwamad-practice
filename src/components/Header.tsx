import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>
      <p className="header-likes">♥ {likes}</p>
    </header>
  );
}