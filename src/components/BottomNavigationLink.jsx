const BottomNavigationLink = ({ linkTo, icon }) => {
	return (
		<li className='w-full list-none flex items-center justify-center'>
			<a href={linkTo}>{icon}</a>
		</li>
	)
}

export default BottomNavigationLink
