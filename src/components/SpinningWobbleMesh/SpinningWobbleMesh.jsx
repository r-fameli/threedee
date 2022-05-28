import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";


export default function SpinningWobbleMesh({ position, args, color, speed }) {
    const mesh = useRef(null);
    useFrame(() => {
        const rotationLevel = 0.01
        mesh.current.rotation.x += rotationLevel
        mesh.current.rotation.y += rotationLevel
    })

    const [expand, setExpand] = useState(false);
    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1,1,1]
    })

    return (
        <animated.mesh 
            onClick={() => setExpand(!expand)}
            scale={props.scale}
            castShadow 
            position={position} 
            ref={mesh}
        >
            <boxBufferGeometry attach='geometry' args={args}/>
            <MeshWobbleMaterial 
                attach='material' 
                color={color} 
                speed={speed} 
                factor={0.5}
            />
        </animated.mesh>
    )
}