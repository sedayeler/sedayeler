import { useState } from 'react';
import { EXPERIENCE } from '../data.js';
import SectionHead from './SectionHead.jsx';
import { Plus, ArrowUpRight } from './Icons.jsx';

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="deneyim" className="section">
      <SectionHead no="01" title="Deneyim" aside="2024 — 2026" />
      <div className="exp-list">
        {EXPERIENCE.map((job, i) => {
          const isOpen = open === i;
          return (
            <div className="exp-item" key={job.company + job.years}>
              <button
                className="exp-row"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="exp-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="exp-role">{job.role}</span>
                <span className="exp-company">{job.company}</span>
                <span className="exp-years">{job.years}</span>
                <span className={`exp-plus${isOpen ? ' is-open' : ''}`}>
                  <Plus />
                </span>
              </button>
              <div className={`exp-panel${isOpen ? ' is-open' : ''}`}>
                <div className="exp-panel-inner">
                  <div className="exp-detail">
                    {Array.isArray(job.desc) ? (
                      <ul className="exp-description">
                        {job.desc.map((description) => (
                          <li key={description}>{description}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{job.desc}</p>
                    )}
                    <div className="exp-side">
                      <span className="exp-place mono-label">
                        {job.url ? (
                          <a
                            className="link"
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${job.place} sitesini aç`}
                          >
                            {job.place} <ArrowUpRight size={14} />
                          </a>
                        ) : (
                          job.place
                        )}
                        {job.placeNote && <span className="exp-note"> · {job.placeNote}</span>}
                      </span>
                      <div className="chips">
                        {(job.tags ?? []).map((t) => (
                          <span className="chip" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
