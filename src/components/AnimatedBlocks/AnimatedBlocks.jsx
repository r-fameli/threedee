import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { softShadows, OrbitControls } from "@react-three/drei";

import SpinningWobbleMesh from "../SpinningWobbleMesh/SpinningWobbleMesh";

softShadows();

export default function AnimatedBlocks() {
    return (
        <Canvas shadows colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
            <ambientLight intensity={0.7}/>
            <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1.5}
                shadow-mapSize-width={10240}
                shadow-mapSize-height={10240}
                shadow-camera-far={20}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5}/>
            <pointLight position={[0, -10, 0]} intensity={0.5}/>

            <group>
                <mesh
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -3, 0]}
                    receiveShadow>
                    <planeBufferGeometry attach='geometry' args={[100, 100]} />
                    <shadowMaterial attach='material' opacity={0.3} />
                </mesh>
                <SpinningWobbleMesh position={[0,1,0]} args={[3,2,1]} color='lightblue' speed={2}/>
                <SpinningWobbleMesh position={[-2,1,-5]} color='pink' speed={6}/>
                <SpinningWobbleMesh position={[5,1,-2]} color='pink' speed={6}/>
            </group>
            <OrbitControls/>
        </Canvas>
    )
}