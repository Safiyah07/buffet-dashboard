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
	indexAxis: 'y',
	scales: {
		x: {
			grid: {
				drawTicks: false,
			},
		},
		y: {
			grid: {
				drawTicks: false,
			},
		},
	},
	plugins: {
		title: {
			align: 'start',
			display: true,
			text: 'Income and Expenses Statement - Month',
			font: {
				size: 15,
			},
		},
		legend: {
			display: false,
		},
		borderRadius: 30,
		borderWidth: 4,
	},
}

const labels = ['Income', 'Experience']

const data = {
	labels,
	datasets: [
		{
			data: labels.map(() => faker.number.int({ min: 0, max: 600 })),
			// data: UserData.map((data) => data.userLost),
			backgroundColor: ['#6b58aa', '#f6b768'],
			borderRadius: 30,
			borderSkipped: false,
		},
	],
}

function HorizontalBarChartMonth() {
	return (
		<Bar
			options={options}
			data={data}
		/>
	)
}

export default HorizontalBarChartMonth
