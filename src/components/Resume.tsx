import { motion } from 'framer-motion'
import { education, experience, resumeIntro, site } from '../content'

const card = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="section__inner">
        <header className="section__head section__head--center">
          <p className="section__eyebrow">Timeline</p>
          <h2 className="section__title">Resume</h2>
          <p className="section__lead">{resumeIntro}</p>
        </header>

        <h3 className="resume__block-title">Experience</h3>
        <div className="resume__timeline">
          {experience.map((job, i) => (
            <motion.article key={job.title + job.date} className="resume-card glass" {...card} transition={{ ...card.transition, delay: i * 0.06 }}>
              <span className="resume-card__date">{job.date}</span>
              <h4 className="resume-card__title">{job.title}</h4>
              <p className="resume-card__company">{job.company}</p>
              <p className="resume-card__intro">{job.intro}</p>
              <ul className="resume-card__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <h3 className="resume__block-title resume__block-title--spaced">Education</h3>
        <div className="resume__edu">
          {education.map((ed, i) => (
            <motion.article key={ed.title} className="resume-card glass resume-card--compact" {...card} transition={{ ...card.transition, delay: i * 0.05 }}>
              <span className="resume-card__date">{ed.date}</span>
              <h4 className="resume-card__title">{ed.title}</h4>
              <p className="resume-card__company">{ed.school}</p>
              <p className="resume-card__note">{ed.note}</p>
            </motion.article>
          ))}
        </div>

        <div className="resume__cv">
          <a className="btn btn--primary" href={site.resumePdf} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
