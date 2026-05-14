import { expertisePanels } from '../content'
import { Reveal } from './Reveal'

function Icon({ kind }: { kind: (typeof expertisePanels)[0]['icon'] }) {
  const c = '#3B82F6'
  if (kind === 'db') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke={c} strokeWidth="1.4" />
        <path d="M5 6v6c0 1.6 3.2 3 7 3s7-1.4 7-3V6" stroke={c} strokeWidth="1.4" />
        <path d="M5 12v6c0 1.6 3.2 3 7 3s7-1.4 7-3v-6" stroke={c} strokeWidth="1.4" />
      </svg>
    )
  }
  if (kind === 'map') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" stroke={c} strokeWidth="1.4" />
        <circle cx="12" cy="10" r="2" fill={c} />
      </svg>
    )
  }
  if (kind === 'clip') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z" stroke={c} strokeWidth="1.4" />
        <path d="M9 12h6M9 16h4" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v4M12 17v4M4.2 6.3l3.4 2M16.4 15.7l3.4 2M3 12h4M17 12h4M4.2 17.7l3.4-2M16.4 8.3l3.4-2" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ExpertisePanels() {
  return (
    <section className="section section--alt expertise" aria-label="Areas of expertise">
      <div className="section__inner expertise__grid">
        {expertisePanels.map((p, i) => (
          <Reveal key={p.title} className="expertise-panel tilt-card">
            <div className="expertise-panel__accent" aria-hidden />
            <div className="expertise-panel__icon">
              <Icon kind={p.icon} />
            </div>
            <h3 className="expertise-panel__title font-display">{p.title}</h3>
            <p className="expertise-panel__body font-body">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
