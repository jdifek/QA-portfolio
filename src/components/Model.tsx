import { useGLTF } from '@react-three/drei'
import React from 'react'

const Model: React.FC = () => {
	const { scene } = useGLTF('/models/scene.gltf')
	return <primitive object={scene} scale={[3, 3, 3]} position={[0, -0.3, 0]} />
}

export default Model
