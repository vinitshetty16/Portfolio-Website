import { educationCards } from '../content'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__inner">
        <Reveal>
          <header className="section__head section__head--center">
            <h2 className="section__title font-display">Education</h2>
          </header>
        </Reveal>

        <div className="education__grid">
          {educationCards.map((c, i) => (
            <Reveal key={c.id} className={`education__cell education__cell--${i}`}>
              <div
                className={`edu-flip-outer tilt-card ${c.pulse ? 'edu-flip-outer--pulse' : ''} ${c.microsoft ? 'edu-flip-outer--ms' : ''}`}
                data-tilt-max="8"
              >
                <div className="edu-flip">
                  <div className="edu-flip__inner">
                    <div className="edu-flip__face edu-flip__front">
                      <h3 className="edu-flip__title font-display">{c.frontTitle}</h3>
                      <p className="edu-flip__school font-body">{c.frontSchool}</p>
                      <p className="edu-flip__meta font-mono">{c.frontMeta}</p>
                    </div>
                    <div className="edu-flip__face edu-flip__back">
                      <p className="edu-flip__back-text font-body">{c.backBody}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
