import { useState } from 'react';
import { CODE } from '../data.js';

const FILES = Object.keys(CODE);
const DEFAULT_LINE = 5;

const textOf = (tokens) => tokens.reduce((n, t) => n + (typeof t === 'string' ? t.length : t[1].length), 0);

function Line({ n, tokens, active, onHover }) {
  return (
    <div className={`code-line${active ? ' is-active' : ''}`} onMouseEnter={() => onHover(n)}>
      <span className="ln">{n}</span>
      <span className="src">
        {tokens.map((t, i) =>
          typeof t === 'string' ? (
            <span key={i}>{t}</span>
          ) : (
            <span key={i} className={`tok-${t[0]}`}>
              {t[1]}
            </span>
          ),
        )}
      </span>
    </div>
  );
}

export default function CodeWindow() {
  const [file, setFile] = useState(FILES[0]);
  const [line, setLine] = useState(DEFAULT_LINE);
  const current = CODE[file];
  const col = textOf(current.lines[line - 1] || []) + 1;

  const pick = (name) => {
    setFile(name);
    setLine(DEFAULT_LINE);
  };

  return (
    <div className="code-window fade" style={{ animationDelay: '.9s' }}>
      <div className="code-titlebar" aria-hidden="true">
        <span className="code-dot" />
        <span className="code-dot" />
        <span className="code-dot" />
        <span className="code-title">portfolio — {file}</span>
      </div>

      <div className="code-tabs" role="tablist" aria-label="Kod dosyaları">
        {FILES.map((name) => (
          <button
            key={name}
            role="tab"
            aria-selected={file === name}
            className={`code-tab${file === name ? ' is-active' : ''}`}
            onClick={() => pick(name)}
          >
            <span className="acc">{CODE[name].badge}</span> {name}
          </button>
        ))}
      </div>

      <div className="code-body" role="img" aria-label={current.label}>
        <div className="code-pane" key={file}>
          {current.lines.map((tokens, i) => (
            <Line key={i} n={i + 1} tokens={tokens} active={line === i + 1} onHover={setLine} />
          ))}
        </div>
      </div>

      <div className="code-output">
        <div className="code-output-label">Çıktı</div>
        <div>
          Merhaba, ben Seda! <span className="caret" aria-hidden="true" />
        </div>
      </div>

      <div className="code-status" aria-hidden="true">
        <div>
          <span className="code-branch">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="5" r="2" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="18" cy="8" r="2" />
              <path d="M6 7v10" />
              <path d="M18 10c0 4-6 3-11.5 7" />
            </svg>
            main
          </span>
          <span>0 hata · 0 uyarı</span>
        </div>
        <div>
          <span>
            Ln {line}, Col {col}
          </span>
          <span>UTF-8</span>
          <span>{current.lang}</span>
        </div>
      </div>
    </div>
  );
}
