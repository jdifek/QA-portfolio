import { useState } from 'react'
import About from './components/About'
import BgLines from './components/BgLines'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Navigation from './components/Navigation'

function App() {
	const [activeSection, setActiveSection] = useState('about')

	const renderSection = () => {
		switch (activeSection) {
			case 'about':
				return <About />
			case 'experience':
				return <Experience />
			case 'contact':
				return <Contact />
			default:
				return <About />
		}
	}

	return (
		// <div className="bg-black min-h-screen">
		<div className='min-h-screen'>
			<BgLines />
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			{renderSection()}
		</div>
	)
}

export default App
