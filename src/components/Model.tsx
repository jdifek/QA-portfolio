// import { useGLTF } from '@react-three/drei'
// import React from 'react'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

// const Model: React.FC = () => {
// 	const { scene } = useGLTF('/models/TV/scene.gltf')
// 	return <primitive object={scene} scale={[3, 3, 3]} position={[0, -0.3, 0]} />
// }

// export default Model

export const Model = () => {
	const gltf = useLoader(GLTFLoader, '/models/TV/scene.gltf')
	return (
		<>
			<primitive object={gltf.scene} scale={0.4} />
		</>
	)
}
