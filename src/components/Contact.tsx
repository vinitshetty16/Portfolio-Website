import { contact, site } from '../content'
import { Reveal } from './Reveal'

function LinkedInIcon() {
  return (
    <svg className="contact__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 8.5h-3V21h3V8.5Zm-1.5-5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM21 13.2c0-3.4-1.8-5-4.2-5-1.9 0-2.8 1-3.3 1.7V8.5H11V21h3.2v-5.8c0-1.3.9-2.6 2.6-2.6 1.8 0 2.2 1.4 2.2 2.8V21H21V13.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="contact__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <div className="section__inner contact__inner">
        <Reveal>
          <h2 className="contact__heading font-display">{contact.heading}</h2>
          <p className="contact__body font-body">{contact.body}</p>
        </Reveal>

        <div className="contact__actions">
          <Reveal className="contact__card contact__card--primary">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="contact__card-link">
              <LinkedInIcon />
              <span className="contact__card-label font-mono">{contact.linkedinCta}</span>
              <span className="contact__card-sub font-mono">{site.linkedinDisplay}</span>
            </a>
          </Reveal>
          <Reveal className="contact__card contact__card--secondary">
            <a href={`mailto:${site.email}`} className="contact__card-link">
              <MailIcon />
              <span className="contact__card-label font-mono">{contact.emailCta}</span>
              <span className="contact__card-sub font-mono">{site.email}</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
