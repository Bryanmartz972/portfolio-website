import HeaderLink from './HeaderLink'
import BryanLogo from '../assets/images/header/bryan-logo.webp'

const Header = () => {
	return (
		<header className='hidden w-full h-[62px] sm:z-10 sm:flex sm:fixed bg-primary text-white items-center justify-between px-8 font-black'>
			<a href='#home' data-cy='logo-link'>
				<img src={BryanLogo} alt='' className='h-[62px] object-none' />
			</a>
			<nav>
				<ul className='flex'>
					<HeaderLink linkTo='#about-me' dataAttribute='aboutme-link'>
						About
					</HeaderLink>
					<HeaderLink linkTo='#skills' dataAttribute='skills-link'>
						Skills
					</HeaderLink>
					<HeaderLink linkTo='#projects' dataAttribute='projects-link'>
						Projects
					</HeaderLink>
				</ul>
			</nav>
			<div>
				<a
					className='flex bg-secondary p-2 rounded-xl items-center justify-center cursor-pointer hover:text-secondary hover:bg-white transition-all'
					href='#contact-me'
					data-cy='contactme-link'>
					Contact me!
				</a>
			</div>
		</header>
	)
}

export default Header
