import { useEffect, useState } from 'react';
import { ArrowUp } from './Icons.jsx';

// Sayfanın sonuna yaklaşınca sağ altta belirir, tıklayınca en üste götürür.
const NEAR_BOTTOM = 320;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const { scrollY, innerHeight } = window;
      const total = document.documentElement.scrollHeight;
      setVisible(scrollY > 0 && scrollY + innerHeight >= total - NEAR_BOTTOM);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  const goTop = (e) => {
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <a
      className={`to-top${visible ? ' is-visible' : ''}`}
      href="#top"
      onClick={goTop}
      aria-label="En üste dön"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp />
    </a>
  );
}
