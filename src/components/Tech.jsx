import { MARQUEE_1, MARQUEE_2 } from '../data.js';
import SectionHead from './SectionHead.jsx';
import { Asterisk } from './Icons.jsx';

function Marquee({ items, reverse }) {
  // Kesintisiz döngü için liste iki kez yazılır; animasyon -%50 kayar.
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track${reverse ? ' is-reverse' : ''}`}>
        {doubled.map((name, i) => (
          <span key={i} className={`tech-word${i % 2 ? ' is-outline' : ''}`}>
            {name}
            <Asterisk />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Tech() {
  return (
    <section id="yigin" className="section section-tech">
      <div className="wrap">
        <SectionHead no="03" title="Teknolojiler" />
      </div>

      <div className="marquees">
        <Marquee items={MARQUEE_1} />
        <Marquee items={MARQUEE_2} reverse />
      </div>
    </section>
  );
}
