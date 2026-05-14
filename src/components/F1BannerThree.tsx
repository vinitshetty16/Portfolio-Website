import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function F1BannerThree({ boost }: { boost: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const boostRef = useRef(boost)
  boostRef.current = boost

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth || 400
    const h = mount.clientHeight || 180
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.z = 4.2

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const geo = new THREE.TorusKnotGeometry(1, 0.3, 128, 16)
    const mat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true })
    const knot = new THREE.Mesh(geo, mat)
    scene.add(knot)

    const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16)
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa })
    const spheres = [new THREE.Mesh(sphereGeo, sphereMat), new THREE.Mesh(sphereGeo, sphereMat), new THREE.Mesh(sphereGeo, sphereMat)]
    spheres.forEach((s) => scene.add(s))

    let raf = 0
    const t0 = performance.now()

    const loop = (now: number) => {
      const t = (now - t0) * 0.001
      const b = boostRef.current
      const speed = b ? 1.85 : 1
      knot.rotation.x = t * 0.55 * speed
      knot.rotation.y = t * 0.72 * speed

      const orbitR = 1.55
      spheres[0].position.set(Math.cos(t * speed) * orbitR, Math.sin(t * 0.9 * speed) * 0.4, Math.sin(t * speed) * orbitR)
      spheres[1].position.set(Math.cos(t * speed + 2.1) * orbitR, Math.sin(t * speed * 0.7) * 0.35, Math.sin(t * speed + 2.1) * orbitR)
      spheres[2].position.set(Math.cos(t * speed + 4.2) * orbitR * 0.85, Math.cos(t * speed * 0.5) * 0.5, Math.sin(t * speed + 4.2) * orbitR * 0.85)

      const targetZ = b ? 3.45 : 4.2
      camera.position.z += (targetZ - camera.position.z) * 0.07

      renderer.render(scene, camera)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const ro = new ResizeObserver(() => {
      const nw = mount.clientWidth || 1
      const nh = mount.clientHeight || 1
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    })
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mount.removeChild(renderer.domElement)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      sphereGeo.dispose()
      sphereMat.dispose()
    }
  }, [])

  return <div className="f1-banner-three" ref={mountRef} />
}
