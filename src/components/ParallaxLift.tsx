import { useEffect, useRef, type ReactNode } from 'react'

/** Subtle scroll-linked vertical shift (respects reduced motion). */
export function ParallaxLift({ children, rate = 0.022 }: { children: ReactNode; rate?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      el.style.setProperty('--lift', `${y * rate}px`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [rate])

  return (
    <div ref={ref} className="parallax-lift">
      {children}
    </div>
  )
}
