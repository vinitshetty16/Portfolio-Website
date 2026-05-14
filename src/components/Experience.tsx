import { useEffect, useRef } from 'react'
import { experience, experienceIntro, site } from '../content'
import { Reveal } from './Reveal'

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add('experience--visible')
      },
      { threshold: 0.08 },
    )
    o.observe(el)
    return () => o.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="section experience">
      <div className="section__inner">
        <Reveal>
          <header className="section__head section__head--center">
            <h2 className="section__title font-display">Experience</h2>
            <p className="section__lead font-body">{experienceIntro}</p>
          </header>
        </Reveal>

        <div className="experience__timeline">
          <div className="experience__rail" aria-hidden />
          <div className="experience__entries">
            {experience.map((job) => (
              <ExpCard key={job.company + job.date} job={job} />
            ))}
          </div>
        </div>

        <div className="experience__cv">
          <a className="btn-cv-sweep" href={site.resumePdf} download>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 3v12M8 11l4 4 4-4M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

function ExpCard({ job }: { job: (typeof experience)[0] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add('exp-card--visible')
      },
      { threshold: 0.12 },
    )
    o.observe(el)
    return () => o.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="exp-card tilt-card"
      data-tilt-max="5"
      data-watermark={job.company}
    >
      <span className="exp-card__accent" aria-hidden />
      <span className="exp-card__dot" aria-hidden />
      <span className="exp-card__date font-mono">{job.date}</span>
      <h3 className="exp-card__role font-display">
        {job.title} · {job.company}
      </h3>
      <p className="exp-card__narrative font-body">{job.narrative}</p>
      <ul className="exp-card__outcomes font-body">
        {job.outcomes.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <ul className="exp-card__tools font-mono">
        {job.tools.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
