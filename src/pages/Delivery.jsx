import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
// import Avatar4 from '../assets/Avatar4.png'

function Delivery() {
	return (
		<>
			<div className='flex flex-col'>
				<section className='flex items-center gap-4 pb-4'>
					<div className='border-2 border-violet-shade rounded-xl py-2 w-[38%]'>
						<div className='flex justify-between items-center px-2 pb-4'>
							<div>
								<img
									src={Avatar1}
									alt=''
									className='w-10'
								/>
							</div>
							<div>
								<div className='badge badge-accent py-2 px-3 rounded-xl'>
									Active
								</div>
							</div>
						</div>

						<div className='flex justify-between items-center px-2'>
							<div>
								<p>Name</p>
							</div>
							<div>
								<p>Ryan Patel</p>
							</div>
						</div>

						<div className='flex justify-between items-center px-2'>
							<div>
								<p>Number</p>
							</div>
							<div>
								<p>+374 77 00 00 00</p>
							</div>
						</div>

            <div className='flex justify-between items-center px-2'>
							<div>
								<p>Email</p>
							</div>
							<div>
              <p>ryanpatel@gmail.com</p>
							</div>
						</div>            
					</div>
					<div className='border-2 border-violet-shade rounded-xl py-2 w-[38%]'>
						<div className='flex justify-between items-center px-2 pb-4'>
							<div>
								<img
									src={Avatar2}
									alt=''
									className='w-10'
								/>
							</div>
							<div>
								<div className='badge badge-accent py-2 px-3 rounded-xl'>
									Active
								</div>
							</div>
						</div>

						<div className='flex justify-between items-center px-2'>
							<div>
								<p>Name</p>
							</div>
							<div>
								<p>Ryan Patel</p>
							</div>
						</div>

						<div className='flex justify-between items-center px-2'>
							<div>
								<p>Number</p>
							</div>
							<div>
								<p>+374 77 00 00 00</p>
							</div>
						</div>

            <div className='flex justify-between items-center px-2'>
							<div>
								<p>Email</p>
							</div>
							<div>
              <p>ryanpatel@gmail.com</p>
							</div>
						</div>            
					</div>
					<div className='border-2 border-violet-shade rounded-xl py-2 px-7'>
						<img
							src={Avatar3}
							alt=''
						/>
						<div className='badge badge-error py-2 px-1 rounded'>Cancelled</div>
					</div> */}
					<div className='border-2 border-violet-shade rounded-xl py-2 px-7'></div>
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
