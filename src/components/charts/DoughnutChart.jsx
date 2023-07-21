import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			align: 'bottom',
			labels: {
				usePointStyle: true,
				pointStyle: 'circle',
				padding: 10,
			},
		},
		title: {
			align: 'bottom',
			display: true,
			text: 'Total Income',
			font: {
				size: 20,
			},
			padding: 10,
		},
		borderRadius: 30,
		borderWidth: 4,
	},
}

const data = {
	labels: ['Drink', 'Food', 'Other'],
	datasets: [
		{
			label: 'Total Income',
			data: [5, 19, 12],
			backgroundColor: ['#2200aa', '#6b58aa', '#f6b768'],
			borderColor: ['transparent'],
			borderWidth: 4,
			borderRadius: 10,
		},
	],
}

function DoughnutChart() {
	return (
		<Doughnut
			data={data}
			options={options}
		/>
	)
}

export default DoughnutChart
