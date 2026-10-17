import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header title="Aisana" subtitle="Excel Data Analyst" />
      <main>
        <Outlet />
      </main>
      <Footer year={2026} author="Aisana" />
    </>
  );
}