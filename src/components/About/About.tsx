import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownFromLine, ArrowUpFromLine } from 'lucide-react'
import { useMobileModal } from '../../helpers/hooks/useMobileModal'
import ShinyText from '../ShinyText'
import { SkillCard } from '../SkillCard'
import { SKILL_ITEMS } from './skill-items.data'

const About: React.FC = () => {
	const { isMenuOpen, toggleMenu } = useMobileModal()

	return (
		<section className='py-14'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='max-w-4xl mx-auto'
				>
					<div className='relative text-center mb-16'>
						<div className='absolute left-0 top-1/2 md:top-40 transform -translate-y-1/2 bg-blue-800 w-24 h-56 md:h-96 -z-10' />
						<ShinyText
							text='QA Automation Engineer'
							disabled={false}
							speed={3}
							className='tracking-widest text-3xl md:text-6xl font-bold mb-6 h-[80px]'
						/>
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

					<div className='mt-16 text-center'>
						<h2 className='text-2xl font-bold mb-4 text-gray-100'>About Me</h2>
						<p className='text-red-100 text-sm leading-relaxed'>
							Hi, I'm an experienced Automation QA Engineer with a strong
							passion for delivering high-quality software solutions.
						</p>
						<button
							onClick={toggleMenu}
							className='mt-5 m-auto w-10 h-10 text-white rounded-full flex items-center justify-center transition group'
							aria-label='Expand About Me'
						>
							<ArrowUpFromLine className='w-6 h-6 group-hover:text-blue-400/50 group-hover:shadow-blue-500/10 transition-all' />
						</button>
					</div>
				</motion.div>
			</div>

			{/* Modal */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className='menu-modal fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							exit={{ y: '100%' }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className='backdrop-blur-md border  border-gray-600 text-white w-full max-w-4xl p-6 rounded-t-lg shadow-lg overflow-y-auto  max-md:h-full'
						>
							<div className='relative'>
								<h2 className='text-2xl font-bold mb-4 text-gray-100 text-center mt-5'>
									About Me
								</h2>
								<p className='text-sm leading-relaxed'>
									Hi, I'm an experienced Automation QA Engineer with a strong
									passion for delivering high-quality software solutions. Over
									the years, I've honed my skills in building robust testing
									frameworks and automating complex workflows using tools like
									JavaScript, TypeScript, Java, Selenium, Playwright, and more.
									My expertise spans across industries such as AdTech,
									Healthcare, Finance, and Gambling, giving me a versatile
									perspective on quality assurance and software testing.
									<br />
									Highlights of My Work:
									<br />
									Framework Development: Built custom testing frameworks from
									scratch to streamline automation processes and improve test
									coverage. <br />
									Team Leadership: Guided QA teams, mentored members, and
									conducted code reviews to foster continuous improvement.
									<br />
									CI/CD Expertise: Set up and maintained Jenkins pipelines with
									Docker, ensuring smooth integration and automated test
									execution. <br />
									Cross-Platform Testing: Performed rigorous API, UI, and mobile
									testing for Android, iOS, and web applications using modern
									tools like Appium and Perfecto. <br />
									Customer Collaboration: Bridged the gap between development
									and client teams to align expectations and deliver exceptional
									results.
									<br />
									If you're looking for someone who can build innovative
									solutions, lead teams effectively, and contribute to
									delivering exceptional products, let's connect!
								</p>
								<button
									onClick={toggleMenu}
									className='absolute -top-10 right-1/2 w-8 h-8 text-white rounded-full flex items-center justify-center transition group'
									aria-label='Close Modal'
								>
									<ArrowDownFromLine className='w-6 h-6 group-hover:text-blue-400/50 group-hover:shadow-blue-500/10 transition-all' />
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}

export default About
