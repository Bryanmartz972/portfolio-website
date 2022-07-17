import BryanPicture from '../assets/images/bryan.png'
import BryanPicture2 from '../assets/images/bryan2.png'
import ResponsiveDiv from './ResponsiveDiv'

const AboutMe = () => {
	return (
		<section id='about-me' className='flex flex-col items-center py-8'>
			<h2 className='text-3xl font-bold '>About Me</h2>
			<ResponsiveDiv>
				<div className='flex flex-col items-center lg:flex-row'>
					<div className='pt-16 translate-x-[-3.125rem] lg:translate-x-0 lg:w-full'>
						<img
							src={BryanPicture2}
							alt=''
							className='bg-primary rounded-full border-white border-2 w-44 md:w-56 lg:w-96'
						/>
						<img
							src={BryanPicture}
							alt=''
							className='translate-y-[-5rem] translate-x-[6.25rem] bg-secondary rounded-full border-white border-2 w-44 md:w-56 lg:w-96 '
						/>
					</div>
					<div className='flex flex-col lg:ml-36 text-md md:text-lg lg:text-xl'>
						<p className='mb-8'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Veritatis quae aut non necessitatibus quo, delectus eum dolore
							recusandae. Doloribus tenetur nostrum eos consequuntur quibusdam
							velit officia veniam soluta vel alias?
						</p>
						<h3 className='font-bold text-2xl self-center'>Education</h3>
						<div className='lg:pt-8'>
							<div className='mb-4 lg:mb-8'>
								<h4 className='font-bold lg:text-xl'>
									Delaware American School{' '}
									<span className='text-white font-normal'>
										- Bachelor in Science and Humanities
									</span>
								</h4>
								<p>2005 - 2018</p>
								<p>
									Global score: <span className='font-bold'>94%</span>
								</p>
							</div>
							<div>
								<h4 className=' font-bold lg:text-xl'>
									Universidad Católica de Honduras{' '}
									<span className='font-normal'>
										- Computer Science Engineer{' '}
									</span>
								</h4>
								<p>2018 - 2022</p>
								<p>
									Global score: <span className='  font-bold'>91.44%</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default AboutMe
