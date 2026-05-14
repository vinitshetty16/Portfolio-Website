import { site } from '../content'

export function Footer() {
  const y = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="section__inner footer__inner">
        <p>
          © {y} {site.name}. Analytics-focused portfolio — built with React & Three.js.
        </p>
      </div>
    </footer>
  )
}
