import {
	FaChartLine,
	FaRegEnvelope,
	FaUser,
	FaRegFolderOpen,
} from 'react-icons/fa'
import BottomNavigationLink from './BottomNavigationLink'

const BottomNavigation = () => {
	return (
		<nav className='z-10 flex justify-around fixed bottom-0 left-0 bg-primary h-[54px] w-full sm:hidden'>
			<BottomNavigationLink
				linkTo={'#about-me'}
				icon={<FaUser size='2em' color='white' />}
			/>
			<BottomNavigationLink
				linkTo={'#skills'}
				icon={<FaChartLine size='2em' color='white' />}
			/>
			<BottomNavigationLink
				linkTo={'#projects'}
				icon={<FaRegFolderOpen size='2em' color='white' />}
			/>
			<BottomNavigationLink
				linkTo={'#contact-me'}
				icon={<FaRegEnvelope size='2em' color='white' />}
			/>
		</nav>
	)
}

export default BottomNavigation
