import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Subtle vertical parallax based on how close this block is to the viewport centre.
 * Motion is bounded (unlike scrollY × rate) so content does not paint over adjacent sections.
 */
export function ParallaxLift({ children, maxPx = 12 }: { children: ReactNode; maxPx?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const mid = rect.top + rect.height * 0.5
      const t = (mid - vh * 0.5) / (vh * 0.55)
      const u = Math.max(-1, Math.min(1, t))
      const lift = -u * maxPx
      el.style.setProperty('--lift', `${lift}px`)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [maxPx])

  return (
    <div ref={ref} className="parallax-lift">
      {children}
    </div>
  )
}
