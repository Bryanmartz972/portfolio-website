import { FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Button = ({ linkTo, text }) => {
	return (
		<a
			target='_blank'
			rel='noopener noreferrer'
			href={linkTo}
			className='flex items-center justify-center bg-primary rounded-xl py-3 sm:py-2 px-4 font-bold hover:shadow-white/10 hover:shadow-lg hover:bg-secondary transition-all hover:cursor-pointer'>
			{text}
		</a>
	)
}

const ButtonForm = ({ clickEvent, children }) => {
	return (
		<button
			onClick={clickEvent}
			className='flex items-center justify-center bg-primary rounded-xl py-3 sm:py-2 px-4 font-bold hover:shadow-white/10 hover:shadow-lg hover:bg-secondary transition-all hover:cursor-pointer'>
			{children}
		</button>
	)
}

const GithubButton = ({ linkTo }) => {
	return (
		<a
			href={linkTo}
			rel='noopener noreferrer'
			target='_blank'
			className='flex cursor-pointer items-center justify-center bg-[#161b22] rounded-xl py-3 sm:py-2 px-4 font-bold hover:shadow-white/10 hover:shadow-lg hover:bg-white hover:text-black transition-all hover:cursor-pointer'>
			<FaGithub size='1rem' /> <span className='ml-2'>Github</span>
		</a>
	)
}

Button.propTypes = {
	linkTo: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

GithubButton.propTypes = {
	linkTo: PropTypes.string.isRequired,
}

ButtonForm.propTypes = {
	clickEvent: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
}

export { Button, GithubButton, ButtonForm }
