import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { site } from '../content'

const links = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'about', href: '#about', label: 'About' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'education', href: '#education', label: 'Education' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'contact', href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const navRef = useRef<HTMLElement>(null)
  const linksRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY + 120
      let current = 'home'
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const track = linksRef.current
    if (!track) return
    const idx = links.findIndex((l) => l.id === active)
    const link = linkRefs.current[idx]
    if (!link) return
    const tr = track.getBoundingClientRect()
    const lr = link.getBoundingClientRect()
    setIndicator({ left: lr.left - tr.left, width: lr.width })
  }, [active, open])

  useEffect(() => {
    const onResize = () => {
      const track = linksRef.current
      const idx = links.findIndex((l) => l.id === active)
      const link = linkRefs.current[idx]
      if (!track || !link) return
      const tr = track.getBoundingClientRect()
      const lr = link.getBoundingClientRect()
      setIndicator({ left: lr.left - tr.left, width: lr.width })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header ref={navRef} className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand font-display" onClick={(e) => go(e, '#home')}>
          {site.name}
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav__cluster ${open ? 'nav__cluster--open' : ''}`}>
          <nav ref={linksRef} className="nav__links" aria-label="Primary">
            <span className="nav__indicator" style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }} />
            {links.map((l, i) => (
              <a
                key={l.href}
                ref={(el) => {
                  linkRefs.current[i] = el
                }}
                href={l.href}
                className={active === l.id ? 'is-active' : ''}
                onClick={(e) => go(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a className="nav__cv" href={site.resumePdf} download>
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
