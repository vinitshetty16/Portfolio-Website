import { motion } from 'framer-motion'
import { githubCta, site } from '../content'

export function GithubCta() {
  return (
    <section className="section github-cta" aria-labelledby="github-cta-heading">
      <div className="github-cta__bg" aria-hidden />
      <motion.div
        className="section__inner github-cta__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="github-cta-heading" className="github-cta__title">
          {githubCta.title} <span className="github-cta__hl">{githubCta.highlight}</span>
        </h2>
        <p className="github-cta__sub">{githubCta.subtitle}</p>
        <a className="btn btn--primary" href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </motion.div>
    </section>
  )
}
