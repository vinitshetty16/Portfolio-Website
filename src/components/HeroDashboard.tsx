import { useEffect, useId, useRef, useState } from 'react'

export function HeroDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const gid = useId().replace(/:/g, '')

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const hero = wrapRef.current?.closest('.hero')
    const outer = outerRef.current
    if (!hero || !outer) return

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      const px = ((e.clientX - r.left) / r.width - 0.5) * 2
      const py = ((e.clientY - r.top) / r.height - 0.5) * 2
      outer.style.transform = `translate(calc(${-px * 10}% + var(--parallax-x, 0px)), calc(${-py * 10}% + var(--parallax-y, 0px)))`
    }

    const onLeave = () => {
      outer.style.transform = 'translate(0, 0)'
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const tiles = [
    { label: 'Inventory', value: '94%' },
    { label: 'OTIF', value: '87%' },
    { label: 'Orders', value: '12.4k' },
    { label: 'Spend', value: '$2.1M' },
  ]

  return (
    <div className="hero-dash-wrap" ref={wrapRef}>
      <div className="hero-dash-ambient" aria-hidden />
      <div ref={outerRef} className="hero-dash-parallax">
        <div className={`hero-dash ${mounted ? 'hero-dash--on' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
          <div className="hero-dash__inner">
            <div className="hero-dash__kpis font-mono">
              <div className="hero-dash__kpi">
                <span className="hero-dash__kpi-value hero-dash__kpi-value--clients">Tesla · GM · Ford · Toyota</span>
                <span className="hero-dash__kpi-label">Enterprise clients supported</span>
              </div>
              <div className="hero-dash__kpi">
                <span className="hero-dash__kpi-value">15+</span>
                <span className="hero-dash__kpi-label">enterprise clients</span>
              </div>
            </div>

            <div className="hero-report-scene" aria-hidden>
              <svg className="hero-report-scene__svg" viewBox="0 0 360 210" fill="none">
                <defs>
                  <linearGradient id={`${gid}-panel`} x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="rgba(59,130,246,0.22)" />
                    <stop offset="1" stopColor="rgba(15,20,32,0.95)" />
                  </linearGradient>
                  <linearGradient id={`${gid}-flow`} x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#3B82F6" stopOpacity="0.15" />
                    <stop offset="0.5" stopColor="#60A5FA" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#3B82F6" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* ERP source */}
                <g className="hero-report-scene__erp">
                  <rect x="18" y="72" width="56" height="66" rx="6" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.45)" strokeWidth="1.2" />
                  <ellipse cx="46" cy="72" rx="28" ry="9" fill="rgba(59,130,246,0.15)" stroke="rgba(96,165,250,0.4)" strokeWidth="1" />
                  <ellipse cx="46" cy="88" rx="28" ry="9" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
                  <ellipse cx="46" cy="104" rx="28" ry="9" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="0.8" />
                  <text x="46" y="128" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">
                    ERP
                  </text>
                </g>

                {/* Supply / warehouse */}
                <g className="hero-report-scene__supply">
                  <rect x="286" y="78" width="56" height="52" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.35)" strokeWidth="1.2" />
                  <path d="M298 118 L314 102 L330 118 Z" fill="rgba(96,165,250,0.25)" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
                  <rect x="302" y="118" width="28" height="10" rx="1" fill="rgba(59,130,246,0.2)" stroke="rgba(96,165,250,0.35)" />
                  <text x="314" y="128" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="ui-monospace, monospace">
                    WH
                  </text>
                </g>

                {/* Flow lines */}
                <path className="hero-report-scene__flow-line" d="M74 105 H118" stroke={`url(#${gid}-flow)`} strokeWidth="2" strokeLinecap="round" />
                <path className="hero-report-scene__flow-line hero-report-scene__flow-line--rev" d="M242 105 H286" stroke={`url(#${gid}-flow)`} strokeWidth="2" strokeLinecap="round" />
                <g className="hero-report-scene__packet hero-report-scene__packet--a">
                  <circle cy="105" r="3.5" fill="#60A5FA" />
                </g>
                <g className="hero-report-scene__packet hero-report-scene__packet--b">
                  <circle cy="105" r="3.5" fill="#60A5FA" />
                </g>

                {/* Power BI report frame */}
                <g className="hero-report-scene__report">
                  <rect x="118" y="48" width="124" height="118" rx="8" fill={`url(#${gid}-panel)`} stroke="rgba(96,165,250,0.55)" strokeWidth="1.4" />
                  <rect x="118" y="48" width="124" height="18" rx="8" fill="rgba(59,130,246,0.25)" />
                  <rect x="118" y="58" width="124" height="8" fill="rgba(59,130,246,0.25)" />
                  <circle cx="130" cy="57" r="2.5" fill="#f87171" />
                  <circle cx="138" cy="57" r="2.5" fill="#fbbf24" />
                  <circle cx="146" cy="57" r="2.5" fill="#34d399" />
                  <text x="180" y="60" textAnchor="middle" fill="#e2e8f0" fontSize="7.5" fontWeight="600" fontFamily="ui-sans-serif, system-ui">
                    Operations KPI Report
                  </text>
                  {tiles.map((t, i) => {
                    const col = i % 2
                    const row = Math.floor(i / 2)
                    const x = 128 + col * 58
                    const y = 78 + row * 40
                    return (
                      <g key={t.label} className={`hero-report-scene__tile hero-report-scene__tile--${i}`}>
                        <rect x={x} y={y} width="52" height="32" rx="4" fill="rgba(8,11,20,0.65)" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
                        <text x={x + 26} y={y + 13} textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="ui-monospace, monospace">
                          {t.label.toUpperCase()}
                        </text>
                        <text x={x + 26} y={y + 26} textAnchor="middle" fill="#60A5FA" fontSize="9" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
                          {t.value}
                        </text>
                      </g>
                    )
                  })}
                </g>

                {/* SQL badge mid-flow */}
                <g className="hero-report-scene__sql">
                  <rect x="88" y="96" width="36" height="18" rx="9" fill="rgba(8,11,20,0.9)" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
                  <text x="106" y="108" textAnchor="middle" fill="#93c5fd" fontSize="7" fontWeight="600" fontFamily="ui-monospace, monospace">
                    SQL
                  </text>
                </g>
                <g className="hero-report-scene__pbi">
                  <rect x="236" y="96" width="36" height="18" rx="9" fill="rgba(8,11,20,0.9)" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
                  <text x="254" y="108" textAnchor="middle" fill="#93c5fd" fontSize="6.5" fontWeight="600" fontFamily="ui-monospace, monospace">
                    PBI
                  </text>
                </g>
              </svg>
            </div>

            <ul className="hero-dash__stack font-mono">
              <li>ERP Reporting</li>
              <li>Supply Chain</li>
              <li>KPI Dashboards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
