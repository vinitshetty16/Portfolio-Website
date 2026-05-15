import { about } from '../content'
import { ParallaxLift } from './ParallaxLift'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="section section--alt about">
      <ParallaxLift rate={-0.02}>
        <div className="section__inner">
        <Reveal>
          <header className="section__head">
            <h2 className="section__title font-display">{about.title}</h2>
          </header>
        </Reveal>

        <div className="about__grid">
          {/* No Reveal wrapper — avoids transform stacking with overflow; frame is CSS-only */}
          <div className="about-profile-frame">
            <img src={about.photo} alt="Vinit Shetty" width={320} height={360} decoding="async" />
          </div>

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
      </ParallaxLift>
    </section>
  )
}
