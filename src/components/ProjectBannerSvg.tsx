import { useId } from 'react'
import type { ProjectBanner } from '../content'

/** Domain-specific banner art — retail / city / HR / taxi cues, not generic shapes. */
export function ProjectBannerSvg({
  kind,
  visible,
  boost,
}: {
  kind: ProjectBanner
  visible: boolean
  boost?: boolean
}) {
  const rid = useId().replace(/:/g, '')
  const on = visible ? 'project-svg--on' : ''
  const boostClass = boost ? 'project-svg--boost' : ''

  if (kind === 'f1-car') {
    return (
      <svg className={`project-svg project-svg--f1-car ${on} ${boostClass}`} viewBox="0 0 220 120" aria-hidden>
        <defs>
          <linearGradient id={`${rid}-f1Track`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(59,130,246,0.25)" />
            <stop offset="1" stopColor="rgba(8,11,20,0.4)" />
          </linearGradient>
        </defs>
        <rect x="0" y="78" width="220" height="28" fill={`url(#${rid}-f1Track)`} />
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
    const gid = `${rid}-barG`
    const heights = [55, 80, 48, 92, 65]
    return (
      <svg className={`project-svg project-svg--bars ${on}`} viewBox="0 0 200 120" aria-hidden>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <g className="project-svg__ww-logo" transform="translate(10, 14)">
          <rect x="0" y="0" width="46" height="44" rx="8" fill="rgba(16,138,67,0.2)" stroke="#1a9f6e" strokeWidth="1.2" />
          <path
            fill="#23b872"
            d="M8 38 L12 10 L18 26 L24 10 L30 38 L36 16 L42 38 L36 38 L32 22 L26 38 L20 22 L14 38 Z"
          />
          <circle cx="23" cy="8" r="3" fill="#fbbf24" opacity="0.9" />
        </g>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={`bg-${i}`} x={62 + i * 26} y={22} width="16" height="78" rx="2" fill="#1e293b" stroke="#334155" />
        ))}
        {heights.map((h, i) => (
          <rect
            key={`f-${i}`}
            className="project-svg__bar-fill"
            x={62 + i * 26}
            y={100 - h * 0.78}
            width="16"
            height={h * 0.78}
            rx="2"
            fill={`url(#${gid})`}
            style={{ transitionDelay: `${i * 80}ms` }}
          />
        ))}
      </svg>
    )
  }

  if (kind === 'grid') {
    const cells = Array.from({ length: 5 }, (_, r) =>
      Array.from({ length: 9 }, (_, c) => (
        <rect
          key={`${r}-${c}`}
          x={10 + c * 20}
          y={8 + r * 16}
          width="16"
          height="12"
          rx="1.5"
          fill="none"
          stroke="rgba(59,130,246,0.12)"
          strokeWidth="1"
        />
      )),
    ).flat()
    return (
      <svg className={`project-svg project-svg--grid ${on}`} viewBox="0 0 200 120" aria-hidden>
        {cells}
        <g className="project-svg__city-skyline">
          <rect x="8" y="52" width="14" height="58" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.25)" rx="1" />
          <rect x="26" y="38" width="18" height="72" fill="rgba(59,130,246,0.15)" stroke="rgba(96,165,250,0.3)" rx="1" />
          <rect x="48" y="44" width="12" height="66" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.2)" rx="1" />
          <rect x="64" y="30" width="22" height="80" fill="rgba(59,130,246,0.18)" stroke="rgba(96,165,250,0.35)" rx="1" />
          <rect x="90" y="48" width="16" height="62" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.25)" rx="1" />
          <rect x="110" y="34" width="20" height="76" fill="rgba(59,130,246,0.16)" stroke="rgba(96,165,250,0.32)" rx="1" />
          <rect x="134" y="50" width="14" height="60" fill="rgba(59,130,246,0.11)" stroke="rgba(96,165,250,0.22)" rx="1" />
          <rect x="152" y="42" width="18" height="68" fill="rgba(59,130,246,0.14)" stroke="rgba(96,165,250,0.28)" rx="1" />
          <rect x="174" y="56" width="18" height="54" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.2)" rx="1" />
          {[20, 44, 72, 100, 128, 156].map((x, i) => (
            <rect key={`win-${i}`} x={x} y="58" width="4" height="6" rx="0.5" fill="rgba(96,165,250,0.35)" />
          ))}
        </g>
        <circle className="project-svg__pulse-dot" cx="100" cy="58" r="6" fill="#3B82F6" opacity="0.85" />
        <circle className="project-svg__pulse-ring" cx="100" cy="58" r="10" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  }

  if (kind === 'donut') {
    return (
      <svg className={`project-svg project-svg--donut ${on}`} viewBox="0 0 200 120" aria-hidden>
        <g className="project-svg__hr-people">
          <g transform="translate(42, 22)">
            <circle cx="0" cy="0" r="7" fill="none" stroke="#60A5FA" strokeWidth="1.4" />
            <path d="M-9 14 Q0 8 9 14" fill="none" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" />
          </g>
          <g transform="translate(100, 18)">
            <circle cx="0" cy="0" r="8" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
            <path d="M-10 16 Q0 9 10 16" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g transform="translate(158, 22)">
            <circle cx="0" cy="0" r="7" fill="none" stroke="#60A5FA" strokeWidth="1.4" />
            <path d="M-9 14 Q0 8 9 14" fill="none" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </g>
        <circle cx="100" cy="68" r="32" fill="none" stroke="#1e293b" strokeWidth="12" />
        <circle
          className="project-svg__donut-arc"
          cx="100"
          cy="68"
          r="32"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="12"
          strokeDasharray="201"
          strokeDashoffset="201"
          transform="rotate(-90 100 68)"
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
        <g transform="translate(100, 52)">
          <g className="project-svg__taxi-rig">
            <rect x="-28" y="-14" width="56" height="22" rx="3" fill="#eab308" stroke="#ca8a04" strokeWidth="1.2" />
            <rect x="-22" y="-20" width="20" height="8" rx="1" fill="#1e293b" stroke="#334155" />
            <text x="0" y="-13" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif">
              TAXI
            </text>
            <rect x="-30" y="6" width="60" height="4" rx="1" fill="#334155" opacity="0.85" />
            <circle cx="-16" cy="12" r="5" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <circle cx="16" cy="12" r="5" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          </g>
        </g>
        {pts.map(([x, y], i) => (
          <circle key={i} className="project-svg__scatter-dot" cx={x} cy={y} r="4" fill="#60A5FA" style={{ ['--i' as string]: `${i}` }} />
        ))}
      </svg>
    )
  }

  return null
}
