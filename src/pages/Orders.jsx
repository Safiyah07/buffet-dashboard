import { TbMessageCircle2 } from 'react-icons/tb'
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'
import Avatar6 from '../assets/Avatar6.png'
import Avatar7 from '../assets/Avatar7.png'
import Avatar8 from '../assets/Avatar8.png'
// import Avatar10 from '../assets/Avatar10.png'

export const Orders = () => {
	return (
		<>
			<div className='w-full overflow-x-auto'>
				{/* <div className='lg:my-4 max_md:mb-5 h-16 max_md:h-28 grid grid-cols-4 lg:gap-24 max_md:gap-y-4 md:gap-x-8 sm:gap-x-8 max_md:grid-cols-2 w-full max_md:w-[96vw]'> */}
				<div className='lg:my-4 max_md:mb-5 h-16 max_md:h-28 grid grid-cols-4 lg:gap-24 max_md:gap-y-4 md:gap-x-8 sm:gap-x-8 max_md:grid-cols-2 w-full max_md:w-[96vw]'>
					<button className='btn btn-outline border-info hover:bg-transparent hover:text-inherit'>
						Ordered 459
					</button>
					<button className='btn btn-outline border-warning hover:bg-transparent hover:text-inherit'>
						Waiting 68
					</button>
					<button className='btn btn-outline border-success hover:bg-transparent hover:text-inherit'>
						Delivered 321
					</button>
					<button className='btn btn-outline border-error hover:bg-transparent hover:text-inherit'>
						Canceled 70
					</button>
					{/* </div> */}
				</div>

				<div className='flex justify-between w-full'>
					<table className='table'>
						{/* <!-- head --> */}
						<thead>
							<tr>
								<td>ID</td>
								<td>Customer Name</td>
								<td>Payment</td>
								<td>Branch</td>
								<td>Delivery Type</td>
								<td>Status</td>
								<td>Contact</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{/* <!-- row 1 --> */}
							<tr>
								<td>0459</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar1}
													alt='Avatar 1'
												/>
											</div>
										</div>
										<div>
											<div>Hart Hagerty</div>
										</div>
									</div>
								</td>
								<td>Transfer</td>
								<td>Azatutyam 6</td>
								<td>Home Delivery</td>
								<td>
									<div className='px-1 py-2 rounded badge badge-accent'>
										Delivered
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>
							{/* <!-- row 2 --> */}
							<tr>
								<td>0458</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar2}
													alt='Avatar 2'
												/>
											</div>
										</div>
										<div>
											<div>Brice Swyre</div>
										</div>
									</div>
								</td>
								<td>Cash</td>
								<td>Charents 8</td>
								<td>Pick by Yourself</td>
								<td>
									<div className='px-3 py-2 rounded badge badge-warning'>
										Waiting
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>
							{/* <!-- row 3 --> */}
							<tr>
								<td>0457</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar3}
													alt='Avatar 3'
												/>
											</div>
										</div>
										<div>
											<div>Marjy Ferencz</div>
										</div>
									</div>
								</td>
								<td>Transfer</td>
								<td>Azatutyam 8</td>
								<td>Home Delivery</td>
								<td>
									<div className='px-1 py-2 rounded badge badge-accent'>
										Delivered
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>
							{/* <!-- row 4 --> */}
							<tr>
								<td>0456</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar4}
													alt='Avatar 4'
												/>
											</div>
										</div>
										<div>
											<div>Yancy Tear</div>
										</div>
									</div>
								</td>
								<td>Transfer</td>
								<td>Azatutyam 8</td>
								<td>Home Delivery</td>
								<td>
									<div className='px-3 py-2 rounded badge badge-warning'>
										Waiting
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>

							{/* <!-- row 5 --> */}
							<tr>
								<td>0455</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar5}
													alt='Avatar 5'
												/>
											</div>
										</div>
										<div>
											<div>Ivan Martinez</div>
										</div>
									</div>
								</td>
								<td>Cash</td>
								<td>Charents 8</td>
								<td>Pick by Yourself</td>
								<td>
									<div className='px-3 py-2 rounded badge badge-warning'>
										Waiting
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>

							{/* row 6 */}
							<tr>
								<td>0454</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar6}
													alt='Avatar 6'
												/>
											</div>
										</div>
										<div>
											<div>Marjy Ferencz</div>
										</div>
									</div>
								</td>
								<td>Transfer</td>
								<td>Azatutyam 8</td>
								<td>Home Delivery</td>
								<td>
									<div className='px-1 py-2 rounded badge badge-accent'>
										Delivered
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>
							{/* <!-- row 7 --> */}
							<tr>
								<td>0453</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar7}
													alt='Avatar 7'
												/>
											</div>
										</div>
										<div>
											<div>Yancy Tear</div>
										</div>
									</div>
								</td>
								<td>Transfer</td>
								<td>Azatutyam 8</td>
								<td>Home Delivery</td>
								<td>
									<div className='px-3 py-2 rounded badge badge-warning'>
										Waiting
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>

							{/* <!-- row 8 --> */}
							<tr>
								<td>0452</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='w-12 h-12 mask mask-squircle'>
												<img
													src={Avatar8}
													alt='Avatar 8'
												/>
											</div>
										</div>
										<div>
											<div>Ivan Martinez</div>
										</div>
									</div>
								</td>
								<td>Cash</td>
								<td>Charents 8</td>
								<td>Pick by Yourself</td>
								<td>
									<div className='px-1 py-2 rounded badge badge-error'>
										Cancelled
									</div>
								</td>
								<td>
									<TbMessageCircle2
										color={'#6b58aa'}
										size='24px'
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Orders
