import PropTypes from 'prop-types'

const PageLayout = ({ children }) => {
	return (
		<div className='mb-[54px] sm:mb-0 sm:pt-[62px] w-full bg-background text-white cursor-default'>
			{children}
		</div>
	)
}

PageLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PageLayout
