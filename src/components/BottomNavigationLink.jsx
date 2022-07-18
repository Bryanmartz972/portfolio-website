const BottomNavigationLink = ({ linkTo, icon, text }) => {
	return (
		<li className=' w-full list-none flex flex-col text-white items-center '>
			<a
				href={linkTo}
				className='flex items-center justify-center w-full h-full'>
				{icon}
			</a>
			<p className='text-sm font-bold'>{text}</p>
		</li>
	)
}

export default BottomNavigationLink
