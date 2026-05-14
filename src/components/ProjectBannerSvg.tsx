import type { ProjectBanner } from '../content'

export function ProjectBannerSvg({ kind, visible }: { kind: ProjectBanner; visible: boolean }) {
  const on = visible ? 'project-svg--on' : ''

  if (kind === 'radar') {
    return (
      <svg className={`project-svg project-svg--radar ${on}`} viewBox="0 0 200 120" aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1="100"
            y1="60"
            x2={100 + Math.cos((i / 6) * Math.PI * 2) * 52}
            y2={60 + Math.sin((i / 6) * Math.PI * 2) * 52}
            stroke="#3B82F6"
            strokeWidth="1.2"
            className="project-svg__draw"
          />
        ))}
        <polygon
          className="project-svg__draw"
          points="100,60 140,72 128,100 88,100 76,72"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.5"
        />
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
