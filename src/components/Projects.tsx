import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import { projects, projectsIntro } from '../content'
import type { ProjectItem } from '../content'
import { ParallaxLift } from './ParallaxLift'
import { Reveal } from './Reveal'
import { ProjectBannerSvg } from './ProjectBannerSvg'

function ProjectCard({ project }: { project: ProjectItem }) {
  const [vis, setVis] = useState(false)
  const [hover, setHover] = useState(false)
  const rootRef = useRef<HTMLArticleElement | null>(null)
  const glareRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true)
      },
      { threshold: 0.15 },
    )
    o.observe(el)
    return () => o.disconnect()
  }, [])

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
      className={`project-card tilt-card ${project.featured ? 'project-card--featured project-card--float' : ''}`}
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
        <ProjectBannerSvg kind={project.banner} visible={vis} boost={hover} />
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
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollTo = useCallback((index: number) => {
    const i = Math.max(0, Math.min(projects.length - 1, index))
    setActive(i)
    slideRefs.current[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let minDist = Infinity
      slideRefs.current.forEach((slide, idx) => {
        if (!slide) return
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
        const dist = Math.abs(center - slideCenter)
        if (dist < minDist) {
          minDist = dist
          closest = idx
        }
      })
      setActive(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

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

          <Reveal className="projects-carousel">
            <nav className="projects-carousel__menu" aria-label="Project navigation">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  className={`projects-carousel__tab font-mono ${active === i ? 'is-active' : ''}`}
                  onClick={() => scrollTo(i)}
                  aria-current={active === i ? 'true' : undefined}
                >
                  {p.title}
                </button>
              ))}
            </nav>

            <div className="projects-carousel__controls">
              <button
                type="button"
                className="projects-carousel__btn font-mono"
                onClick={() => scrollTo(active - 1)}
                disabled={active === 0}
                aria-label="Previous project"
              >
                Prev
              </button>
              <span className="projects-carousel__count font-mono">
                {active + 1} / {projects.length}
              </span>
              <button
                type="button"
                className="projects-carousel__btn font-mono"
                onClick={() => scrollTo(active + 1)}
                disabled={active === projects.length - 1}
                aria-label="Next project"
              >
                Next
              </button>
            </div>

            <div ref={trackRef} className="projects-carousel__track">
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  ref={(el) => {
                    slideRefs.current[i] = el
                  }}
                  className={`projects-carousel__slide ${active === i ? 'is-active' : ''}`}
                >
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </ParallaxLift>
    </section>
  )
}
