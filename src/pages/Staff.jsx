import { useState } from 'react'
import AllEmployees from '../components/AllEmployees'
// import Avatar10 from '../assets/Avatar10.png'

function Staff() {
	const [tab, setTab] = useState(1)

	const toggleTab = (id) => {
		return setTab(id)
	}

	return (
		<>
			<div className='overflow-x-auto w-full'>
				<div className='lg:my-4 max_md:mb-5 h-16 grid grid-cols-4 lg:gap-24 max_md:gap-y-4 max_md:gap-x-8 w-full max_md:grid-cols-2 max_md:h-28'>
				{/* <div className='lg:my-4 max_md:mb-5 max_md:fixed max_md:top-22 h-16 grid grid-cols-4 lg:gap-24 max_md:gap-y-4 max_md:gap-x-8 w-full max_md:w-[96.3vw] max_md:grid-cols-2 max_md:h-28'> */}
					<button
						onClick={() => toggleTab(1)}
						className={`${
							tab === 1
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						All Employees 659
					</button>
					<button
						onClick={() => toggleTab(2)}
						className={`${
							tab === 2
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Annual Leave 15
					</button>
					<button
						onClick={() => toggleTab(3)}
						className={`${
							tab === 3
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Bulletin 10
					</button>
					<button
						onClick={() => toggleTab(4)}
						className={`${
							tab === 4
								? 'btn btn-outline bg-light-purple text-white border-light-purple'
								: 'btn btn-outline bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Business Trip 8
					</button>
				</div>

				{/* Tabs data */}
				<AllEmployees tab={tab} />
			</div>
		</>
	)
}

export default Staff
