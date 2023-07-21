import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				drawOnChartArea: false,
				drawTicks: false,
			},
		},
		y: {
			grid: {
				indexAxis: [0, 50, 100, 150, 200],
				drawTicks: false,
			},
		},
	},
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
}

const customerTime = [
	{ time: '10.00am', busyTime: { food: 30 } },
	{ time: '12.00pm', busyTime: { food: 70 } },
	{ time: '4.00pm', busyTime: { food: 50 } },
	{ time: '6.00pm', busyTime: { food: 90 } },
	{ time: '8.00pm', busyTime: { food: 180 } },
]

const data = {
	datasets: [
		{
			data: customerTime,
			fill: false,
			borderColor: '#f6b768',
			backgroundColor: '#6b58aa',
			tension: 0.4,
			parsing: {
				xAxisKey: 'time',
				yAxisKey: 'busyTime.food',
			},
		},
	],
}

function LineChart() {
	return (
		<>
			<h2 className='text-xl font-bold text-[dimgrey] mt-2 mb-4'>
				Daily Sales
			</h2>
			<Line
				options={options}
				data={data}
			/>
		</>
	)
}

export default LineChart
