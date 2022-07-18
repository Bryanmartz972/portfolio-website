import PageLayout from './components/PageLayout'
import Header from './components/Header'
import Hero from './components/Hero'
import BottomNavigation from './components/BottomNavigation'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'

function App() {
	return (
		<>
			<Header />
			<PageLayout>
				<Hero />
				<AboutMe />
				<Certifications />
				<Skills />
				<Projects />
			</PageLayout>
			<BottomNavigation />
		</>
	)
}

export default App
