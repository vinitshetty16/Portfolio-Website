import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scroll = doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      setP(height > 0 ? scroll / height : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-valuenow={Math.round(p * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="scroll-progress__bar" style={{ transform: `scaleX(${p})` }} />
    </div>
  )
}
