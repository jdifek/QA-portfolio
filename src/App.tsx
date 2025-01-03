import { useState } from 'react'
import About from './components/About'
import BgLines from './components/BgLines'
import Contact from './components/Contact'
import Experience from './components/Experience'
import IntroScreen from './components/IntroScreen'
import Navigation from './components/Navigation'

function App() {
	const [activeSection, setActiveSection] = useState('about')
	const [showIntro, setShowIntro] = useState(true)

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
		<div>
			{showIntro ? (
				<IntroScreen onFinish={() => setShowIntro(false)} />
			) : (
				<>
					<BgLines />
					<Navigation
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
					{renderSection()}
				</>
			)}
		</div>
	)
}

export default App
