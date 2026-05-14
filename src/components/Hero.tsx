import { useEffect, useState } from 'react'
import { CanvasHero } from './CanvasHero'
import { CanvasHeroStatic } from './CanvasHeroStatic'
import { hero, site } from '../content'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const fn = () => setReduced(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return reduced
}

function TypingRoles({ lines }: { lines: string[] }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    const full = lines[lineIndex % lines.length]
    let i = 0
    setText('')
    let intervalId = 0
    let timeoutId = 0
    intervalId = window.setInterval(() => {
      i += 1
      setText(full.slice(0, i))
      if (i >= full.length) {
        window.clearInterval(intervalId)
        timeoutId = window.setTimeout(() => setLineIndex((x) => x + 1), 1400)
      }
    }, 95)
    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [lineIndex, lines])

  return (
    <p className="hero__roles" aria-live="polite">
      <span className="hero__roles-caret" aria-hidden>
        |
      </span>
      {text}
    </p>
  )
}

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="home" className="hero">
      {reduced ? <CanvasHeroStatic /> : <CanvasHero />}
      <div className="hero__vignette" aria-hidden />
      <div className="hero__grid" aria-hidden />
      <div className="hero__content section__inner">
        <p className="hero__hello">{hero.greeting}</p>
        <h1 className="hero__title">{hero.headline}</h1>
        <TypingRoles lines={site.roleLines} />
        <p className="hero__tag">
          Data Analyst · Master&apos;s in Applied AI · Melbourne
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Hire me
          </a>
          <a href={site.github} className="btn btn--ghost" target="_blank" rel="noreferrer">
            My works
          </a>
        </div>
      </div>
    </section>
  )
}
