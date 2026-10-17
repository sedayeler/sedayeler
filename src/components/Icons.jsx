const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const ArrowUpRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowUp = ({ size = 22, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
    <path d="M12 19V5" />
    <path d="M6 11l6-6 6 6" />
  </svg>
);

export const ArrowDown = ({ size = 22, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
    <path d="M12 5v14" />
    <path d="M6 13l6 6 6-6" />
  </svg>
);

export const Plus = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M12 4v16" />
    <path d="M4 12h16" />
  </svg>
);

export const Copy = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
  </svg>
);

export const Asterisk = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.6} aria-hidden="true">
    <path d="M12 3v18" />
    <path d="M4.2 7.5l15.6 9" />
    <path d="M4.2 16.5l15.6-9" />
  </svg>
);
