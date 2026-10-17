import { useEffect, useRef, useState } from 'react';
import { EMAIL, LINKS } from '../data.js';
import SectionHead from './SectionHead.jsx';
import { ArrowUpRight, Copy } from './Icons.jsx';

// E-posta adresine tıklayınca Gmail'de yeni ileti penceresi açılır, alıcı kısmı hazır gelir.
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* pano erişimi yoksa sessizce geç */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="iletisim" className="section section-contact">
      <SectionHead no="06" title="İletişim" />
      <h2 className="contact-title">
        Hadi <em>tanışalım</em>
      </h2>

      <div className="mail">
        <a className="mail-link" href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer">
          {EMAIL}
        </a>
        <button className="mail-pill" onClick={copyMail}>
          <Copy />
          <span aria-live="polite">{copied ? 'Kopyalandı' : 'Kopyala'}</span>
        </button>
      </div>

      <div className="contact-links">
        {LINKS.map((l) => (
          <a
            key={l.label}
            className="link"
            href={l.href}
            {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {l.label} <ArrowUpRight />
          </a>
        ))}
      </div>
    </section>
  );
}
