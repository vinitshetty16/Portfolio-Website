import { site } from '../content'

export function Footer() {
  const y = new Date().getFullYear()
  return (
    <footer className="footer font-mono">
      <div className="section__inner footer__inner">
        <p>© {y} {site.name} · Built with intention.</p>
      </div>
    </footer>
  )
}
