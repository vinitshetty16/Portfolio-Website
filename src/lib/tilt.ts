/** Mouse-based 3D tilt. Max tilt in degrees from `data-tilt-max` (default 12). */
export function initTiltEffect(el: HTMLElement): () => void {
  if (el.dataset.tiltInit === '1') return () => {}
  el.dataset.tiltInit = '1'

  const max = Math.min(24, Math.max(1, Number(el.dataset.tiltMax ?? 12)))
  const base = el.style.transform || ''

  const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n))

  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const nx = (e.clientX - cx) / (r.width / 2)
    const ny = (e.clientY - cy) / (r.height / 2)
    const rotateY = clamp(nx * max, -max, max)
    const rotateX = clamp(-ny * max, -max, max)
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const onLeave = () => {
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  el.classList.add('tilt-card--ready')
  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)

  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
    el.style.transform = ''
    delete el.dataset.tiltInit
  }
}

export function initTiltEffects(root: ParentNode = document): () => void {
  const cleanups: Array<() => void> = []
  root.querySelectorAll<HTMLElement>('.tilt-card').forEach((el) => {
    const c = initTiltEffect(el)
    cleanups.push(c)
  })
  return () => cleanups.forEach((fn) => fn())
}
