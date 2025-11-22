export default function Logo({ size = 36, withText = false, className = "" }) {
  const s = size;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={s}
        height={s}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]"
      >
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#g)" />
        <g fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 42 L30 22 L22 22 L14 22" />
          <path d="M34 22 L50 22 L42 42 L50 42" />
        </g>
      </svg>
      {withText && (
        <span className="text-white font-extrabold tracking-wide">Vector <span className="text-red-500">Strength</span></span>
      )}
    </div>
  );
}
