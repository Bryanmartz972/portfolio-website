import BryanOneAvif from '../assets/images/bryan-aboutme-one.avif'
import BryanOneWebp from '../assets/images/bryan-aboutme-one.webp'
import BryanOnePng from '../assets/images/bryan-aboutme-one.png'
import BryanTwoAvif from '../assets/images/bryan-aboutme-two.avif'
import BryanTwoWebp from '../assets/images/bryan-aboutme-two.webp'
import BryanTwoPng from '../assets/images/bryan-aboutme-two.png'
import ResponsiveDiv from '../components/ResponsiveDiv'

const AboutMe = () => {
	return (
		<section id='about-me' className='flex flex-col items-center py-8'>
			<div className='  justify-self-center place-self-center self-center lg:mb-8'>
				<h2 className='text-3xl font-bold'>About Me</h2>
			</div>
			<ResponsiveDiv>
				<div className='flex flex-col items-center lg:flex-row'>
					<div className='pt-16 translate-x-[-3.125rem] lg:translate-x-0 lg:w-full'>
						<picture>
							<source type='image/avif' srcSet={BryanTwoAvif} />
							<source type='image/webp' srcSet={BryanTwoWebp} />
							<img
								src={BryanTwoPng}
								alt=''
								loading='lazy'
								className='bg-primary rounded-full border-white border-2 w-44 md:w-56 lg:w-96'
							/>
						</picture>
						<picture>
							<source type='image.avif' srcSet={BryanOneAvif} />
							<source type='image.webp' srcSet={BryanOneWebp} />
							<img
								src={BryanOnePng}
								alt=''
								loading='lazy'
								className='translate-y-[-5rem] translate-x-[6.25rem] bg-secondary rounded-full border-white border-2 w-44 md:w-56 lg:w-96'
							/>
						</picture>
					</div>
					<div className='flex flex-col lg:ml-36 text-md md:text-lg lg:text-xl'>
						<p className='mb-8'>
							Hello, my name is Bryan Martínez and currently I'm a senior
							student in Computer Science at Universidad Catolica de Honduras.
							From the beginning of my university career I really enjoy
							programming and developing solutions and answers to problems with
							the use of tehcnology and programming languages. <br />
							<br />
							Web development is what I do the most, I am a React.js developer
							eager to learn more about the ecosystem.
							<br />
							I'm excited to work in a company that develops software and also
							excited to work with a team to develop solutions to people. <br />{' '}
							I'm always looking for new ways to improve my skills and knowledge
							so I take many courses, tutorials and documentation for improving
							my knowledge. You can see my certificates in my{' '}
							<a
								href='#contact-me'
								className='text-secondary underline font-bold'>
								LinkedIn
							</a>{' '}
							and my projects in my{' '}
							<a
								href='#contact-me'
								className='text-secondary underline font-bold'>
								Github
							</a>{' '}
							profile.
						</p>
						<h3 className='font-bold text-2xl self-center'>Education</h3>
						<div className='lg:pt-8'>
							<div className='mb-4 lg:mb-8'>
								<h4 className='font-bold lg:text-xl'>
									Delaware American School{' '}
									<span className='text-white font-normal'>
										- Diploma in Science and Humanities
									</span>
								</h4>
								<p>2018</p>
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
									Global score: <span className='font-bold'>91.44%</span>
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
