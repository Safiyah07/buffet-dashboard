import { TbMessageCircle2 } from 'react-icons/tb'
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'
import Avatar6 from '../assets/Avatar6.png'
import Avatar7 from '../assets/Avatar7.png'
import Avatar8 from '../assets/Avatar8.png'

function AllEmployees({ tab }) {
	return (
		<>
			{/* <div className={`${tab === 1 ? 'block' : 'hidden'}`}> */}
			<div>
				<div className='flex justify-between w-full'>
					<table className='table'>
						{/* <!-- head --> */}
						<thead>
							<tr>
								<td>Profile</td>
								<td>Name</td>
								<td>ID No</td>
								<td>Branch</td>
								<td>Role</td>
								<td>Status</td>
								<td>Contact</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{/* <!-- row 1 --> */}
							<tr>
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar1}
												alt='Avatar 1'
											/>
										</div>
									</div>
								</td>
								<td>Hart Hagerty</td>
								<td>K546</td>
								<td>Azatutyam 6</td>
								<td>Restaurant Manager</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-error badge-xs'></div>
										<span className='ml-2'>Off</span>
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
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar2}
												alt='Avatar 2'
											/>
										</div>
									</div>
								</td>
								<td>Brice Swyre</td>
								<td>K545</td>
								<td>Charents 8</td>
								<td>Chef de Cuisine</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-success badge-xs'></div>
										<span className='ml-2'>In</span>
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
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar3}
												alt='Avatar 3'
											/>
										</div>
									</div>
								</td>
								<td>Marjy Ferencz</td>
								<td>K544</td>
								<td>Azatutyam 8</td>
								<td>Sous Chef</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-error badge-xs'></div>
										<span className='ml-2'>Off</span>
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
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar4}
												alt='Avatar 4'
											/>
										</div>
									</div>
								</td>
								<td>Yancy Tear</td>
								<td>K543</td>
								<td>Azatutyam 8</td>
								<td>Baker</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-success badge-xs'></div>
										<span className='ml-2'>In</span>
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
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar5}
												alt='Avatar 5'
											/>
										</div>
									</div>
								</td>
								<td>Ivan Martinez</td>
								<td>K542</td>
								<td>Charents 8</td>
								<td>Server</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-success badge-xs'></div>
										<span className='ml-2'>In</span>
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
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar6}
												alt='Avatar 6'
											/>
										</div>
									</div>
								</td>
								<td>Marjy Ferencz</td>
								<td>K541</td>
								<td>Azatutyam 8</td>
								<td>Server</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-success badge-xs'></div>
										<span className='ml-2'>In</span>
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
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar7}
												alt='Avatar 7'
											/>
										</div>
									</div>
								</td>
								<td>Yancy Tear</td>
								<td>K540</td>
								<td>Azatutyam 8</td>
								<td>Barista</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-success badge-xs'></div>
										<span className='ml-2'>In</span>
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
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={Avatar8}
												alt='Avatar 8'
											/>
										</div>
									</div>
								</td>
								<td>Ivan Martinez</td>
								<td>K539</td>
								<td>Charents 8</td>
								<td>Server</td>
								<td>
									<div className='flex items-center'>
										<div className='badge badge-success badge-xs'></div>
										<span className='ml-2'>In</span>
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

export default AllEmployees
