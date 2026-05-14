import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** When set, children get data-stagger for stepped delays once visible */
  stagger?: boolean
}

/**
 * IntersectionObserver adds `is-visible`; CSS handles opacity / translateY.
 */
export function Reveal({ children, className = '', stagger }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -12% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${stagger ? 'reveal--stagger' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
