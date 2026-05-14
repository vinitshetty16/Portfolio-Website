import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../content'

function AnimatedNumber({ target, play }: { target: number; play: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!play) return
    let raf = 0
    const t0 = performance.now()
    const dur = 1700
    const tick = (now: number) => {
      const e = Math.min(1, (now - t0) / dur)
      const eased = 1 - Math.pow(1 - e, 3)
      setN(Math.round(target * eased))
      if (e < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [play, target])
  return <>{n}</>
}

export function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4, once: true })

  return (
    <section id="stats" className="section stats" ref={ref}>
      <div className="section__inner">
        <div className="stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stats__cell glass">
              <div className="stats__value">
                {s.numeric ? <AnimatedNumber target={Number(s.value)} play={inView} /> : s.value}
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
