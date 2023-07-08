import { TbPlus } from 'react-icons/tb'
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
// import Avatar4 from '../assets/Avatar4.png'

function Delivery() {
	return (
		<>
			<div className='flex flex-col'>
				<section className='flex items-center gap-4 pb-4'>
					<div className='border-2 border-violet-shade rounded-xl p-2 w-[38%]'>
						<div className='flex items-center justify-between px-2 pb-4'>
							<img
								src={Avatar1}
								alt='Avatar 1'
								className='w-10'
							/>

							<div className='px-3 py-2 badge badge-accent rounded-xl'>
								Active
							</div>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Name</p>
							<p>Ryan Patel</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Number</p>
							<p>+374 77 00 00 00</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Email</p>
							<p>ryanpatel@gmail.com</p>
						</div>

						<div className='flex items-center justify-between px-2 my-1 text-white rounded bg-light-purple'>
							<p>Finished Orders</p>
							<p>8</p>
						</div>
						<div className='flex items-center justify-between px-2 border rounded border-violet-shade'>
							<p>Attached Orders</p>
							<p>13</p>
						</div>
					</div>
					<div className='border-2 border-violet-shade rounded-xl p-2 w-[38%]'>
						<div className='flex items-center justify-between px-2 pb-4'>
							<img
								src={Avatar2}
								alt='Avatar 2'
								className='w-10'
							/>

							<div className='px-3 py-2 badge badge-accent rounded-xl'>
								Active
							</div>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Name</p>
							<p>Ryan Patel</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Number</p>
							<p>+374 77 00 00 00</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Email</p>
							<p>ryanpatel@gmail.com</p>
						</div>
						
						<div className='flex items-center justify-between px-2 my-1 text-white rounded bg-light-purple'>
							<p>Finished Orders</p>
							<p>10</p>
						</div>
						<div className='flex items-center justify-between px-2 border rounded border-violet-shade'>
							<p>Attached Orders</p>
							<p>7</p>
						</div>
					</div>
					<div className='border-2 border-violet-shade rounded-xl p-2 w-[38%]'>
						<div className='flex items-center justify-between px-2 pb-4'>
							<img
								src={Avatar3}
								alt='Avatar 3'
								className='w-10'
							/>

							<div className='px-3 py-2 badge badge-error rounded-xl'>
								Cancelled
							</div>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Name</p>
							<p>Ryan Patel</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Number</p>
							<p>+374 77 00 00 00</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Email</p>
							<p>ryanpatel@gmail.com</p>
						</div>

						<div className='flex items-center justify-between px-2 my-1 text-white rounded bg-light-purple'>
							<p>Finished Orders</p>
							<p>8</p>
						</div>
						<div className='flex items-center justify-between px-2 border rounded border-violet-shade'>
							<p>Attached Orders</p>
							<p>13</p>
						</div>
					</div>
					<div className='border-2 border-violet-shade rounded-xl py-2 w-[38%] h-[12.8rem] flex items-center justify-center cursor-pointer'>
						<TbPlus className='mr-2 text-white w-7 h-7 rounded-2xl bg-light-purple' />
						<p className='text-light-purple'>Add new driver</p>
					</div>
				</section>
				<div className='flex gap-4 flex-wrap pb-5 max_md:w-[100%] max_md:justify-center'>
					<div className='lg:grow-[4] max_md:w-[96vw] max_md:h-auto sm:hidden flex max_md:justify-center shadow-[1px_1px_3px_0px_grey] border-2 border-violet-shade rounded-xl py-2 px-7'>
						<h1>Map</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default Delivery
