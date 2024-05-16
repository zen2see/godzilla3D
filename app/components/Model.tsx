import { useEffect, useRef } from "react"
import { Group } from "three"
import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

// useGLTF.preload('/robot_playground.glb')
useGLTF.preload('/godzilla.glb')
// useGLTF.preload('/lefty.glb')

export default function Model() {
    const group = useRef<Group>(null)
    // const { nodes, materials, animations, scene } = useGLTF('/robot_playground.glb')
    const { nodes, materials, animations, scene } = useGLTF('/godzilla.glb')
    // const { nodes, materials, animations, scene } = useGLTF('/lefty.glb')
    const model = useGLTF('/godzilla.glb')
    const { actions, clips }= useAnimations(animations, scene)
    const scroll = useScroll()
    useEffect(() => {
        //console.log(actions)
        // @ts-ignore
        actions['Animation Scene'].play().paused = true
    }, [])
    useFrame(() => 
        // @ts-ignore
        (actions['Animation Scene'].time = 
        // @ts-ignore
        (actions['Animation Scene']?.getClip().duration * scroll.offset) /4)
    )
    return(
        <>
            <primitive object={scene} scale={.15} position={[0, -1, 3]} />
        </>
        //  <group ref={group}>
        //    <primitive object={scene} />
        //  </group>
    )
}