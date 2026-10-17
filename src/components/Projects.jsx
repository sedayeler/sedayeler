import { useState } from 'react';
import { PROJECTS } from '../data.js';
import SectionHead from './SectionHead.jsx';
import { ArrowUpRight } from './Icons.jsx';

export default function Projects() {
  const [active, setActive] = useState(0);
  const cur = PROJECTS[active];

  return (
    <section id="projeler" className="section">
      <SectionHead no="02" title="Projeler" />
      <div className="proj-layout">
        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              className={`proj-row${active === i ? ' is-active' : ''}`}
              aria-pressed={active === i}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="proj-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="proj-name">{p.name}</span>
            </button>
          ))}
        </div>

        <div className="proj-detail">
          <h3>{cur.title || cur.name}</h3>
          {cur.desc && <p>{cur.desc}</p>}
          {cur.stack?.length > 0 && (
            <div className="chips">
              {cur.stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          )}
          <div className="proj-links">
            {cur.demo && (
              <a className="link" href={cur.demo} target="_blank" rel="noopener noreferrer">
                Canlı demo <ArrowUpRight />
              </a>
            )}
            {cur.repo && (
              <a className="link" href={cur.repo} target="_blank" rel="noopener noreferrer">
                Kaynak kod <ArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
