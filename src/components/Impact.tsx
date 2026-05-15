import { impactCards } from '../content'
import { ParallaxLift } from './ParallaxLift'
import { Reveal } from './Reveal'

export function Impact() {
  return (
    <section id="impact" className="section impact">
      <ParallaxLift rate={0.014}>
        <div className="section__inner">
          <div className="impact__grid">
            {impactCards.map((card) => (
              <Reveal key={card.title} className="impact-card">
                <h3 className="impact-card__title font-display">{card.title}</h3>
                <p className="impact-card__sub font-mono">{card.subtitle}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </ParallaxLift>
    </section>
  )
}
