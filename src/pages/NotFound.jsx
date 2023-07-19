import { Link } from 'react-router-dom'
import { TbError404, TbArrowBigRightLines } from 'react-icons/tb'

export const NotFound = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-full text-lg capitalize text-light-purple'>
					<TbError404 size={240} className='text-light-purple' />
				<div className='flex flex-col items-center gap-2'>
					<h1>Page not found</h1>
					<h1>There is nothing here</h1>
					
					<Link to='/' className='flex items-center gap-2 p-3 text-white rounded-xl bg-light-purple'>
						<button className='capitalize'>Go back to dashboard!</button>
						<TbArrowBigRightLines size={25} />
					</Link>
				</div>
			</div>
		</>
	)
}
