import { featuredProject, gridProjects, projectsIntro, secondaryProject, site } from '../content'
import type { ProjectItem } from '../content'
import { Reveal } from './Reveal'

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      {project.featured && <span className="project-card__badge font-mono">Featured project</span>}
      <div className="project-card__banner">
        <ul className="project-card__tech font-mono">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title font-display">{project.title}</h3>
        <p className="project-card__desc font-body">{project.description}</p>
        <a className="project-card__link font-mono" href={project.href} target="_blank" rel="noreferrer">
          View project →
        </a>
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

        <p className="projects__more font-body">
          More experiments and notebooks on{' '}
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}
