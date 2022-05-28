import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function SpinningBoxMesh({ position, args, color }) {
    // Refs
    const mesh = useRef(null);
    const rotating = useRef(true);

    // Rotation variables
    const rotationRate = useRef(0.01);
    const rotationMultiplier = useRef(0.05);
    const changeInRotationMultiplier = 0.03

    // States
    const [expanded, setExpanded] = useState(false);

    // Functions
    function initiateAnimation() {
        const spinTimer = setInterval(() => {
            console.log(rotationRate.current);
            rotationRate.current += rotationRate.current * rotationMultiplier.current;
            rotationMultiplier.current += changeInRotationMultiplier;
            if (rotationRate.current >= 1) {
                clearInterval(spinTimer);
                setExpanded(true);
                rotating.current = false;
            }
        }, 500)   
    }

    // Render Modifications
    useFrame(() => {
        if (rotating.current) {
            mesh.current.rotation.x += rotationRate.current
            mesh.current.rotation.y += rotationRate.current
        } else {
            mesh.current.rotation.x = 0
            mesh.current.rotation.y = 0
        }
    })

    // Springs
    const props = useSpring({
        scale: expanded ? [7,7,7] : [1,1,1],
        color: expanded ? color : 'skyblue',
        // config: {
        //     duration: 1000
        // } 
    })

    return (
        <animated.mesh 
            onClick={initiateAnimation}
            position={position} 
            ref={mesh}
            scale={props.scale}
        >
            <boxBufferGeometry attach='geometry' args={args}/>
            <animated.meshStandardMaterial attach='material' color={props.color}/>
        </animated.mesh>
    )
}