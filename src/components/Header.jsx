import { NAV } from '../data.js';

export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="brand">
        <span className="brand-mark" aria-hidden="true">
          SY
        </span>
        Seda Yeler
      </a>
      <nav className="nav" aria-label="Bölümler">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
