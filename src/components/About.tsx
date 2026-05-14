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
            <div
              className="about-profile-slot"
              style={{
                width: '100%',
                maxWidth: 320,
                height: 360,
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                border: '2px solid rgba(59, 130, 246, 0.4)',
                margin: '0 auto',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={about.photo}
                alt="Vinit Shetty"
                width={320}
                height={360}
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
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
