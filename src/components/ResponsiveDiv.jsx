import PropTypes from 'prop-types'

const ResponsiveDiv = ({ children }) => {
	return (
		<div className='flex w-full lg:h-full items-center flex-col lg:flex-row px-[10%]'>
			{children}
		</div>
	)
}

ResponsiveDiv.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ResponsiveDiv
