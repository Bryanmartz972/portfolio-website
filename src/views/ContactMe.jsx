import ResponsiveDiv from '../components/ResponsiveDiv'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { FiSend } from 'react-icons/fi'

const ContactMe = () => {
	return (
		<section
			id='contact-me'
			className='flex flex-col items-center py-8 bg-gradient-to-b text-white from-background to-primary'>
			<h2 className='text-3xl font-bold' data-cy='contactme-title'>
				Contact Me
			</h2>
			<ResponsiveDiv>
				<div className='flex flex-col lg:flex-row lg:justify-between lg:gap-20 w-full'>
					<div className='flex flex-col p-4 mb-8 lg:mb-0 px-8 lg:p-8 flex-1'>
						<div className='flex flex-col mt-8 gap-12 lg:h-full lg:justify-center'>
							<a
								href='https://github.com/thebryanmartinez'
								target='_blank'
								data-cy='contactme-github-link'
								rel='noopener noreferrer'
								className='flex items-center justify-center bg-[#161b22] rounded-xl py-3 sm:py-2 px-4 font-bold hover:text-[#161b22] hover:shadow-white/10 hover:shadow-lg hover:bg-white transition-all'>
								<span className='mr-2'>
									<AiFillGithub size='2rem' />
								</span>
								Visit my Github
							</a>
							<a
								href='https://www.linkedin.com/in/thebryanmartinez/'
								target='_blank'
								rel='noopener noreferrer'
								data-cy='contactme-linkedin-link'
								className='flex items-center justify-center bg-[#0a66c2] rounded-xl py-3 sm:py-2 px-4 font-bold hover:shadow-white/10 hover:shadow-lg hover:bg-white hover:text-[#0a66c2] transition-all'>
								<span className='mr-2'>
									<AiFillLinkedin size='2rem' />
								</span>
								Visit my LinkedIn
							</a>
							<a
								href='mailto:bryanmartz972@gmail.com'
								target='_blank'
								data-cy='contactme-gmail-link'
								rel='noopener noreferrer'
								className='flex items-center justify-center bg-[#eb4336] text-xs sm:text-[16px] rounded-xl py-3 sm:py-2 px-4 font-bold hover:text-[#eb4336] hover:shadow-white/10 hover:shadow-lg hover:bg-white transition-all'>
								<span className=' mr-2'>
									<SiGmail size='24px' />
								</span>
								bryanmartz972@gmail.com
							</a>
						</div>
					</div>
					<div className='flex flex-col p-4 mb-8 lg:mb-0 px-8 lg:p-8 flex-1'>
						<form
							action='https://send.pageclip.co/h6D7DmZLqo3N7UXRwvbeSICeNi1I7dd6/contact-form'
							method='post'
							className='flex flex-col w-full gap-8 mt-8'>
							<div className='input-group'>
								<label className='label'>Your name</label>
								<input
									autoComplete='off'
									name='name'
									id='name'
									data-cy='contactme-name-input'
									className='input'
									type='name'
									maxLength={50}
									required
								/>
							</div>
							<div className='input-group'>
								<label className='label'>Your email</label>
								<input
									autoComplete='off'
									name='email'
									id='email'
									data-cy='contactme-email-input'
									className='input'
									type='email'
									required
									maxLength={50}
								/>
							</div>
							<div className='input-group'>
								<label className='label'>Your message</label>
								<textarea
									autoComplete='off'
									rows='4'
									name='text'
									id='text'
									data-cy='contactme-message-input'
									maxLength={500}
									className='input area'
									type='text'
									required
									minLength={5}
								/>
							</div>
							<button
								type='submit'
								data-cy='contactme-send-button'
								className='flex w-full items-center justify-center mt-4 bg-secondary rounded-xl py-3 sm:py-2 px-4 font-bold hover:shadow-white/10 hover:shadow-lg hover:bg-white hover:text-secondary transition-all'>
								<span className=' inline-flex items-center'>
									<span className='mr-4'>
										<FiSend size='1rem' />
									</span>
									Send
								</span>
							</button>
						</form>
					</div>
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default ContactMe
