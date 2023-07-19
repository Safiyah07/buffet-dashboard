import { useState } from 'react'
import LineChart from '../components/charts/LineChart'
import DoughnutChart from '../components/charts/DoughnutChart'

export const Analytics = () => {
	const [tab, setTab] = useState(1)

	const toggleTab = (id) => {
		return setTab(id)
	}

	return (
		<>
			<div className='w-full'>
				<div className='grid w-full grid-cols-4 lg:my-4 max_md:mb-5 lg:gap-x-12 lg:gap-y-6 max_md:gap-y-4 max_md:gap-x-8 max_md:grid-cols-2'>
					<button
						onClick={() => toggleTab(1)}
						className={`${
							tab === 1
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Daily Sales
					</button>
					<button
						onClick={() => toggleTab(2)}
						className={`${
							tab === 2
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Total Income of the Month
					</button>
					<button
						onClick={() => toggleTab(3)}
						className={`${
							tab === 3
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Top Sellings of the Day
					</button>
					<button
						onClick={() => toggleTab(4)}
						className={`${
							tab === 4
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Income and Expenses
					</button>

					<button
						onClick={() => toggleTab(5)}
						className={`${
							tab === 5
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Currently Not Available
					</button>
					<button
						onClick={() => toggleTab(6)}
						className={`${
							tab === 6
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Promotions
					</button>
					<button
						onClick={() => toggleTab(7)}
						className={`${
							tab === 7
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Total Balance
					</button>
					<button
						onClick={() => toggleTab(8)}
						className={`${
							tab === 8
								? ' bg-light-purple text-white border-light-purple'
								: ' bg-transparent'
						} border border-light-purple rounded-md h-[2.9rem] hover:bg-light-purple hover:text-white hover:border-light-purple`}
					>
						Orders of the Day
					</button>
				</div>

				{/* Tabs data */}
				{/* <AllEmployees tab={tab} /> */}
				<div className='flex w-full'>
					<div className='w-full max_md:w-[96vw] flex lg:justify-around max_md:items-center max_md:flex-col border-2 border-violet-shade shadow-[1px_1px_3px_0px_grey] rounded-xl pt-7 px-7'>
						<div className='lg:w-[33vw] h-auto md:w-[70%] sm:w-full max_md:mb-6'>
							<LineChart />
						</div>

						<div className='lg:h-[27vw] lg:w-40vw sm:w-3/4 max_md:mb-6'>
							<DoughnutChart />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
