import type { ProjectBanner } from '../content'

/** Domain-specific banner art only — no abstract placeholders. */
export function ProjectBannerSvg({
  kind,
  visible,
  boost,
}: {
  kind: ProjectBanner
  visible: boolean
  boost?: boolean
}) {
  const on = visible ? 'project-svg--on' : ''
  const boostClass = boost ? 'project-svg--boost' : ''

  if (kind === 'f1-car') {
    return (
      <svg className={`project-svg project-svg--f1-car ${on} ${boostClass}`} viewBox="0 0 220 120" aria-hidden>
        <defs>
          <linearGradient id="f1Track" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(59,130,246,0.25)" />
            <stop offset="1" stopColor="rgba(8,11,20,0.4)" />
          </linearGradient>
        </defs>
        <rect x="0" y="78" width="220" height="28" fill="url(#f1Track)" />
        <line x1="0" y1="86" x2="220" y2="86" stroke="rgba(96,165,250,0.35)" strokeWidth="1" strokeDasharray="10 14" />
        <g className="project-svg__f1-rig">
          <path
            fill="#2563eb"
            d="M8 70 L28 66 L62 64 L92 60 L112 58 L128 62 L138 68 L142 76 L138 84 L120 88 L78 90 L36 92 L16 90 L8 84 Z"
          />
          <path fill="#1d4ed8" d="M112 58 L128 52 L142 56 L144 66 L138 68 L128 62 Z" />
          <path fill="#3B82F6" d="M128 52 L138 48 L148 50 L150 58 L142 56 Z" />
          <rect x="132" y="44" width="18" height="5" rx="1" fill="#60A5FA" transform="rotate(-6 141 46.5)" />
          <circle cx="38" cy="88" r="10" fill="#020617" stroke="#475569" strokeWidth="1.5" />
          <circle cx="38" cy="88" r="4.5" fill="#64748b" />
          <circle cx="108" cy="86" r="10" fill="#020617" stroke="#475569" strokeWidth="1.5" />
          <circle cx="108" cy="86" r="4.5" fill="#64748b" />
          <path fill="none" stroke="#93c5fd" strokeWidth="1.4" d="M144 62 L162 56 L172 60 L170 72 L152 76" />
        </g>
      </svg>
    )
  }

  if (kind === 'afl-oval') {
    return (
      <svg className={`project-svg project-svg--afl-oval ${on}`} viewBox="0 0 200 120" aria-hidden>
        <g className="project-svg__afl-wrap">
          <ellipse cx="100" cy="60" rx="46" ry="28" fill="none" stroke="#3B82F6" strokeWidth="2.4" />
          <ellipse cx="100" cy="60" rx="40" ry="22" fill="none" stroke="rgba(96,165,250,0.45)" strokeWidth="1" />
          <line x1="100" y1="32" x2="100" y2="88" stroke="rgba(96,165,250,0.5)" strokeWidth="1.2" strokeLinecap="round" />
          <path
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1.2"
            d="M 58 60 Q 100 48 142 60"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      </svg>
    )
  }

  if (kind === 'recycle') {
    return (
      <svg className={`project-svg project-svg--recycle ${on}`} viewBox="0 0 200 120" aria-hidden>
        <g transform="translate(100,58)">
          <g className="project-svg__recycle-bin">
            <path
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2.2"
              strokeLinejoin="round"
              d="M-26 32 L-30 6 L30 6 L26 32 Z"
            />
            <path fill="none" stroke="#60A5FA" strokeWidth="2" d="M-22 6 L-18 -18 L18 -18 L22 6" />
            <rect x="-18" y="10" width="36" height="38" rx="3" fill="rgba(15,20,32,0.6)" stroke="#60A5FA" strokeWidth="1.5" />
            <line x1="0" y1="16" x2="0" y2="42" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    )
  }

  if (kind === 'bars') {
    return (
      <svg className={`project-svg project-svg--bars ${on}`} viewBox="0 0 200 120" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={28 + i * 32} y={20} width="18" height="85" rx="2" fill="#1e293b" stroke="#334155" />
        ))}
        {[55, 80, 48, 92, 65].map((h, i) => (
          <rect
            key={`f-${i}`}
            className="project-svg__bar-fill"
            x={28 + i * 32}
            y={105 - h * 0.85}
            width="18"
            height={h * 0.85}
            rx="2"
            fill="url(#barG)"
            style={{ ['--bh' as string]: `${h * 0.85}px`, ['--i' as string]: `${i}` }}
          />
        ))}
        <defs>
          <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  if (kind === 'grid') {
    const cells = Array.from({ length: 6 }, (_, r) =>
      Array.from({ length: 8 }, (_, c) => (
        <rect key={`${r}-${c}`} x={12 + c * 22} y={10 + r * 18} width="16" height="12" rx="2" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      )),
    ).flat()
    return (
      <svg className={`project-svg project-svg--grid ${on}`} viewBox="0 0 200 120" aria-hidden>
        {cells}
        <circle className="project-svg__pulse-dot" cx="100" cy="58" r="6" fill="#3B82F6" opacity="0.85" />
        <circle className="project-svg__pulse-ring" cx="100" cy="58" r="10" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  }

  if (kind === 'donut') {
    return (
      <svg className={`project-svg project-svg--donut ${on}`} viewBox="0 0 200 120" aria-hidden>
        <circle cx="100" cy="60" r="38" fill="none" stroke="#1e293b" strokeWidth="14" />
        <circle
          className="project-svg__donut-arc"
          cx="100"
          cy="60"
          r="38"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="14"
          strokeDasharray="239"
          strokeDashoffset="239"
          transform="rotate(-90 100 60)"
        />
      </svg>
    )
  }

  if (kind === 'scatter') {
    const pts = [
      [40, 85],
      [55, 70],
      [72, 92],
      [90, 55],
      [108, 78],
      [125, 48],
      [145, 68],
      [165, 40],
    ]
    return (
      <svg className={`project-svg project-svg--scatter ${on}`} viewBox="0 0 200 120" aria-hidden>
        {pts.map(([x, y], i) => (
          <circle key={i} className="project-svg__scatter-dot" cx={x} cy={y} r="4" fill="#60A5FA" style={{ ['--i' as string]: `${i}` }} />
        ))}
      </svg>
    )
  }

  return null
}
