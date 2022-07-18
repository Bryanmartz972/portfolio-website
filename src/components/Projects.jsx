import ResponsiveDiv from './ResponsiveDiv'
import ProjectCard from './ProjectCard'

const Projects = () => {
	return (
		<section id='projects' className='flex flex-col items-center py-8'>
			<h2 className='text-3xl font-bold mb-4'>Projects</h2>
			<ResponsiveDiv>
				<div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
					<ProjectCard
						text={['React', 'Redux', 'Css']}
						title='CommentNow'
						linkTo='https://github.com/Bryanmartz972/commentnow-frontend'
						info='Esta es una aplicación móvil elaborada para la clase de Programación Móvil 2. Esta es la primera aplicación que realice con React Native. Este proyecto fue hecho por un equipo de tres personas lideradas por mí.'
					/>
					<ProjectCard
						text={['React Native', 'API']}
						title='Prometheus App'
						linkTo='https://github.com/Bryanmartz972/ProyectoMovil2ReactUsuario'
						info=''
					/>
					<ProjectCard
						text={['React', 'TailwindCSS']}
						title='Portfolio Website'
						linkTo='https://github.com/Bryanmartz972/portfolio-website'
						info=''
					/>
					<ProjectCard
						text={['HTML', 'CSS', 'JavaScript']}
						title='Iglesia San Isidro'
						linkTo='https://github.com/Bryanmartz972/IglesiaSanIsidro_PW1'
						info=''
					/>
					<ProjectCard
						text={['React', 'TailwindCSS']}
						title='Portfolio Website'
						linkTo='https://github.com/Bryanmartz972/commentnow-frontend'
						info=''
					/>

					<ProjectCard
						text={['NodeJS', 'Express', 'MySQL']}
						title='Prometheus API'
						linkTo='https://github.com/Bryanmartz972/ProyectoMovil2'
						info=''
					/>
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default Projects
