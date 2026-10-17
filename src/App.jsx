import { useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Posts from './components/Posts.jsx';
import Tech from './components/Tech.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import SectionBoundary from './components/SectionBoundary.jsx';
import BackToTop from './components/BackToTop.jsx';
import { ArrowUpRight } from './components/Icons.jsx';
import { LINKS } from './data.js';

export default function App() {
  const root = useRef(null);

  // Sayfa içi bağlantılar (#deneyim gibi) o bölüme kayar ama adres çubuğuna #... eklemez;
  // alan adı her zaman temiz kalır (örn. sedayeler.com).
  useEffect(() => {
    const clearHash = () => {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    const onClick = (e) => {
      if (e.defaultPrevented) return;
      const link = e.target.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      if (!id) return;

      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = reduce ? 'auto' : 'smooth';
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
      }
      clearHash();
    };

    clearHash();
    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', clearHash);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', clearHash);
    };
  }, []);

  // İmleci takip eden ışık: state yerine CSS değişkeni, böylece yeniden render olmaz.
  const onMove = (e) => {
    const el = root.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div className="app" ref={root} onMouseMove={onMove}>
      <div className="spot" aria-hidden="true" />
      <div className="content">
        <div className="wrap">
          <Header />
          <SectionBoundary name="Giriş">
            <Hero />
          </SectionBoundary>
          <SectionBoundary name="Deneyim">
            <Experience />
          </SectionBoundary>
          <SectionBoundary name="Projeler">
            <Projects />
          </SectionBoundary>
        </div>
        <SectionBoundary name="Teknolojiler">
          <Tech />
        </SectionBoundary>
        <div className="wrap">
          <SectionBoundary name="Yazılar">
            <Posts />
          </SectionBoundary>
          <SectionBoundary name="Sertifikalar">
            <Certificates />
          </SectionBoundary>
          <SectionBoundary name="İletişim">
            <Contact />
          </SectionBoundary>
          <footer className="footer">
            <span>© 2026 Seda Yeler</span>
            <nav className="footer-links" aria-label="Sosyal bağlantılar">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </nav>
          </footer>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
