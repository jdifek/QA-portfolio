import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { useMobileModal } from '../../helpers/hooks/useMobileModal'
import { INavigationProps } from '../../types'
import { NAV_LINKS } from './nav-links.data'

const Navigation: React.FC<INavigationProps> = ({
	activeSection,
	setActiveSection,
}) => {
	const { isMenuOpen, setIsMenuOpen, toggleMenu, handleClickOutside } =
		useMobileModal()

	return (
		<header className='w-full'>
			<nav className='container mx-auto px-6 py-4'>
				<div className='flex justify-between items-center'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className='text-2xl font-bold text-white'
					>
						Portfolio
					</motion.div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex space-x-8'>
						{NAV_LINKS.map(item => (
							<motion.button
								key={item.id}
								onClick={() => setActiveSection(item.id)}
								className={`text-lg transition-colors ${
									activeSection === item.id
										? 'text-white font-semibold hover:text-blue-400'
										: 'text-gray-400/70 hover:text-blue-400'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.label}
							</motion.button>
						))}
					</div>

					{/* Mobile Navigation */}
					<div className='md:hidden'>
						<button
							onClick={toggleMenu}
							className='text-white focus:text-blue-400'
						>
							<Menu size={32} />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<motion.div
						className='menu-modal h-screen fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex justify-center items-center'
						onClick={handleClickOutside}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						{/* Меню */}
						<motion.div
							className='bg-gray-800 w-full overflow-y-auto h-screen flex flex-col items-center gap-6 space-y-6 p-6 relative'
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 100 }}
						>
							<button
								onClick={toggleMenu}
								className='text-white focus:text-blue-400'
							>
								<X size={32} />
							</button>
							{NAV_LINKS.map(item => (
								<div>
									<motion.button
										key={item.id}
										onClick={() => {
											setActiveSection(item.id)
											setIsMenuOpen(false)
										}}
										className={`relative block w-full text-3xl px-4 py-2 rounded-lg transition-colors ${
											activeSection === item.id
												? 'text-white font-semibold focus:text-blue-400'
												: 'text-gray-400/70 focus:text-blue-400'
										}`}
										whileTap={{ scale: 0.98 }}
									>
										{/* Синий прямоугольник рядом с активным элементом */}
										{activeSection === item.id && (
											<div className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-800 w-8 h-11 z-0' />
										)}
										<span className='relative z-10'>{item.label}</span>
									</motion.button>
								</div>
							))}
						</motion.div>
					</motion.div>
				)}
			</nav>
		</header>
	)
}

export default Navigation
