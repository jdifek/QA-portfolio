import { motion } from 'framer-motion'
import React from 'react'
import { SkillCard } from '../SkillCard'
import { SKILL_ITEMS } from './skill-items.data'

const About: React.FC = () => {
	return (
		<section className='py-14'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='max-w-4xl mx-auto'
				>
					<div className='relative text-center mb-16'>
						<h1 className='text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text h-[80px]'>
							<div className='absolute left-0 top-1/2 md:top-40 transform -translate-y-1/2 bg-blue-800 w-24 h-56 md:h-96 -z-10' />
							QA Automation Engineer
						</h1>
						<p className='text-xl text-gray-100 mb-8'>
							Passionate about creating robust test automation frameworks and
							ensuring software quality
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8'>
						{SKILL_ITEMS.map((skill, index) => (
							<SkillCard key={index} {...skill} index={index} />
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className='mt-16 text-center'
					>
						<h2 className='text-2xl font-bold mb-4 text-gray-100'>About Me</h2>
						<p className='text-red-100 leading-relaxed'>
							With over 5 years of experience in software testing and
							automation, I specialize in building scalable test frameworks and
							implementing efficient CI/CD pipelines. My expertise includes web
							and API testing, performance testing, and mobile application
							testing. I'm passionate about staying current with the latest
							testing methodologies and automation tools to ensure the highest
							quality of software delivery.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default About
