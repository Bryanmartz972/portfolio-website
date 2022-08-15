import { useState } from 'react'
import { ButtonForm } from '../components/Button'
import ResponsiveDiv from '../components/ResponsiveDiv'
import ProjectCard from '../components/ProjectCard'
import CommentNowFrontend from '../assets/images/projects/commentnow-frontend-project.webp'
import CamiDental from '../assets/images/projects/camidental-project.webp'
import PrometheusBackend from '../assets/images/projects/prometheus-backend-project.webp'
import PrometheusFrontend from '../assets/images/projects/prometheus-frontend-project.webp'
import IglesiaSanIsidro from '../assets/images/projects/iglesia-san-isidro-project.webp'
import PortfolioWebsite from '../assets/images/projects/portfolio-website-project.webp'
import TwitterUIMirroring from '../assets/images/projects/twitter-ui-mirroring-project.webp'

const Projects = () => {
	const [loadMore, setLoadMore] = useState(['hidden', 'block'])

	const handleLoadMore = () => {
		setLoadMore(['block', 'hidden'])
	}

	return (
		<section id='projects' className='flex flex-col items-center py-8'>
			<h2 className='text-3xl font-bold mb-4'>Projects</h2>
			<ResponsiveDiv>
				<div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
					<ProjectCard
						text={['React', 'Redux', 'Css', 'MongoDB']}
						title='CommentNow'
						linkTo='https://github.com/thebryanmartinez/commentnow-frontend'
						info='This is a web app that allows users to post comments and other people liking those posts. It is a React app with a Redux store. It includes a login, signup, and profile page. It includes the functionality of posting and liking other people posts. It is connected to a REST API that was created by a team of developers led by me.'
						image={CommentNowFrontend}
					/>
					<ProjectCard
						text={['React Native', 'API']}
						title='Prometheus App'
						linkTo='https://github.com/thebryanmartinez/ProyectoMovil2ReactUsuario'
						info='This is a mobile application that allows users to buy clothing items and sneakers. It is a React Native application with Expo that fetches to an API developed by a team led by me. It includes a login system, a cart system and search products system.'
						image={PrometheusFrontend}
					/>
					<ProjectCard
						text={['React', 'TailwindCSS']}
						title='Portfolio Website'
						linkTo='https://github.com/thebryanmartinez/portfolio-website'
						info='This is the portfolio website that you are seing right now. It was made for the purpose of conveying information about me in a different way than a resume. It is a React app made with Vite and Tailwind CSS. For all of the icons I used the react-icons npm package. It uses Pageclip for the form to send messages to my email.'
						image={PortfolioWebsite}
					/>
					<ProjectCard
						text={['HTML', 'CSS', 'JavaScript']}
						title='Iglesia San Isidro'
						linkTo='https://github.com/thebryanmartinez/IglesiaSanIsidro_PW1'
						info='This is a static website that was made in a team of developers led by me. It is a website that was made for presenting information about a fictioal church. This was my first website that I ever created, made with pure HTML and CSS.'
						image={IglesiaSanIsidro}
					/>
					<ProjectCard
						text={['React', 'TailwindCSS', 'MaterialUI']}
						title='Twitter UI Mirror'
						linkTo='https://github.com/thebryanmartinez/twitter-ui-mirroring'
						info='This is a React application that recreates the Twitter UI. It is still in progress since it only supports mobile viewport. It was developed and design by eyeing the Twitter UI and then applying the same principles to a React application. I am planning to finish it and include functioanl features like the likes interaction and more viewports.'
						image={TwitterUIMirroring}
					/>

					<ProjectCard
						text={['NodeJS', 'Express', 'MySQL']}
						title='Prometheus API'
						linkTo='https://github.com/thebryanmartinez/ProyectoMovil2'
						info='This is a NodeJS application made with Express and MySQL. This is a REST API that was created for the Prometheus App created with React Native. What this API did is that it fetches data from a MySQL database containing information about clothing products. It includes Tokens for the sign in and validations for the backend.'
						image={PrometheusBackend}
					/>
					<div className={`${loadMore[0]}`}>
						<ProjectCard
							text={['C#', 'AWS', 'SQL Server', 'Python']}
							title='Camidental Dekstop App'
							linkTo='https://drive.google.com/file/d/1vEIlmbFW4EKeNlWsP-nX208dHf_mdKpu/view?usp=sharing'
							info='This is a Dekstop app created for a dental clinic named CamiDental. It was developed by a team of 11 people. It handles the appointments of the patients, the products and inventory that the clinic has. It also handles reports with CrystalReports and the billing of customers. It was connected to the database via AWS and the appointments were also stored in Google Calendar via its API.'
							image={CamiDental}
						/>
					</div>
				</div>
			</ResponsiveDiv>
			<ResponsiveDiv>
				<div className={`${loadMore[1]} mt-8 mx-auto`}>
					<ButtonForm clickEvent={handleLoadMore}>Load more</ButtonForm>
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default Projects
