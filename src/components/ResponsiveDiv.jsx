const ResponsiveDiv = ({children}) => {
	return (
		<div className='flex w-full items-center flex-col lg:flex-row lg:w-fit px-[10%]'>
			{children}
		</div>
	)
}

export default ResponsiveDiv
