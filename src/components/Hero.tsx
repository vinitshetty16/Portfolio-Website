import { useEffect, useState } from 'react'
import { hero, site } from '../content'
import { HeroDashboard } from './HeroDashboard'
import { HeroParticles } from './HeroParticles'
import { ParallaxLift } from './ParallaxLift'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="home" className={`hero ${mounted ? 'hero--mounted' : ''}`}>
      <HeroParticles />
      <div className="hero__bg-grid" aria-hidden />
      <div className="hero__inner section__inner">
        <div className="hero__grid2">
          <ParallaxLift rate={0.02}>
            <div className="hero__copy">
              <p className="hero__eyebrow font-mono">{hero.eyebrow}</p>
              <h1 className="hero__headline font-display">{hero.headline}</h1>
              <p className="hero__sub font-body">{hero.subheading}</p>
              <div className="hero__actions">
                <a href="#projects" className="btn btn--primary">
                  {hero.ctaPrimary}
                </a>
                <a href={site.resumePdf} className="btn btn--ghost" download>
                  {hero.ctaSecondary}
                </a>
              </div>
              <p className="hero__seeking font-mono">{hero.seeking}</p>
            </div>
          </ParallaxLift>
          <ParallaxLift rate={-0.026}>
            <div className="hero__dash-col">
              <HeroDashboard />
            </div>
          </ParallaxLift>
        </div>
      </div>
    </section>
  )
}
