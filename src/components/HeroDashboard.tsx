import { useEffect, useRef, useState } from 'react'

const bars = [42, 68, 55, 78, 50]

export function HeroDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

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

  return (
    <div className="hero-dash-wrap" ref={wrapRef}>
      <div className="hero-dash-ambient" aria-hidden />
      <div ref={outerRef} className="hero-dash-parallax">
        <div className={`hero-dash ${mounted ? 'hero-dash--bars-on' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
          <div className="hero-dash__inner">
            <div className="hero-dash__kpis font-mono">
              <div className="hero-dash__kpi">
                <span className="hero-dash__kpi-value">↑ 40%</span>
                <span className="hero-dash__kpi-label">faster reporting</span>
              </div>
              <div className="hero-dash__kpi">
                <span className="hero-dash__kpi-value">15+</span>
                <span className="hero-dash__kpi-label">enterprise clients</span>
              </div>
            </div>
            <div className="hero-dash__chart">
              <svg className="hero-dash__spark" viewBox="0 0 200 48" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#3B82F6" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#60A5FA" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                <path
                  className="hero-dash__spark-path"
                  d="M 4 38 Q 40 8 80 28 T 140 18 L 196 32"
                  fill="none"
                  stroke="url(#sparkGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                />
                <circle className="hero-dash__spark-dot" cx="196" cy="32" r="3.5" fill="#60A5FA" opacity="0.9" />
              </svg>
            </div>
            <div className="hero-dash__bars">
              {bars.map((h, i) => (
                <div key={i} className="hero-dash__bar-wrap">
                  <div className="hero-dash__bar" style={{ ['--h' as string]: `${h}%`, ['--d' as string]: `${i * 100}ms` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
