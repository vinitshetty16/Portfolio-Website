/** Minimal abstract data graph — no stock photo, reads as analytical. */
export function HeroGraph() {
  return (
    <div className="hero-graph" aria-hidden>
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-graph__svg">
        <defs>
          <linearGradient id="hg-line" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#E8A020" stopOpacity="0.55" />
            <stop offset="1" stopColor="#E8A020" stopOpacity="0.1" />
          </linearGradient>
          <filter id="hg-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="24" y="200" width="6" height="56" rx="1" fill="#18181E" stroke="rgba(255,255,255,0.08)" />
        <rect x="44" y="168" width="6" height="88" rx="1" fill="#18181E" stroke="rgba(255,255,255,0.08)" />
        <rect x="64" y="140" width="6" height="116" rx="1" fill="#18181E" stroke="rgba(255,255,255,0.08)" />
        <rect x="84" y="184" width="6" height="72" rx="1" fill="#18181E" stroke="rgba(255,255,255,0.08)" />
        <rect x="104" y="120" width="6" height="136" rx="1" fill="#18181E" stroke="rgba(232,160,32,0.25)" />
        <path
          d="M 120 48 C 160 32 200 96 240 72 S 320 40 360 88"
          stroke="url(#hg-line)"
          strokeWidth="2"
          filter="url(#hg-glow)"
          strokeLinecap="round"
        />
        <circle cx="120" cy="48" r="5" fill="#0B0B0D" stroke="#E8A020" strokeWidth="1.5" />
        <circle cx="200" cy="64" r="5" fill="#0B0B0D" stroke="#E8A020" strokeWidth="1.5" />
        <circle cx="280" cy="56" r="5" fill="#0B0B0D" stroke="#E8A020" strokeWidth="1.5" />
        <circle cx="360" cy="88" r="5" fill="#0B0B0D" stroke="#E8A020" strokeWidth="1.5" />
        <path d="M 32 220 L 120 120 L 200 152 L 280 96 L 368 132" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
        <rect x="280" y="24" width="96" height="40" rx="4" fill="#111115" stroke="rgba(232,160,32,0.2)" />
        <text x="292" y="42" fill="rgba(232,160,32,0.85)" fontSize="10" fontFamily="DM Mono, monospace">
          KPI Δ
        </text>
        <text x="292" y="56" fill="rgba(226,232,240,0.5)" fontSize="8" fontFamily="DM Mono, monospace">
          WoW
        </text>
      </svg>
    </div>
  )
}
