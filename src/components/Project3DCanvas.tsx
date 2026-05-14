import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, RoundedBox, useTexture } from '@react-three/drei'
import { Suspense, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'

function TexturedPanel({ url }: { url: string }) {
  const texture = useTexture(url)
  const { gl } = useThree()

  useLayoutEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy())
  }, [texture, gl])

  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.28
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.45} floatIntensity={0.35}>
        <RoundedBox args={[2.85, 1.55, 0.12]} radius={0.09} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial map={texture} metalness={0.18} roughness={0.38} />
        </RoundedBox>
      </Float>
    </group>
  )
}

export function Project3DCanvas({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="project-3d">
      <Canvas
        camera={{ position: [0, 0, 2.65], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 8]} intensity={1.05} color="#f8fafc" />
        <pointLight position={[-4, -2, 3]} intensity={0.85} color="#a78bfa" />
        <pointLight position={[3, -3, -2]} intensity={0.65} color="#22d3ee" />
        <Suspense fallback={null}>
          <TexturedPanel key={imageUrl} url={imageUrl} />
        </Suspense>
      </Canvas>
    </div>
  )
}
