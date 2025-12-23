import { useEffect, useState } from "react";
import '../../style/navbar.css';

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  const scrollSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
        setIsOpen(false);
    }
  }; 

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        <div className="logo-section" onClick={() => scrollSection('#home')}>
          <img src="/assets/boyLogo.png" alt="Logo" />
          <h2 className="navbar-logo">GRAPIXIE</h2>
        </div>


        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <button onClick={() => scrollSection('#home')}>Home</button>
          <button onClick={() => scrollSection('#design')}>Designs</button>
          <button onClick={() => scrollSection('#contact')}>Contact</button>
        </div>

        <div className="navbar-actions">
          <button className="btn-outline" onClick={() => navigate('/login')}>Login</button>
          <button className="btn-primary" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
