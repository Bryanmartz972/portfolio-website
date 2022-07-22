import { Button } from './Button'
import ResponsiveDiv from './ResponsiveDiv'
import GuyVibing from '../assets/images/guy-vibing.png'

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
						<Button linkTo={''} text={'My Resumé'} />
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
