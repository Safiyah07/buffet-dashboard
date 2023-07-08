import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
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

export const data = {
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

const centerText = {
	id: 'centerText',
	beforeDataSetsDraw(chart, args, pluginOptions) {
		const { ctx, data } = chart

		ctx.save()
		const xCoor = chart.getDatasetMeta(0).data[0].x
		const yCoor = chart.getDatasetMeta(0).data[0].y
		ctx.font = 'bold 30px sans-serif'
		ctx.fillStyle = 'rgba(54, 162, 235, 1'
		ctx.textAlign = 'center'
		ctx.textBaseline = 'middle'
		ctx.fillText(`Value: ${data.datasets[0].data[0]}`, xCoor, yCoor)
		// ctx.fillText('text', xCoor, yCoor)
	},
}

function DoughnutChart() {
	return (
		<Doughnut
			data={data}
			options={options}
			plugins={[centerText]}
		/>
	)
}

export default DoughnutChart
