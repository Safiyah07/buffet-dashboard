import React from 'react'

function SettingsTable() {
	return (
		<>
			<div className='flex justify-between w-full'>
				<table className='table'>
					{/* <!-- head --> */}
					<thead>
						<tr>
							<td>Permission</td>
							<td>Preview</td>
							<td>Create</td>
							<td>Edit</td>
							<td>Delete</td>
						</tr>
					</thead>
					<tbody>
						{/* <!-- row 1 --> */}
						<tr>
							<td>Dashboard</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>
						{/* <!-- row 2 --> */}
						<tr>
							<td>Categories</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>
						{/* <!-- row 3 --> */}
						<tr>
							<td>Menu</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>
						{/* <!-- row 4 --> */}
						<tr>
							<td>Orders</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>

						{/* <!-- row 5 --> */}
						<tr>
							<td>Staff</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>

						{/* row 6 */}
						<tr>
							<td>Delivery</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>
						{/* <!-- row 7 --> */}
						<tr>
							<td>Analytics</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>

						{/* <!-- row 8 --> */}
						<tr>
							<td>Role Management</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>

						{/* <!-- row 9 --> */}
						<tr>
							<td>News</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
							<td>
								<input
									type='checkbox'
									className='accent-[mediumpurple] border-light-purple w-10 h-3'
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default SettingsTable
