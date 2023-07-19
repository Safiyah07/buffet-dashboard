import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'
import Avatar6 from '../assets/Avatar6.png'
import Avatar9 from '../assets/Avatar8.png'

export const Notifications = () => {
	const notificationItems = [
		{
			message:
				'Henry Phillip just created an account as a driver, Welcome Henry!',
			image: (
				<img
					src={Avatar1}
					className='w-10 h-10'
				/>
			),
			time: '11:34:07 AM',
			date: 'Today',
		},
		{
			message: 'Congrats Seline Kim as the new Sous chef, Welcome to the team!',
			image: (
				<img
					src={Avatar2}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: '11th June',
		},
		{
			message:
				"Pasta has been added to the menu for this week, You're welcome!",
			image: (
				<img
					src={Avatar3}
					className='w-10 h-10'
				/>
			),
			time: '9:30:07 AM',
			date: '11th July',
		},
		{
			message: 'Doughnuts are unavailable for the week and probably the next!',
			image: (
				<img
					src={Avatar9}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: 'Last Month',
		},
		{
			message:
				'Henry Phillip just created an account as a driver, Welcome Henry!',
			image: (
				<img
					src={Avatar3}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: 'Last Month',
		},
		{
			message: "We're happy to announce the comeback of our signature meal!",
			image: (
				<img
					src={Avatar5}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: 'Last Month',
		},
		{
			message:
				'Henry Phillip just created an accountas a driver, Welcome Henry!',
			image: (
				<img
					src={Avatar4}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: '20th May',
		},
		{
			message:
				'Henry Phillip just created an account as a driver, Welcome Henry!',
			image: (
				<img
					src={Avatar5}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: '20th May',
		},
		{
			message:
				'Kristi May just created an account for takeaway, Welcome to the team!',
			image: (
				<img
					src={Avatar6}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: '20th May',
		},
		{
			message:
				"Our specials are back, You requested, we granted. You're welcome!",
			image: (
				<img
					src={Avatar1}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: '20th May',
		},
		{
			message:
				'Maryanne Pinnock just created an account as one of our waiters!',
			image: (
				<img
					src={Avatar9}
					className='w-10 h-10'
				/>
			),
			time: '10:30:07 AM',
			date: '20th May',
		},
	]

	return (
		<>
			<div className='shadow-[1px_1px_3px_0px_grey] border-2 border-violet-shade rounded-xl px-4 py-4 w-full'>
				<div>
					{notificationItems.map((notification, id) => (
						<div
							key={id}
							className='flex items-center justify-between mb-2'
						>
							<div className='flex gap-2 cursor-pointer sm:text-sm'>
								<div className='flex self-start w-12 sm:w-[70px]'>
									{notification.image}
								</div>
								<div className='flex flex-col'>
									<span className='sm:text-xs'>{notification.message}</span>
									<span className='text-xs text-gray-400'>
										{notification.time}
									</span>
								</div>
							</div>
							<div className='flex self-start justify-end w-[95px] text-sm sm:text-xs'>
								{notification.date}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
