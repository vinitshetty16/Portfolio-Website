import { motion } from 'framer-motion'
import { contactIntro, site } from '../content'

const cards = [
  {
    title: 'LinkedIn',
    body: <a href={site.linkedin}>View Profile</a>,
  },
  {
    title: 'Contact Number',
    body: (
      <a href={site.phoneHref} target="_blank" rel="noreferrer">
        {site.phone}
      </a>
    ),
  },
  {
    title: 'Email Address',
    body: (
      <a href={`mailto:${site.email}`} target="_blank" rel="noreferrer">
        {site.email}
      </a>
    ),
  },
  {
    title: 'Download Resume',
    body: (
      <a href={site.resumePdf} download>
        Click Here
      </a>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner">
        <header className="section__head section__head--center">
          <p className="section__eyebrow">Connect</p>
          <h2 className="section__title">Contact Me</h2>
          <p className="section__lead">{contactIntro}</p>
        </header>

        <div className="contact__grid">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              className="contact-card glass"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h3 className="contact-card__title">{c.title}</h3>
              <div className="contact-card__body">{c.body}</div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="contact__question glass"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="contact__question-title">
            Have a <span className="contact__question-hl">Question?</span>
          </h2>
          <a className="btn btn--primary" href={site.questionForm} target="_blank" rel="noreferrer">
            Click Here
          </a>
        </motion.div>
      </div>
    </section>
  )
}
