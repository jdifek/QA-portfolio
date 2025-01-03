import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Cube } from '../../models/Cube'
import { PROJECT_ITEMS } from './experience-items.data'

const Experience = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const swiperRef = useRef<SwiperClass | null>(null)

	const handleClick = (index: number) => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(index) // Теперь это работает!
		}
		setActiveIndex(index)
	}

	return (
		<section className='py-14 '>
			<div className='container relative mx-auto px-6 grid md:grid-cols-2 gap-12'>
				{/* Синий квадрат позади текста */}
				<div className='absolute left-5 top-20 lg:top-28 transform -translate-y-1/2 bg-blue-800 w-14 h-44 -z-10' />
				{/* Project Details*/}
				<div className='flex flex-col justify-evenly  gap-10'>
					{PROJECT_ITEMS.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							onClick={() => handleClick(index)}
							className='grid grid-cols-2 gap-2 cursor-pointer'
						>
							{/* Левая колонка - Заголовок */}
							<motion.h2
								key={`title-${project.id}`}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								className={`text-xl font-bold transition-colors duration-300
                  ${
										activeIndex === index
											? 'text-white'
											: 'text-gray-500 opacity-50'
									}`}
							>
								{project.title}
							</motion.h2>
							{/* Правая колонка - Описание */}
							<motion.p
								key={`desc-${project.id}`}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className={`text-lg transition-colors duration-300
                  ${
										activeIndex === index
											? 'text-white'
											: 'text-gray-500 opacity-50'
									}`}
							>
								{project.description}
							</motion.p>
						</motion.div>
					))}
				</div>
				{/* 3D Swiper*/}
				<Swiper
					onSwiper={swiper => (swiperRef.current = swiper)}
					direction='vertical'
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					modules={[Navigation, Pagination]}
					onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
					className='h-[400px] cursor-grab'
				>
					{PROJECT_ITEMS.map(project => (
						<SwiperSlide key={project.id}>
							<motion.div
								key={project.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								className='h-full'
							>
								<Canvas camera={{ position: [0, 0, 5] }}>
									<ambientLight intensity={0.7} />
									<pointLight
										position={[10, 10, 10]}
										intensity={1}
										color='#60a5fa'
									/>
									<pointLight
										position={[-10, -10, -10]}
										intensity={0.5}
										color='#3b82f6'
									/>
									<Cube />
									<OrbitControls enableZoom={false} />
								</Canvas>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Experience
