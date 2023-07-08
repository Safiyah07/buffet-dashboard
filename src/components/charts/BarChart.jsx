import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
				drawOnChartArea: false,
				drawTicks: false,
			},
		},
	},
	plugins: {
		title: {
			align: 'start',
			display: true,
			text: 'Income and Expenses Statement',
			font: {
				size: 20,
			},
		},
		legend: {
			align: 'center',
			layout: {
				padding: {
					left: 50,
				},
			},
			labels: {
				usePointStyle: true,
				pointStyle: 'circle',
				padding: 10,
			},
		},
		borderRadius: 30,
		borderWidth: 4,
	},
}

const labels = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

const data = {
	labels,
	datasets: [
		{
			label: 'Income',
			data: labels.map(() => faker.number.int({ min: 0, max: 14000 })),
			// data: UserData.map((data) => data.userLost),
			backgroundColor: '#f6b768',
			borderRadius: 30,
			borderSkipped: false,
		},
		{
			label: 'Expenses',
			data: labels.map(() => faker.number.int({ min: 0, max: 10000 })),
			// data: UserData.map((data) => data.userGain),
			backgroundColor: '#6b58aa',
			borderRadius: 30,
			borderSkipped: false,
		},
	],
}

function BarChart() {
	return (
		<Bar
			options={options}
			data={data}
		/>
	)
}

export default BarChart
