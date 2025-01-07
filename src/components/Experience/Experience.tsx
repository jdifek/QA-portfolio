import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Suspense, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './loader.css'
function Model({ url, scale, rotation }) {
	const { scene } = useGLTF(url) // Загружаем GLTF модель
	const meshRef = useRef()

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01 // Вращение вокруг оси Y
		}
	})

	return (
		<Center>
			<primitive
				object={scene}
				scale={scale} // Масштабирование модели
				rotation={rotation} // Применяем вращение
				ref={meshRef}
			/>
		</Center>
	)
}

function Scene({ url, scale, rotation }) {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Suspense fallback={null}>
				<Model url={url} scale={scale} rotation={rotation} />
				<OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
			</Suspense>
		</Canvas>
	)
}

const Experience = () => {
	return (
		<section className='py-14'>
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
					{PROJECT_ITEMS.map((project, index) => {
						// Разворачиваем первую модель лицом
						const rotation = index === 0 ? [90, Math.PI / 6, 660] : [0, 0, 0] // Для первой модели, вращаем на 180 градусов по оси Y

						return (
							<SwiperSlide key={project.id}>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									className='grid md:grid-cols-2 gap-12 items-center h-full cursor-grab'
								>
									<div>
										<motion.h2
											key={`title-${project.id}`}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											className='relative text-lg md:text-xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text'
										>
											<div className='absolute left-0 top-24 transform -translate-y-1/2 bg-blue-800 w-14 h-48 -z-10' />
											{project.title}
										</motion.h2>
										<motion.p
											key={`desc-${project.id}`}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.1 }}
											className='text-gray-50 text-sm mb-6 whitespace-pre-line'
										>
											{project.description
												.split('•')
												.filter(Boolean) // Убираем пустые строки, если они есть
												.map((sentence, idx) => (
													<span key={idx} className='block'>
														• {sentence.trim()}
													</span>
												))}
										</motion.p>
										<div className='flex flex-wrap gap-3 mb-8'>
											{project.technologies.map(tech => (
												<span
													key={tech}
													className='px-4 py-2 text-sm border border-gray-600 text-gray-100 backdrop-blur-md rounded-lg'
												>
													{tech}
												</span>
											))}
										</div>
									</div>
									<motion.div
										key={project.id}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5 }}
										className='h-[600px]'
									>
										<Scene
											url={project.modelUrl}
											scale={
												index === 1 || index === 2 ? [7, 7, 7] : [0.9, 0.9, 0.9]
											} // Увеличиваем вторую и третью модели в 7 раз, первую немного уменьшаем
											rotation={rotation} // Применяем вращение для первой модели
										/>
									</motion.div>
								</motion.div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}

export default Experience

export const PROJECT_ITEMS = [
	{
		id: 1,
		title: 'Automation JS/TS QA Engineer, Clinch - AdTech',
		description: `• Built a testing framework from scratch using JavaScript, TypeScript, and Playwright 
        • Set up Jenkins pipelines with Docker for automated test execution 
        • Integrated the framework with external services and tools to enhance functionality 
        • Adding features and optimizing the framework for continuous improvement 
        • Writing and executing regression, API, and UI tests suites 
        • Leading the QA team, overseeing process optimization and continuous improvement 
        • Mentoring QA team members, conducting code reviews, and setting team goals`,
		technologies: ['Cypress', 'TypeScript', 'GitHub Actions'],
		modelUrl: '/mechanical_keyboard_-_aesthetic.glb',
	},
	{
		id: 2,
		title: 'Automation JavaScript QA Engineer, GlobalLogic - Healthcare',
		description:
			'• Developing automated test cases using JavaScript and Selenium Web-Driver • Requirements, documentation analysis. Regression investigation via Jenkins CI/CD • Test planning. Customer communication. Test design covering, risks analysis • Executing automated scripts using Appium, Perfecto for both Android and iOS • Manual testing using real devices, iOS, Android, insulin pump emulator • Utilized various testing methods such as White-Box, Black-Box, Exploratory etc',
		technologies: ['Postman', 'Newman', 'Jenkins', 'JMeter'],
		modelUrl: '/28e9373b8550488bac26b3c35ac2225a.glb',
	},
	{
		id: 3,
		title: 'Mobile App Testing',
		description:
			'Implemented automated testing for iOS and Android applications.',
		technologies: ['Appium', 'Java', 'TestNG', 'BrowserStack'],
		modelUrl: '/asus_rog_zephyrus_g14_2024.glb',
	},
]
