import {
	FaChartLine,
	FaRegEnvelope,
	FaUser,
	FaRegFolderOpen,
} from 'react-icons/fa'
import BottomNavigationLink from './BottomNavigationLink'

const BottomNavigation = () => {
	return (
		<nav
			className='z-10 flex justify-around fixed bottom-0 left-0 bg-primary h-[54px] w-full sm:hidden'
			data-cy='mobile-navigation-container'>
			<BottomNavigationLink
				linkTo='#about-me'
				icon={<FaUser size='1em' color='white' />}
				text='About Me'
				dataAttribute='mobile-aboutme-link'
			/>
			<BottomNavigationLink
				linkTo='#skills'
				icon={<FaChartLine size='1em' color='white' />}
				text='Skills'
				dataAttribute='mobile-skills-link'
			/>
			<BottomNavigationLink
				linkTo='#projects'
				icon={<FaRegFolderOpen size='1em' color='white' />}
				text='Projects'
				dataAttribute='mobile-projects-link'
			/>
			<BottomNavigationLink
				linkTo='#contact-me'
				icon={<FaRegEnvelope size='1em' color='white' />}
				text='Contact Me'
				dataAttribute='mobile-contactme-link'
			/>
		</nav>
	)
}

export default BottomNavigation
