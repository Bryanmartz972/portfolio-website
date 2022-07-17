const Button = ({ linkTo, text }) => {
	return (
		<a
			href={linkTo}
			className='flex items-center justify-center bg-primary rounded-xl py-3 sm:py-2 px-4 font-bold hover:shadow-white/10 hover:shadow-lg hover:bg-secondary transition-all'>
			{text}
		</a>
	)
}

export default Button
