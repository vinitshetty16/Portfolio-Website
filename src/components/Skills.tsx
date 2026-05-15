import { useRef } from 'react'
import { skillCategories, skillCerts, skillsIntro, type SkillCategory } from '../content'
import { ParallaxLift } from './ParallaxLift'
import { Reveal } from './Reveal'

function CategoryIcon({ icon }: { icon: SkillCategory['icon'] }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: '#3B82F6', strokeWidth: 1.4 }
  switch (icon) {
    case 'query':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      )
    case 'viz':
      return (
        <svg {...common}>
          <path d="M4 18V6M4 18h16M8 14v4M12 10v8M16 6v12" strokeLinecap="round" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M6 18h12a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.7-1.5A3.5 3.5 0 0 0 6 18Z" />
        </svg>
      )
    case 'ai':
      return (
        <svg {...common}>
          <circle cx="9" cy="10" r="2.5" />
          <circle cx="15" cy="10" r="2.5" />
          <path d="M7 16c1.2 1.5 3 2.5 5 2.5s3.8-1 5-2.5" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <ParallaxLift rate={0.024}>
        <div className="section__inner">
          <Reveal>
            <header className="section__head section__head--center">
              <h2 className="section__title font-display">Skills</h2>
              <p className="section__lead font-body">{skillsIntro}</p>
            </header>
          </Reveal>

          <div className="skills__grid">
            {skillCategories.map((cat) => (
              <SkillCard key={cat.name} cat={cat} />
            ))}
          </div>

          <Reveal>
            <ul className="skills__certs font-mono">
              {skillCerts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </ParallaxLift>
    </section>
  )
}

function SkillCard({ cat }: { cat: SkillCategory }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    const g = glareRef.current
    if (!el || !g) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    g.style.left = `${x}%`
    g.style.top = `${y}%`
    g.style.opacity = '0.06'
  }

  const onLeave = () => {
    const g = glareRef.current
    if (g) g.style.opacity = '0'
  }

  return (
    <Reveal>
      <div
        ref={cardRef}
        className="skills__card tilt-card skills__card--3d"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div ref={glareRef} className="skills__glare" aria-hidden />
        <div className="skills__card-icon">
          <CategoryIcon icon={cat.icon} />
        </div>
        <h3 className="skills__card-title font-display">{cat.name}</h3>
        <ul className="skills__pills font-mono">
          {cat.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
