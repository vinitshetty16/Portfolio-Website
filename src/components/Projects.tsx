import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent, type TouchEvent } from 'react'
import { projects, projectsIntro } from '../content'
import type { ProjectItem } from '../content'
import { ParallaxLift } from './ParallaxLift'
import { Reveal } from './Reveal'
import { ProjectBannerImage } from './ProjectBannerImage'

function wrapOffset(index: number, active: number, len: number): number {
  let d = index - active
  while (d > len / 2) d -= len
  while (d < -len / 2) d += len
  return d
}

function shortTitle(title: string): string {
  const cut = title.split('(')[0]?.trim() ?? title
  return cut.length > 28 ? `${cut.slice(0, 26)}…` : cut
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === 'left' ? 'M14 6 L8 12 L14 18' : 'M10 6 L16 12 L10 18'}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectCard({
  project,
  active,
  offset,
  onSelect,
}: {
  project: ProjectItem
  active: boolean
  offset: number
  onSelect: () => void
}) {
  const [hover, setHover] = useState(false)
  const glareRef = useRef<HTMLDivElement | null>(null)
  const isSide = offset !== 0

  const onGlareMove = (e: MouseEvent<HTMLElement>) => {
    if (!active) return
    const glare = glareRef.current
    const root = e.currentTarget
    if (!glare) return
    const r = root.getBoundingClientRect()
    glare.style.left = `${((e.clientX - r.left) / r.width) * 100}%`
    glare.style.top = `${((e.clientY - r.top) / r.height) * 100}%`
    glare.style.opacity = '0.08'
  }

  return (
    <article
      className={`project-card project-card--stage ${project.featured ? 'project-card--featured' : ''} ${active ? 'is-center' : 'is-side'} ${offset < 0 ? 'is-left' : ''} ${offset > 0 ? 'is-right' : ''}`}
      style={{ ['--offset' as string]: String(Math.abs(offset)) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        if (glareRef.current) glareRef.current.style.opacity = '0'
      }}
      onMouseMove={onGlareMove}
      onClick={isSide ? onSelect : undefined}
      role={isSide ? 'button' : undefined}
      tabIndex={isSide ? 0 : undefined}
      onKeyDown={
        isSide
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelect()
              }
            }
          : undefined
      }
    >
      <div ref={glareRef} className="project-card__glare" aria-hidden />
      {project.featured && active && <span className="project-card__badge font-mono">Featured</span>}
      {isSide && <span className="project-card__peek font-mono">View</span>}

      <div className="project-card__banner project-card__banner--stage">
        <ProjectBannerImage
          src={project.image}
          alt={project.imageAlt}
          active={active}
          boost={hover && active}
        />
        <div className="project-card__banner-shade" aria-hidden />
        {active && <h3 className="project-card__banner-title font-display">{project.title}</h3>}
        {active && (
          <ul className="project-card__tech project-card__tech--banner font-mono">
            {project.tech.slice(0, 4).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>

      {active && (
        <div className="project-card__body project-card__body--stage">
          <p className="project-card__desc font-body">{project.description}</p>
          <a
            className="project-card__cta btn btn--primary font-mono"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Open on GitHub
          </a>
        </div>
      )}
    </article>
  )
}

export function Projects() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [paused, setPaused] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const go = useCallback((index: number, dir: 'next' | 'prev') => {
    const i = ((index % projects.length) + projects.length) % projects.length
    setDirection(dir)
    setActive(i)
  }, [])

  const prev = useCallback(() => go(active - 1, 'prev'), [active, go])
  const next = useCallback(() => go(active + 1, 'next'), [active, go])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = stageRef.current
    if (!root) return
    let visible = false
    const obs = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
    }, { threshold: 0.35 })
    obs.observe(root)
    const id = window.setInterval(() => {
      if (visible) setActive((a) => (a + 1) % projects.length)
    }, 7000)
    return () => {
      obs.disconnect()
      window.clearInterval(id)
    }
  }, [paused])

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStartX.current
    if (start == null) return
    const end = e.changedTouches[0]?.clientX ?? start
    const delta = end - start
    if (Math.abs(delta) > 40) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  const nextIndex = (active + 1) % projects.length

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

          <Reveal>
            <div
              ref={stageRef}
              className="projects-stage"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="projects-stage__glow" aria-hidden />

              <button type="button" className="projects-stage__arrow projects-stage__arrow--prev" onClick={prev} aria-label="Previous project">
                <Chevron dir="left" />
              </button>

              <div className="projects-stage__deck" aria-live="polite">
                {projects.map((p, i) => {
                  const offset = wrapOffset(i, active, projects.length)
                  if (Math.abs(offset) > 2) return null
                  const style: CSSProperties = {
                    zIndex: 20 - Math.abs(offset),
                    opacity: 1 - Math.abs(offset) * 0.38,
                    transform: `translate(-50%, -50%) translateX(${offset * 52}%) scale(${1 - Math.abs(offset) * 0.14}) rotateY(${offset * -14}deg)`,
                    pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none',
                  }
                  return (
                    <div
                      key={p.title}
                      className={`projects-stage__slot projects-stage__slot--${direction}`}
                      style={style}
                      aria-hidden={offset !== 0}
                    >
                      <ProjectCard
                        project={p}
                        active={offset === 0}
                        offset={offset}
                        onSelect={() => go(i, offset > 0 ? 'next' : 'prev')}
                      />
                    </div>
                  )
                })}
              </div>

              <button type="button" className="projects-stage__arrow projects-stage__arrow--next projects-stage__arrow--pulse" onClick={next} aria-label="Next project">
                <Chevron dir="right" />
              </button>

              <div className="projects-stage__footer">
                <div className="projects-stage__progress" aria-hidden>
                  <span className="projects-stage__progress-fill" style={{ width: `${((active + 1) / projects.length) * 100}%` }} />
                </div>
                <p className="projects-stage__counter font-mono">
                  {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </p>
                <p className="projects-stage__next font-mono">
                  Next: <span>{shortTitle(projects[nextIndex].title)}</span>
                </p>
              </div>

              <div className="projects-stage__filmstrip" role="tablist" aria-label="All projects">
                {projects.map((p, i) => (
                  <button
                    key={p.title}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    className={`projects-stage__chip font-mono ${i === active ? 'is-active' : ''}`}
                    onClick={() => go(i, i > active ? 'next' : 'prev')}
                  >
                    <span className="projects-stage__chip-num">{i + 1}</span>
                    {shortTitle(p.title)}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </ParallaxLift>
    </section>
  )
}
