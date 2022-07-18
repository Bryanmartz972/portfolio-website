import HeaderLink from './HeaderLink'
import BryanLogo from '../assets/images/bryan-logo.png'

const Header = () => {
	return (
		<header className='hidden w-full h-[62px] sm:z-10 sm:flex sm:fixed bg-primary text-white items-center justify-between px-8 font-black'>
			<a href='#home'>
				<img src={BryanLogo} alt='' className='h-[62px] object-none' />
			</a>
			<nav>
				<ul className='flex'>
					<HeaderLink linkTo={'#about-me'}>About</HeaderLink>
					<HeaderLink linkTo={'#skills'}>Skills</HeaderLink>
					<HeaderLink linkTo={'#projects'}>Projects</HeaderLink>
				</ul>
			</nav>
			<div>
				<a
					className='flex bg-secondary p-2 rounded-xl items-center justify-center cursor-pointer'
					href='#contact-me'>
					Contact me!
				</a>
			</div>
		</header>
	)
}

export default Header
