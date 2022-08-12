import PropTypes from 'prop-types'

const ProjectCardTech = ({ text }) => {
	return (
		<div
			className={`flex items-center justify-center w-full h-8 rounded-lg font-bold border border-white`}>
			<span>{text}</span>
		</div>
	)
}

ProjectCardTech.propTypes = {
	text: PropTypes.string.isRequired,
}

export default ProjectCardTech
