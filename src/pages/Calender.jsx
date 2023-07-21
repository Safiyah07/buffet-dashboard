import { useState } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	getYear,
	// isSameDay,
	isSameMonth,
	isToday,
	parse,
	// parseISO,
	startOfToday,
} from 'date-fns'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export const Calender = () => {
	let today = startOfToday()
	const [selectedDay, setSelectedDay] = useState(today)
	const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

	let days = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	})

	function previousMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
	}

	function nextMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
	}

	const year = getYear(new Date())
	const dateTime = Date().toLocaleString()

	return (
		<>
			<div className='border border-light-purple shadow-[1px_1px_3px_0px_grey] rounded-xl px-5 py-7 md:text-sm sm:text-xs'>
				<div className='flex mb-4'>
					<p className='font-bold'>{dateTime}</p>
				</div>
				<div className='flex justify-center w-20 px-5 py-3 m-auto text-white rounded-md bg-light-purple'>
					{year}
				</div>
				<div className='py-5'>
					<div className='max-w-4xl mx-auto sm:px-7 md:max-w-4xl md:px-6 sm:max-w-4xl'>
						<div className=''>
							<div className='md:pr-14'>
								<div className='flex items-center lg:px-10'>
									<h2 className='flex-auto font-semibold text-gray-900'>
										{format(firstDayCurrentMonth, 'MMMM yyyy')}
									</h2>
									<button
										type='button'
										onClick={previousMonth}
										className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
									>
										<span className='sr-only'>Previous month</span>
										<TbChevronLeft
											className='w-5 h-5'
											aria-hidden='true'
										/>
									</button>
									<button
										onClick={nextMonth}
										type='button'
										className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
									>
										<span className='sr-only'>Next month</span>
										<TbChevronRight
											className='w-5 h-5'
											aria-hidden='true'
										/>
									</button>
								</div>
								<div className='grid grid-cols-7 mt-10 sm:text-xs md:text-xs leading-6 text-center text-[dimgrey] font-bold'>
									<div>Sun</div>
									<div>Mon</div>
									<div>Tue</div>
									<div>Wed</div>
									<div>Thu</div>
									<div>Fri</div>
									<div>Sat</div>
								</div>
								<div className='grid grid-cols-7 mt-2 md:text-sm sm:text-sm'>
									{days.map((day, dayIdx) => (
										<div
											key={day.toString()}
											className={classNames(
												dayIdx === 0 && colStartClasses[getDay(day)],
												'py-1.5'
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
													'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
												)}
											>
												<time dateTime={format(day, 'yyyy-MM-dd')}>
													{format(day, 'd')}
												</time>
											</button>
										</div>
									))}
								</div>
							</div>
							{/* <section className='mt-12 md:mt-0 md:pl-14'>	
						<ol className='mt-4 space-y-1 text-sm leading-6 text-gray-500'>
							{selectedDayMeetings.length > 0 ? (
								selectedDayMeetings.map((meeting) => (
									<Meeting
										meeting={meeting}
										key={meeting.id}
									/>
								))
							) : (
								<p>No meetings for today.</p>
							)}
						</ol>
					</section> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

let colStartClasses = [
	'',
	'col-start-2',
	'col-start-3',
	'col-start-4',
	'col-start-5',
	'col-start-6',
	'col-start-7',
]
