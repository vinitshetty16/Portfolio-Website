import { about } from '../content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="section section--alt about">
      <div className="section__inner">
        <Reveal>
          <header className="section__head">
            <h2 className="section__title font-display">{about.title}</h2>
          </header>
        </Reveal>

        <div className="about__grid">
          <Reveal>
            <div className="about-3d-wrap tilt-card" data-tilt-max="10">
              <div className="about-3d__rock">
                <div className="about-3d__border" aria-hidden />
                <img src={about.photo} alt="Vinit Shetty" className="about-3d__img" width={360} height={440} />
              </div>
            </div>
          </Reveal>

          <Reveal stagger className="about__copy">
            <p className="about__lead font-body">{about.lead}</p>
            <p className="about__focus font-mono">
              <span className="about__focus-label">{about.focusLabel}</span> {about.focusValue}
            </p>
            <ul className="about__chips font-mono">
              {about.statChips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
