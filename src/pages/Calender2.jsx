import { useState } from 'react'
import { Calender } from './Calender'
import {
	// add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	// isSameDay,
	getDaysInMonth,
	isSameMonth,
	isToday,
	parse,
	// parseISO,
	startOfToday,
} from 'date-fns'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export const Calender2 = () => {
	const today = startOfToday()
	const [selectedDay, setSelectedDay] = useState(today)
	const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))

	// day index
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
	let days = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	})

	console.log(currentMonth)
	console.log(firstDayCurrentMonth)
	// console.log(days);

	// YEAR
	const year = new Date().getFullYear()

	const getMonths = getDaysInMonth(new Date(year, 6))
	console.log(getMonths)

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

	let colStartClasses = [
		'',
		'col-start-2',
		'col-start-3',
		'col-start-4',
		'col-start-5',
		'col-start-6',
		'col-start-7',
	]

	// console.log(colStartClasses[0])

	// DATE
	const dateTime = Date().toLocaleString()

	return (
		<>
		<Calender />
			<div className='border border-light-purple shadow-[1px_1px_3px_0px_grey] rounded-md md:hidden'>
				<div className='flex mb-4'>
					<p className='font-bold'>{dateTime}</p>
				</div>
				<div className='w-20 px-5 py-3 m-auto text-white rounded-md bg-light-purple'>
					{year}
				</div>

				<div className='mt-2'>
					<div className='grid lg:grid-cols-6'>
						{monthsOfYear.map((month) => (
							<div
								key={month}
								className='m-2 font-bold text-center'
							>
								{month}

								<div className='grid grid-cols-7 mt-3'>
									{weekDays.map((weekDay, id) => (
										<div
											key={id}
											className='m-4'
										>
											{weekDay}
										</div>
									))}
									{days.map((day, dayIdx) => (
										<div
											key={day.toString()}
											className={classNames(
												dayIdx === 0 && colStartClasses[getDay(day)],
												'm-2'
											)}
										>
											<button
												type='button'
												onClick={() => setSelectedDay(day)}
												className={classNames(
													isEqual(day, selectedDay) && 'text-white',
													!isEqual(day, selectedDay) &&
														isToday(day) &&
														'text-orange',
													!isEqual(day, selectedDay) &&
														!isToday(day) &&
														isSameMonth(day, firstDayCurrentMonth) &&
														'text-[dimgrey], font-bold',
													!isEqual(day, selectedDay) &&
														!isToday(day) &&
														!isSameMonth(day, firstDayCurrentMonth) &&
														'text-gray-400',
													isEqual(day, selectedDay) &&
														isToday(day) &&
														'bg-orange',
													isEqual(day, selectedDay) &&
														!isToday(day) &&
														'bg-orange',
													!isEqual(day, selectedDay) &&
														'hover:bg-orange hover:text-white',
													(isEqual(day, selectedDay) || isToday(day)) &&
														'font-semibold',
													'mx-auto flex h-6 w-6 items-center justify-center rounded'
												)}
											>
												<time dateTime={format(day, 'yyyy-MM-dd')}>
													{format(day, 'd')}
												</time>
											</button>

											{/* <div className='w-1 h-1 mx-auto mt-1'>
										{meetings.some((meeting) =>
											isSameDay(parseISO(meeting.startDatetime), day)
										) && (
											<div className='w-1 h-1 rounded-full bg-orange'></div>
										)}
										</div> */}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
