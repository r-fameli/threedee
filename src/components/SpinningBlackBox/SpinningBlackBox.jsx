import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function RotatingBlock() {
    const mesh = useRef(null);
    useFrame(() => {mesh.current.rotation.x = mesh.current.rotation.y += 0.01})

    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
            <meshStandardMaterial attach='material'/>
        </mesh>
    )
}