'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Model'
import { Html, OrbitControls, ScrollControls, useProgress } from '@react-three/drei'

function Loader() {
  const { progress, active } = useProgress()
  return <Html center> {progress.toFixed(1)} % loaded</Html>
}
export default function Scene() {
  return (
    <Canvas
      className='relative h-svh bg-black'
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
    >
      <OrbitControls
         enableDamping
         enableZoom={true} 
         maxPolarAngle={Math.PI} 
         minAzimuthAngle={-Math.PI * .5}
         maxAzimuthAngle={Math.PI * .5}
      >
      </OrbitControls>
      <ambientLight intensity={5}/>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={
        <Html>
          <Loader />
        </Html>
      }>
        <ScrollControls damping={0.5} pages={3}>
          <Model />
        </ScrollControls>
      </Suspense>    
    </Canvas>
  )
}