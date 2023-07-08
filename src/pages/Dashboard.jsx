import BarChart from './../components/charts/BarChart'
import HorizontalBarChartDay from '../components/charts/HorizontalBarChartDay'
import HorizontalBarChartMonth from '../components/charts/HorizontalBarChartMonth'
import LineChart from './../components/charts/LineChart'
import DoughnutChart from './../components/charts/DoughnutChart'
import VisaCard from './../assets/VisaCard.png'

function Dashboard() {
	return (
		<>
			<div className='flex'>
				<div className='flex gap-4 flex-wrap pb-5 max_md:w-[100%] max_md:justify-center'>
					<div className='lg:grow-[4] max_md:w-[96vw] max_md:h-auto sm:hidden flex max_md:justify-center shadow-[1px_1px_3px_0px_grey] border-2 border-violet-shade rounded-xl py-2 px-7'>
						<BarChart />
					</div>
					<div className='grow-[4] max_lg:flex max_lg:flex-col max_lg:items-center min_lg:flex min_lg:flex-col min_lg:items-center max_md:h-auto max_md:w-[96vw] border-2 border-violet-shade shadow-[1px_1px_3px_0px_grey] rounded-xl py-2 px-7'>
						<div className='h-[140px] w-auto max_md:flex max_md:justify-center max_md:h-[160px]'>
							<HorizontalBarChartDay />
						</div>
						<br />
						<div className='h-[140px] w-auto max_md:flex max_md:justify-center max_md:h-[160px]'>
							<HorizontalBarChartMonth />
						</div>
					</div>

					<div className='flex w-full'>
						<div className='w-full max_md:w-[96vw] flex lg:justify-between max_md:items-center flex-wrap max_md:flex-col gap-4 border-2 border-violet-shade shadow-[1px_1px_3px_0px_grey] rounded-xl pt-2 px-7'>
							<div className='lg:w-auto h-auto md:w-[70%] sm:w-full'>
								<LineChart />
							</div>
							<div className='lg:h-[240px] md:w-hidden sm:w-3/4 sm:mt-3'>
								<DoughnutChart />
							</div>
							<div className='w-[310px] md:w-[70%] sm:w-full mb-4 mt-6'>
								<img
									src={VisaCard}
									alt='visa-card'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard
