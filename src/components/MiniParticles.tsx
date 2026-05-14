import { useEffect, useRef } from 'react'

const N = 15

type P = { x: number; y: number; vx: number; vy: number }

export function MiniParticles() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let pts: P[] = []

    const resize = () => {
      const { clientWidth, clientHeight } = wrap
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = clientWidth * dpr
      canvas.height = clientHeight * dpr
      canvas.style.width = `${clientWidth}px`
      canvas.style.height = `${clientHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * clientWidth,
        y: Math.random() * clientHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.2,
      }))
    }

    const tick = () => {
      const w = wrap.clientWidth
      const h = wrap.clientHeight
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.12)'
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.x = (p.x + w) % w
        if (p.y < 0) p.y = h
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className="mini-particles">
      <canvas ref={canvasRef} className="mini-particles__canvas" aria-hidden />
    </div>
  )
}
