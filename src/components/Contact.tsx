import { contact, site } from '../content'
import { ParallaxLift } from './ParallaxLift'
import { Reveal } from './Reveal'
import { MiniParticles } from './MiniParticles'

function LinkedInIcon() {
  return (
    <svg className="contact__icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 7.5a2 2 0 1 1 0 .01V7.5Zm-2 3.5h3V21H4.5V11Zm6 0h2.9v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V21h-3v-4.8c0-1.1 0-2.6-1.6-2.6-1.6 0-1.8 1.3-1.8 2.6V21h-3V11Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="contact__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <ParallaxLift maxPx={10}>
        <div className="section__inner contact__inner">
          <Reveal>
            <h2 className="contact__heading font-display">{contact.heading}</h2>
            <p className="contact__body font-body">{contact.body}</p>
          </Reveal>

          <div className="contact__actions">
            <Reveal>
              <div className="contact__card contact__card--primary tilt-card">
                <MiniParticles />
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="contact__card-link">
                  <LinkedInIcon />
                  <span className="contact__card-label font-mono">{contact.linkedinCta}</span>
                  <span className="contact__card-sub font-mono">{site.linkedinDisplay}</span>
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact__card contact__card--secondary tilt-card">
                <a href={`mailto:${site.email}`} className="contact__card-link">
                  <MailIcon />
                  <span className="contact__card-label font-mono">{contact.emailCta}</span>
                  <span className="contact__card-sub font-mono">{site.email}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </ParallaxLift>
    </section>
  )
}
