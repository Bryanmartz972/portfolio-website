import ResponsiveDiv from './ResponsiveDiv'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const ContactMe = () => {
	return (
		<section
			id='contact-me'
			className='flex flex-col items-center py-8 bg-gradient-to-b text-white from-background to-primary'>
			<h2 className='text-3xl font-bold'>Contact Me</h2>
			<ResponsiveDiv>
				<div className='flex flex-col mt-4 lg:mt-8 lg:flex-row lg:justify-between lg:gap-20 w-full'>
					<div className='flex flex-col p-4 mb-8 lg:mb-0 px-8 lg:p-8 flex-1'>
						<h3 className='font-bold text-2xl self-center'>My socials</h3>
						<div className='flex flex-col mt-8 gap-12'>
							<a
								href='https://github.com/Bryanmartz972'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-center bg-[#161b22] rounded-xl py-3 sm:py-2 px-4 font-bold hover:text-[#161b22] hover:shadow-white/10 hover:shadow-lg hover:bg-white transition-all'>
								<span className='mr-2'>
									<AiFillGithub size='2rem' />
								</span>
								Visit my Github
							</a>
							<a
								href='https://www.linkedin.com/in/bryanmartinez27/'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-center bg-[#0a66c2] rounded-xl py-3 sm:py-2 px-4 font-bold hover:shadow-white/10 hover:shadow-lg hover:bg-white hover:text-[#0a66c2] transition-all'>
								<span className='mr-2'>
									<AiFillLinkedin size='2rem' />
								</span>
								Visit my LinkedIn
							</a>
							<a
								href='mailto:bryanmartz972@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-center bg-[#eb4336] rounded-xl py-3 sm:py-2 px-4 font-bold hover:text-[#eb4336] hover:shadow-white/10 hover:shadow-lg hover:bg-white transition-all'>
								<span className='mr-2'>
									<SiGmail size='24px' />
								</span>
								bryanmartz972@gmail.com
							</a>
						</div>
					</div>
					<div className='flex flex-col p-4 mb-8 lg:mb-0 px-8 lg:p-8 flex-1'>
						<h3 className='font-bold text-2xl self-center'>Send me an email</h3>
						<form
							action='https://send.pageclip.co/h6D7DmZLqo3N7UXRwvbeSICeNi1I7dd6/contact-form'
							method='post'>
							<input type='text' name='name' placeholder='name' />
							<input type='email' name='email' placeholder='email' />
							<button type='submit' className=''>
								<span>Send</span>
							</button>
						</form>
					</div>
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default ContactMe
