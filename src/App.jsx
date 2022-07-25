import PageLayout from './components/PageLayout'
import Header from './components/Header'
import Hero from './views/Hero'
import BottomNavigation from './components/BottomNavigation'
import AboutMe from './views/AboutMe'
import Skills from './views/Skills'
import Certifications from './components/Certifications'
import Projects from './views/Projects'
import ContactMe from './views/ContactMe'

function App() {
	return (
		<>
			<Header />
			<PageLayout>
				<Hero />
				<AboutMe />
				<Skills />
				<Projects />
			</PageLayout>
			<BottomNavigation />
			<ContactMe />
		</>
	)
}

export default App
