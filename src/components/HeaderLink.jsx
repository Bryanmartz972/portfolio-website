import PropTypes from 'prop-types'

const HeaderLink = ({ linkTo, children }) => {
	return (
		<a
			className='py-2 px-6 mx-2 rounded-xl  hover:bg-secondary cursor-pointer hover:transition-colors'
			href={linkTo}>
			{children}
		</a>
	)
}

HeaderLink.propTypes = {
	linkTo: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default HeaderLink
