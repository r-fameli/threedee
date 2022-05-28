import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshWobbleMaterial, OrthographicCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import SpinningBoxMesh from "../SpinningBoxMesh/SpinningBoxMesh";

export default function CubeEntryAnimation() {
    return (
        <Canvas>
            <ambientLight intensity={0.8}/>
            <SpinningBoxMesh 
            position={[0,0,0]} 
            args={[1,1,1]} 
            color={'#f5c0c0'}
            />
        </Canvas>
    )
}