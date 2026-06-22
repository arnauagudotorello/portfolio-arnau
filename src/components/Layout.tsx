import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-20 overflow-x-hidden" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
