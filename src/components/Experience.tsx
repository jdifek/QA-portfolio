import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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

const Experience = () => {
	return (
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
								className='grid md:grid-cols-2 gap-12 items-center h-full max-md:max-w-[460px]'
							>
								{/* Project Details */}
								<div>
									<motion.h2
										key={`title-${project.id}`}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										className='relative text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text'
									>
										{/* Синий квадрат позади текста */}
										<div className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-800 w-28 h-48 -z-10' />
										{project.title}
									</motion.h2>
									<motion.p
										key={`desc-${project.id}`}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 }}
										className='text-gray-50 text-xl mb-8'
									>
										{project.description}
									</motion.p>
									<div className='flex flex-wrap gap-3 mb-8'>
										{project.technologies.map(tech => (
											<span
												key={tech}
												className='px-4 py-2 text-lg border border-gray-600 text-gray-100  backdrop-blur-md rounded-lg'
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								{/* 3D Visualization */}
								{/* <motion.div
									key={project.id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
									className='h-[400px]'
								>
									<Canvas>
										<ambientLight intensity={0.5} />
										<directionalLight position={[2, 2, 2]} />
										<Model scale={0.5} position={[0, -0.5, 0]} />
										<OrbitControls enableZoom={false} />
									</Canvas>
								</motion.div> */}
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Experience
