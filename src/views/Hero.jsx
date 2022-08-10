import { Button } from '../components/Button'
import ResponsiveDiv from '../components/ResponsiveDiv'
import GuyVibing from '../assets/images/hero/guy-vibing.webp'
import Resume from '../assets/cv-bryan-martinez.pdf'

const Hero = () => {
	return (
		<section
			id='home'
			className='flex items-center h-screen bg-gradient-to-b from-primary to-background'>
			<ResponsiveDiv>
				<div className=''>
					<span className='font-semibold text-xl'> Hi, I'm </span>{' '}
					<h1 className='text-secondary font-black text-3xl'>
						Bryan Samuel Martínez
					</h1>
					<p className='font-bold text-2xl mb-4'>Fullstack Web Developer</p>
					<div className='w-full flex items-center '>
						<Button linkTo={Resume} text={'My Resumé'} />
					</div>
				</div>
				<div className='flex items-center w-[100%] mt-8 lg:mt-0'>
					<img src={GuyVibing} alt='' />
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default Hero
