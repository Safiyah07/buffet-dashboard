/* eslint-disable react/no-unescaped-entities */
import { TbLogout } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const LogOut = () => {
	return (
		<>
			<div className='my-16'>
				<div className='flex flex-col justify-center items-center py-5 shadow-[1px_1px_3px_0px_grey] border-2 border-violet-shade rounded-xl font-black '>
					<TbLogout
						size={80}
						color='#a899dc'
					/>
					<h1 className='pt-4'>Oh no! You're leaving...</h1>
					<p className='pt-2'>Are you sure?</p>
					<br />
					{/* Open the modal using ID.showModal() method */}
					<button
						className='flex items-center px-4 py-2 mb-1 border-2 rounded-lg border-light-purple'
						onClick={() => window.my_modal_1.showModal()}
					>
						Naah, just kidding
					</button>
					<dialog
						id='my_modal_1'
						className='modal'
					>
						<form
							method='dialog'
							className='modal-box'
						>
							<h3 className='text-lg font-bold'>Hello!</h3>
							<p className='py-4'>Explore more options from the sidebar/menu</p>
							<div className='modal-action'>
								{/* if there is a button in form, it will close the modal */}
								<button className='flex items-center px-4 py-2 mb-1 border-2 rounded-lg border-light-purple'>
									Close
								</button>
							</div>
						</form>
					</dialog>
					<Link to='/'>
						<button className='flex items-center px-6 py-2 mb-1 text-white rounded-lg bg-light-purple'>
							Yes, Log me out
						</button>
					</Link>
				</div>
			</div>
		</>
	)
}
