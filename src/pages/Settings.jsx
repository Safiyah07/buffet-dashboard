import { useState } from 'react'
import SettingsTable from '../components/SettingsTable'
// import Avatar10 from '../assets/Avatar10.png'

export const Settings = () => {
	const [tab, setTab] = useState(1)

	const toggleTab = (id) => {
		return setTab(id)
	}
	return (
		<>
			<div className='w-full sm:overflow-x-auto'>
				{/* <div className='grid w-full h-16 grid-cols-5 lg:my-4 max_md:mb-5 lg:gap-9 max_md:gap-y-4 max_md:gap-x-8 max_md:grid-cols-2 max_md:h-44'> */}
				<div className='lg:my-4 md:mb-3 h-16 grid grid-cols-5 lg:gap-9 max_md:gap-x-4 w-full md:grid-cols-3 md:h-[7.5rem] sm:grid-cols-2 sm:h-36 sm:mb-12 sm:gap-y-4'>
					<button
						onClick={() => toggleTab(1)}
						className={`${
							tab === 1
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Role Management
					</button>
					<button
						onClick={() => toggleTab(2)}
						className={`${
							tab === 2
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Create New Role
					</button>
					<button
						onClick={() => toggleTab(3)}
						className={`${
							tab === 3
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Delete Role
					</button>
					<button
						onClick={() => toggleTab(4)}
						className={`${
							tab === 4
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Position
					</button>
					<button className='btn btn-outline bg-light-purple text-white border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple'>
						Save
					</button>
				</div>

				<SettingsTable />
			</div>
		</>
	)
}

export default Settings
