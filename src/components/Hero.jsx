import Button from './Button'
import BryanPicture from '../assets/images/bryan.png'
import ResponsiveDiv from './ResponsiveDiv'

const Hero = () => {
	return (
		<section
			id='home'
			className='flex items-center h-screen bg-gradient-to-b from-primary to-background '>
			<ResponsiveDiv>
				<div className=''>
					<span className='font-semibold text-xl'> Hi, I'm </span>{' '}
					<h1 className='text-secondary font-black text-3xl'>
						Bryan Samuel Martínez
					</h1>
					<p className='font-bold text-2xl mb-4'>Frontend Web Developer</p>
					<div className='w-full flex items-center '>
						<Button linkTo={''} text={'My Resumé'} />
					</div>
				</div>
				{/* <div className=''>
					<img src={BryanPicture} alt='' />
				</div> */}
			</ResponsiveDiv>
		</section>
	)
}

export default Hero
