import { githubCta, site } from '../content'
import { Reveal } from './Reveal'

export function GithubCta() {
  return (
    <section className="section github-cta" aria-labelledby="github-cta-heading">
      <Reveal className="section__inner github-cta__inner">
        <h2 id="github-cta-heading" className="github-cta__title font-display">
          {githubCta.title} <span className="github-cta__hl">{githubCta.highlight}</span>
        </h2>
        <p className="github-cta__sub font-body">{githubCta.subtitle}</p>
        <a className="btn btn--ghost" href={site.github} target="_blank" rel="noreferrer">
          Open GitHub
        </a>
      </Reveal>
    </section>
  )
}
