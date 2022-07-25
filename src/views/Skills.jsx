import ResponsiveDiv from '../components/ResponsiveDiv'
import { FaFontAwesomeFlag } from 'react-icons/fa'
import {
	TbTrophy,
	TbSearch,
	TbUsers,
	TbClock,
	TbUserCheck,
} from 'react-icons/tb'

import { BsPuzzle, BsBarChartLine } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'

import { icons } from '../helpers/iconsImport'

const Skills = () => {
	return (
		<section id='skills' className='flex flex-col items-center py-8'>
			<h2 className='text-3xl font-bold'>Skills</h2>
			<ResponsiveDiv>
				<div className='flex flex-col mt-4 lg:mt-8 lg:flex-row lg:justify-between lg:gap-20 w-full'>
					<div className=' flex flex-col p-4 mb-8 lg:mb-0 px-8 lg:p-8 flex-1 bg-primary shadow-xl rounded-3xl'>
						<h3 className='font-bold text-2xl self-center'>Soft Skills</h3>
						<div className='my-4 pt-4'>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<TbTrophy color='white' />{' '}
								</span>
								Autodidact
							</p>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<TbSearch color='white' />{' '}
								</span>
								Attention to detail
							</p>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<TbUserCheck color='white' />{' '}
								</span>
								Collaborative
							</p>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<TbClock color='white' />{' '}
								</span>
								Punctual
							</p>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<TbUsers color='white' />{' '}
								</span>
								Ease of working in a team
							</p>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<BsBarChartLine color='white' />{' '}
								</span>
								Continuous improvement
							</p>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<BsPuzzle color='white' />{' '}
								</span>
								Adaptability
							</p>
							<p className='flex items-center font-bold'>
								<span className='mr-2'>
									<BiBrain color='white' />{' '}
								</span>
								Willing to learn
							</p>
						</div>
					</div>
					<div className=' flex flex-col flex-1 p-4 px-8 lg:p-8 bg-primary shadow-xl rounded-3xl'>
						<h3 className='font-bold text-2xl self-center'>Languages</h3>
						<div className='flex flex-col justify-center h-full'>
							<div className='pt-4'>
								<p className='flex items-center font-bold'>
									<span className='mr-2'>
										<FaFontAwesomeFlag color='white' />{' '}
									</span>
									Spanish
								</p>
								<p>Native - CEFR Level C2</p>
							</div>
							<div className='my-4 lg:my-8'>
								<p className='flex items-center font-bold'>
									<span className='mr-2'>
										<FaFontAwesomeFlag color='white' />{' '}
									</span>
									English
								</p>
								<p>Advanced - CEFR Level C1</p>
							</div>
						</div>
					</div>
				</div>
			</ResponsiveDiv>
			<ResponsiveDiv>
				<div className='flex flex-col w-full bg-secondary h-fit py-8 mt-8 rounded-3xl px-4'>
					<h3 className='font-bold text-2xl self-center mb-4'>
						Technical Skills
					</h3>
					<div className='flex lg:flex-row gap-5'>
						<div className='flex flex-1 bg-background rounded-xl py-4'>
							<div className='flex flex-row mx-4 gap-6 justify-center lg:gap-14 flex-wrap'>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.React} alt='' width={'50px'} />
									<p className='font-bold'>React</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.Javascript} alt='' width={'50px'} />
									<p className='font-bold'>Javascript</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.HTML} alt='' width={'50px'} />
									<p className='font-bold'>HTML</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.TailwindCSS} alt='' width={'50px'} />
									<p className='font-bold'>TailwindCSS</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.ReactNative} alt='' width={'50px'} />
									<p className='font-bold'>React Native</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.CSS} alt='' width={'50px'} />
									<p className='font-bold'>CSS</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.MongoDB} alt='' width={'50px'} />
									<p className='font-bold'>MongoDB</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.MySQL} alt='' width={'50px'} />
									<p className='font-bold'>MySQL</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.SQL} alt='' width={'50px'} />
									<p className='font-bold'>SQL Server</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.NodeJS} alt='' width={'50px'} />
									<p className='font-bold'>NodeJS</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.VSCode} alt='' width={'50px'} />
									<p className='font-bold'>Visual Studio Code</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.Git} alt='' width={'50px'} />
									<p className='font-bold'>Git</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.Github} alt='' width={'50px'} />
									<p className='font-bold'>Github</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.Figma} alt='' width={'50px'} />
									<p className='font-bold'>Figma</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.Postman} alt='' width={'50px'} />
									<p className='font-bold'>Postman</p>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<img src={icons.AWS} alt='' width={'50px'} />
									<p className='font-bold'>Amazon Web Services</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ResponsiveDiv>
		</section>
	)
}

export default Skills
