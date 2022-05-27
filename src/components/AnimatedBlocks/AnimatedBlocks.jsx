import { Canvas } from "react-three-fiber";

export default function AnimatedBlocks() {
    return (
        <Canvas>
            <mesh>
            <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
            <meshStandardMaterial attach='material'/>
            </mesh>
        </Canvas>
    )
}