import { motion } from 'framer-motion'
import { about, site } from '../content'

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

export function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <header className="section__head">
          <p className="section__eyebrow">Profile</p>
          <h2 className="section__title">About</h2>
        </header>

        <div className="about__grid">
          <motion.div className="about__visual glass" {...fade}>
            <div className="about__visual-glow" aria-hidden />
            <img src={about.photo} alt="Vinit Shetty" className="about__photo" width={400} height={480} />
            <div className="about__meta">
              {about.info.map((row) => (
                <div key={row.label} className="about__meta-row">
                  <span className="about__meta-label">{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="about__skills">
              <p className="about__skills-title">Skills</p>
              {about.skills.map((s) => (
                <div key={s.name} className="skill-row">
                  <div className="skill-row__top">
                    <span>{s.name}</span>
                    <span>{s.percent}%</span>
                  </div>
                  <div className="skill-row__track">
                    <motion.div
                      className="skill-row__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about__copy" {...fade} transition={{ ...fade.transition, delay: 0.08 }}>
            <h3 className="about__h3">{about.title}</h3>
            <p className="about__lead">{about.lead}</p>
            <ul className="about__list">
              {about.bullets.map((b) => (
                <li key={b.label}>
                  <span className="about__list-label">{b.label}</span>
                  <span
                    className={
                      b.label === 'Education' ? 'about__list-value about__list-value--multiline' : 'about__list-value'
                    }
                  >
                    {b.value}
                  </span>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
