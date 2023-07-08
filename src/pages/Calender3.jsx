import { useState } from 'react'
import {
	format,
	eachDayOfInterval,
	endOfMonth,
	getDaysInMonth,
	lastDayOfMonth,
	startOfToday,
	parse,
} from 'date-fns'

function Calender3() {
	// YEAR
	const year = new Date().getFullYear()

	const getMonths = getDaysInMonth(new Date(year, 5))

	const today = startOfToday()
	const [selectedDay, setSelectedDay] = useState(today)
	const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
	// const [monthsInterval, setMonthsInterval] = useState(format())

	// day index
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
	// let days = eachDayOfInterval({
	// 	start: firstDayCurrentMonth,
	// 	end: endOfMonth(firstDayCurrentMonth),
	// })

	const nowDay = new Date(year, 2)
	const firstDateOfMonth = format(nowDay, 'yyyy-MM-01')
	const lastDateOfMonth = format(lastDayOfMonth(nowDay), 'yyyy-MM-dd')
	const daysInterval = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	})

	console.log(firstDateOfMonth)
	console.log(lastDateOfMonth)

	// console.log(days)
	// console.log(getMonths)

	// MONTHS
	const monthsOfYear = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

	return (
		<>
			<div className='grid lg:grid-cols-4'>
				{monthsOfYear.map((months) => (
					<div
						key={months}
						className='mx-4 mt-5 font-bold text-center'
					>
						{months}

						<div className='grid grid-cols-7'>
							{weekDays.map((weekDay, id) => (
								<div
									key={id}
									className='mt-5'
								>
									{weekDay}
								</div>
							))}
							{/* {monthOfJanuary.map((days, id) => (
								<div key={days.toString()}>{days}</div>
							))} */}

							<div>1</div>
							<div>2</div>
							<div>3</div>
							<div>4</div>
							<div>5</div>
							<div>6</div>
							<div>7</div>
							<div>8</div>
							<div>9</div>
							<div>10</div>
							<div>11</div>
							<div>12</div>
							<div>13</div>
							<div>14</div>
							<div>15</div>
							<div>16</div>
							<div>17</div>
							<div>18</div>
							<div>19</div>
							<div>20</div>
							<div>21</div>
							<div>22</div>
							<div>23</div>
							<div>24</div>
							<div>25</div>
							<div>26</div>
							<div>27</div>
							<div>28</div>
							<div>29</div>
							<div>30</div>
							<div>31</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Calender3
