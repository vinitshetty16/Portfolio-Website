import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function DistortedCore() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.05
    ref.current.rotation.y += delta * 0.11
  })
  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.55}>
      <mesh ref={ref} scale={1.05}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#0d9488"
          emissive="#312e81"
          emissiveIntensity={0.45}
          roughness={0.22}
          metalness={0.65}
          distort={0.48}
          speed={2.2}
        />
      </mesh>
    </Float>
  )
}

function WireCage() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.07
  })
  return (
    <mesh ref={ref} scale={1.62}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.28} depthWrite={false} />
    </mesh>
  )
}

function OrbitingNodes() {
  const group = useRef<THREE.Group>(null)
  const nodes = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => {
      const t = (i / 14) * Math.PI * 2
      const r = 2.15 + (i % 3) * 0.12
      return {
        pos: new THREE.Vector3(Math.cos(t) * r, Math.sin(t * 1.3) * 0.35, Math.sin(t) * r),
        s: 0.06 + (i % 4) * 0.02,
      }
    })
  }, [])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12
  })

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <octahedronGeometry args={[n.s, 0]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#22d3ee' : '#c4b5fd'}
            emissive={i % 2 === 0 ? '#0891b2' : '#7c3aed'}
            emissiveIntensity={0.9}
            metalness={0.4}
            roughness={0.35}
          />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#030712']} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 4, 5]} intensity={1.1} color="#f0f9ff" />
      <pointLight position={[-5, -2, 4]} intensity={1.4} color="#a78bfa" />
      <pointLight position={[4, -3, -3]} intensity={0.9} color="#22d3ee" />
      <Stars radius={80} depth={40} count={4200} factor={3.5} saturation={0} fade speed={0.4} />
      <Sparkles count={160} scale={[10, 5, 8]} size={2.2} speed={0.35} color="#67e8f9" opacity={0.9} />
      <DistortedCore />
      <WireCage />
      <OrbitingNodes />
    </>
  )
}

export function CanvasHero() {
  return (
    <div className="hero-canvas" aria-hidden>
      <Canvas
        camera={{ position: [0, 0.15, 6.2], fov: 42 }}
        dpr={[1, 1.85]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
