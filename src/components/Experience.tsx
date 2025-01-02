import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import React, { Suspense } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Model } from './Model'

const projects = [
	{
		id: 1,
		title: 'E-commerce Testing Framework',
		description:
			'Developed and maintained an end-to-end testing framework for a large e-commerce platform.',
		technologies: ['Cypress', 'TypeScript', 'GitHub Actions'],
		// shape: 'cube',
	},
	{
		id: 2,
		title: 'API Testing Suite',
		description:
			'Created comprehensive API testing suite with automated performance testing.',
		technologies: ['Postman', 'Newman', 'Jenkins', 'JMeter'],
		// shape: 'sphere',
	},
	{
		id: 3,
		title: 'Mobile App Testing',
		description:
			'Implemented automated testing for iOS and Android applications.',
		technologies: ['Appium', 'Java', 'TestNG', 'BrowserStack'],
		// shape: 'torus',
	},
]

const Experience: React.FC = () => {
	// const [selectedProject, setSelectedProject] = React.useState(projects[0])

	// const renderShape = () => {
	// 	return <Model />
	// }

	return (
		// <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20">

		<section className='min-h-screen text-white py-20 flex items-center'>
			<div className='container mx-auto px-6 relative'>
				<Swiper
					direction='vertical'
					spaceBetween={50}
					slidesPerView={1}
					pagination={{
						clickable: true,
					}}
					modules={[Navigation, Pagination]}
					className='mb-20'
				>
					{projects.map(project => (
						<SwiperSlide key={project.id}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className='grid md:grid-cols-2 gap-12 items-center'
							>
								{/* Project Details */}
								<div>
									<motion.h2
										key={`title-${project.id}`}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										className='text-3xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text'
									>
										{project.title}
									</motion.h2>
									<motion.p
										key={`desc-${project.id}`}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 }}
										className='text-blue-100 text-xl mb-6'
									>
										{project.description}
									</motion.p>
									<div className='flex flex-wrap gap-2 mb-8'>
										{project.technologies.map(tech => (
											<span
												key={tech}
												className='px-4 py-2 bg-blue-900/50 rounded-full text-lg border border-blue-500/30 text-blue-200'
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								{/* 3D Visualization */}
								<motion.div
									key={project.id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
									className='h-[400px]'
								>
									<Canvas camera={{ position: [0, 0, 1] }}>
										<ambientLight intensity={0.7} />
										<OrbitControls enableZoom={false} />
										<Suspense fallback={null}>
											<Model />
										</Suspense>
									</Canvas>
								</motion.div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Experience
