import { useCallback, useEffect, useRef, useState, type MouseEvent, type TouchEvent } from 'react'
import { projects, projectsIntro } from '../content'
import type { ProjectItem } from '../content'
import { ParallaxLift } from './ParallaxLift'
import { Reveal } from './Reveal'
import { ProjectBannerSvg } from './ProjectBannerSvg'

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === 'left' ? 'M14 6 L8 12 L14 18' : 'M10 6 L16 12 L10 18'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectCard({ project, active }: { project: ProjectItem; active: boolean }) {
  const [hover, setHover] = useState(false)
  const rootRef = useRef<HTMLArticleElement | null>(null)
  const glareRef = useRef<HTMLDivElement | null>(null)

  const onGlareMove = (e: MouseEvent<HTMLElement>) => {
    const root = rootRef.current
    const glare = glareRef.current
    if (!root || !glare) return
    const r = root.getBoundingClientRect()
    glare.style.left = `${((e.clientX - r.left) / r.width) * 100}%`
    glare.style.top = `${((e.clientY - r.top) / r.height) * 100}%`
    glare.style.opacity = '0.06'
  }

  const onGlareLeave = () => {
    const glare = glareRef.current
    if (glare) glare.style.opacity = '0'
  }

  return (
    <article
      ref={rootRef}
      className={`project-card tilt-card ${project.featured ? 'project-card--featured' : ''} ${active ? 'project-card--slider-active' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        onGlareLeave()
      }}
      onMouseMove={onGlareMove}
    >
      <div ref={glareRef} className="project-card__glare" aria-hidden />
      {project.featured && <span className="project-card__badge font-mono">Featured project</span>}
      <div className={`project-card__banner ${project.featured ? 'project-card__banner--featured' : ''}`}>
        <ProjectBannerSvg kind={project.banner} visible={active} boost={hover} />
        <ul
          className={`project-card__tech font-mono ${project.featured ? 'project-card__tech--featured' : ''}`}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title font-display">{project.title}</h3>
        <p className="project-card__desc font-body">{project.description}</p>
        <div className="project-card__link-wrap">
          <a className="project-card__link font-mono" href={project.href} target="_blank" rel="noreferrer">
            View project
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const touchStartX = useRef<number | null>(null)

  const go = useCallback((next: number, dir: 'next' | 'prev') => {
    const i = Math.max(0, Math.min(projects.length - 1, next))
    if (i === active) return
    setDirection(dir)
    setActive(i)
  }, [active])

  const prev = () => go(active - 1, 'prev')
  const next = () => go(active + 1, 'next')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(active - 1, 'prev')
      if (e.key === 'ArrowRight') go(active + 1, 'next')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, go])

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStartX.current
    if (start == null) return
    const end = e.changedTouches[0]?.clientX ?? start
    const delta = end - start
    if (Math.abs(delta) > 48) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  return (
    <section id="projects" className="section section--alt projects">
      <ParallaxLift maxPx={-14}>
        <div className="section__inner">
          <Reveal>
            <header className="section__head section__head--center">
              <h2 className="section__title font-display">Projects</h2>
              <p className="section__lead font-body">{projectsIntro}</p>
            </header>
          </Reveal>

          <Reveal className="projects-slider">
            <div className="projects-slider__shell">
              <button
                type="button"
                className="projects-slider__arrow projects-slider__arrow--prev"
                onClick={prev}
                disabled={active === 0}
                aria-label="Previous project"
              >
                <Chevron dir="left" />
              </button>

              <div
                className="projects-slider__viewport"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                aria-live="polite"
              >
                <div
                  className="projects-slider__track"
                  style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
                >
                  {projects.map((p, i) => (
                    <div
                      key={p.title}
                      className={`projects-slider__slide ${i === active ? 'is-active' : ''} projects-slider__slide--${direction}`}
                      aria-hidden={i !== active}
                    >
                      <ProjectCard project={p} active={i === active} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="projects-slider__arrow projects-slider__arrow--next"
                onClick={next}
                disabled={active === projects.length - 1}
                aria-label="Next project"
              >
                <Chevron dir="right" />
              </button>
            </div>

            <div className="projects-slider__glow" aria-hidden />
          </Reveal>
        </div>
      </ParallaxLift>
    </section>
  )
}
