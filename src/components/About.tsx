import { motion } from 'framer-motion'
import React from 'react'
import { icons } from './icons'
import { SkillCard } from './SkillCard'

const skills = [
	{
		icon: icons.test,
		title: 'Test Automation',
		description: 'Expertise in Selenium, Cypress, and Playwright',
	},
	{
		icon: icons.code,
		title: 'Programming',
		description: 'JavaScript/TypeScript, Python, Java',
	},
	{
		icon: icons.bug,
		title: 'Quality Assurance',
		description: 'Test planning, execution, and reporting',
	},
	{
		icon: icons.workflow,
		title: 'CI/CD',
		description: 'Jenkins, GitHub Actions, Docker',
	},
]

const About: React.FC = () => {
	return (
		<section className=' text-white flex items-center py-20'>
			<div className='container mx-auto px-6 mt-20'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='max-w-4xl mx-auto'
				>
					<div className='relative text-center mb-16'>
						<h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text'>
							<div className='absolute left-0 top-1/2 md:top-40 transform -translate-y-1/2 bg-blue-800 w-28 md:w-52 h-56 md:h-96 -z-10' />
							QA Automation Engineer
						</h1>
						<p className='text-xl text-gray-100 mb-8'>
							Passionate about creating robust test automation frameworks and
							ensuring software quality
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8'>
						{skills.map((skill, index) => (
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
