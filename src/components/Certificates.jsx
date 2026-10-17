import { useEffect, useRef, useState } from 'react';
import { CERTIFICATES } from '../data.js';
import SectionHead from './SectionHead.jsx';
import { ArrowUpRight } from './Icons.jsx';

function Lightbox({ cert, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={cert.title} onClick={onClose}>
      <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Kapat">
        ✕
      </button>
      <img
        className="lightbox-img"
        src={cert.image}
        alt={cert.alt || cert.title}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="sertifikalar" className="section">
      <SectionHead no="05" title="Sertifikalar" />
      <ul className="cert-list">
        {CERTIFICATES.map((c) => (
          <li key={c.title}>
            {c.image ? (
              <button className="cert-row is-clickable" onClick={() => setActive(c)}>
                <span>{c.title}</span>
                <span className="cert-view">
                  Görüntüle <ArrowUpRight size={14} />
                </span>
              </button>
            ) : (
              <div className="cert-row">
                <span>{c.title}</span>
              </div>
            )}
          </li>
        ))}
      </ul>

      {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}
