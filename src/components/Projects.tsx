import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, projectsIntro, site } from '../content'
import type { ProjectItem } from '../content'
import { Project3DCanvas } from './Project3DCanvas'

export function Projects() {
  const [active, setActive] = useState<ProjectItem>(projects[0])

  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <header className="section__head section__head--center">
          <p className="section__eyebrow">Portfolio</p>
          <h2 className="section__title">Projects</h2>
          <p className="section__lead">{projectsIntro}</p>
        </header>

        <div className="projects__layout">
          <motion.div
            className="projects__stage glass"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="projects__stage-label">3D preview</div>
            <Project3DCanvas imageUrl={active.image} />
            <div className="projects__stage-footer">
              <h3 className="projects__stage-title">{active.title}</h3>
              <p className="projects__stage-desc">{active.description}</p>
              <a className="btn btn--primary" href={active.href} target="_blank" rel="noreferrer">
                View repository
              </a>
            </div>
          </motion.div>

          <ul className="projects__list" role="list">
            {projects.map((p) => (
              <li key={p.href}>
                <button
                  type="button"
                  className={`projects__chip ${active.href === p.href ? 'projects__chip--active' : ''}`}
                  onMouseEnter={() => setActive(p)}
                  onFocus={() => setActive(p)}
                  onClick={() => setActive(p)}
                >
                  <span className="projects__chip-thumb" style={{ backgroundImage: `url(${p.image})` }} />
                  <span className="projects__chip-body">
                    <span className="projects__chip-title">{p.title}</span>
                    <span className="projects__chip-meta">GitHub · Analytics</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="projects__hint">
          Hover or focus a project to update the 3D preview — same repos as on{' '}
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}
