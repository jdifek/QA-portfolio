import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadStarsPreset } from 'tsparticles-preset-stars'

const AnimatedBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadStarsPreset(engine)
	}, [])

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			options={{
				preset: 'stars',
				background: { color: 'transparent' },
				particles: {
					number: {
						value: 150,
					},
					size: {
						value: { min: 1, max: 3 },
					},
					move: {
						speed: 0.5,
					},
				},
			}}
			className='fixed inset-0 z-[-1]'
		/>
	)
}

export default AnimatedBackground
