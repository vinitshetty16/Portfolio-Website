import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { featuredProject, gridProjects, projectsIntro, secondaryProject } from '../content'
import type { ProjectItem } from '../content'
import { Reveal } from './Reveal'
import { ProjectBannerSvg } from './ProjectBannerSvg'
import { F1BannerThree } from './F1BannerThree'

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

  const isF1 = project.banner === 'f1-three'

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
      <div className={`project-card__banner ${isF1 ? 'project-card__banner--f1' : ''}`}>
        {isF1 ? (
          <>
            <F1BannerThree boost={hover} />
            <ul className="project-card__tech project-card__tech--f1 font-mono">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <ProjectBannerSvg kind={project.banner} visible={vis} />
            <ul className="project-card__tech font-mono">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title font-display">{project.title}</h3>
        <p className="project-card__desc font-body">{project.description}</p>
        <div className="project-card__link-wrap">
          <a className="project-card__link font-mono" href={project.href} target="_blank" rel="noreferrer">
            View project →
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section section--alt projects">
      <div className="section__inner">
        <Reveal>
          <header className="section__head section__head--center">
            <h2 className="section__title font-display">Projects</h2>
            <p className="section__lead font-body">{projectsIntro}</p>
          </header>
        </Reveal>

        <Reveal className="projects__featured">
          <ProjectCard project={featuredProject} />
        </Reveal>

        <Reveal className="projects__secondary">
          <ProjectCard project={secondaryProject} />
        </Reveal>

        <div className="projects__grid">
          {gridProjects.map((p) => (
            <Reveal key={p.href} className="projects__cell">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
