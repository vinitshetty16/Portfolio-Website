import { education, experience, experienceIntro, site } from '../content'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <Reveal>
          <header className="section__head section__head--center">
            <h2 className="section__title font-display">Experience</h2>
            <p className="section__lead font-body">{experienceIntro}</p>
          </header>
        </Reveal>

        <div className="experience__timeline">
          <div className="experience__rail" aria-hidden />
          <div className="experience__entries">
            {experience.map((job) => (
              <Reveal key={job.company + job.date} className="experience-card">
                <span className="experience-card__dot" aria-hidden />
                <span className="experience-card__date font-mono">{job.date}</span>
                <h3 className="experience-card__role font-display">
                  {job.title} · {job.company}
                </h3>
                <p className="experience-card__narrative font-body">{job.narrative}</p>
                <ul className="experience-card__outcomes font-body">
                  {job.outcomes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <ul className="experience-card__tools font-mono">
                  {job.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <h3 className="experience__edu-title font-display">Education</h3>
        </Reveal>
        <div className="experience__edu-grid">
          {education.map((ed) => (
            <Reveal key={ed.title} className="experience-edu-card">
              <span className="font-mono experience-edu-card__date">{ed.date}</span>
              <h4 className="font-display experience-edu-card__title">{ed.title}</h4>
              <p className="font-body experience-edu-card__school">{ed.school}</p>
              <p className="font-mono experience-edu-card__note">{ed.note}</p>
            </Reveal>
          ))}
        </div>

        <div className="experience__cv">
          <a className="btn btn--primary" href={site.resumePdf} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
