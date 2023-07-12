import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'

export const Messenger = () => {
	// eslint-disable-next-line no-unused-vars
	const [messages, setMessages] = useState([
		{
			name: 'Henry Phillip',
			image: (
				<img
					src={Avatar1}
					className='w-10 h-10'
				/>
			),
			time: '11:34 AM',
			message: 'The spices are on their way',
		},
		{
			name: 'Seline Kim',
			image: (
				<img
					src={Avatar2}
					className='w-10 h-10'
				/>
			),
			time: '10:30 AM',
			message: 'The spices are on their way',
		},
		{
			name: 'Kevin Brown',
			image: (
				<img
					src={Avatar3}
					className='w-10 h-10'
				/>
			),
			time: '9:30 AM',
			message: 'The spices are on their way',
		},
		{
			name: 'Whitney Stevens',
			image: (
				<img
					src={Avatar2}
					className='w-10 h-10'
				/>
			),
			time: '10:30 AM',
			message: 'The spices are on their way',
		},
		{
			name: 'Mathew Pinnock',
			image: (
				<img
					src={Avatar5}
					className='w-10 h-10'
				/>
			),
			time: '10:30 AM',
			message: 'The spices are on their way',
		},
		{
			name: 'Thomas Kim',
			image: (
				<img
					src={Avatar4}
					className='w-10 h-10'
				/>
			),
			time: '10:30 AM',
			message: 'The spices are on their way',
		},
		{
			name: 'Jim Kim',
			image: (
				<img
					src={Avatar1}
					className='w-10 h-10'
				/>
			),
			time: '10:30 AM',
			message: 'The spices are on their way',
		},
	])

	return (
		<>
			<div className='flex gap-5'>
				{/* Contacts */}
				<div className='flex flex-col px-4 py-2 w-[45%] h-[86.6vh] bg-violet-200 rounded-xl sm:text-sm'>
					<div className='rounded'>
						<input
							type='text'
							id='search'
							name='search'
							placeholder='Search'
							className='w-full my-2 input h-9'
						/>
					</div>
					<div>
						<h1 className='flex items-center justify-between mt-3 font-black'>
							Team Messages (1)
							<IoIosArrowDown />
						</h1>
					</div>
					{messages.map((message, id) => (
						<div
							key={id}
							className='flex justify-between my-2'
						>
							<div className='flex gap-2 cursor-pointer sm:text-sm'>
								<div className='flex self-start'>{message.image}</div>
								<div className='flex flex-col'>
									<span className='sm:text-xs'>{message.name}</span>
									<span className='text-sm text-gray-600'>
										{message.message}
									</span>
								</div>
							</div>
							<div className='flex self-start justify-end w-16 text-sm sm:text-xs'>
								{message.time}
							</div>
						</div>
					))}
				</div>
				{/* Messages */}
				<div className='w-full p-4 bg-purple-500 rounded-xl'>
					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									src={Avatar5}
									alt='Avatar'
								/>
							</div>
						</div>
						<div className='chat-header'>
							Kevin Brown
							<time className='text-xs opacity-50'>12:45</time>
						</div>
						<div className='chat-bubble'>Hey, guys! How are sales going?</div>
						<div className='opacity-50 chat-footer'>Delivered</div>
					</div>
					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									src={Avatar2}
									alt='Avatar'
								/>
							</div>
						</div>
						<div className='chat-header'>
							Kevin Brown
							<time className='text-xs opacity-50'>12:45</time>
						</div>
						<div className='chat-bubble'>
							Not bad, but i think we could do better. We need to step up our
							game.
						</div>
						<div className='opacity-50 chat-footer'>Delivered</div>
					</div>
					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									src={Avatar1}
									alt='Avatar'
								/>
							</div>
						</div>
						<div className='chat-header'>
							Kevin Brown
							<time className='text-xs opacity-50'>12:45</time>
						</div>
						<div className='chat-bubble'>
							That's a bummer. Have you tried using a different approach?
						</div>
						<div className='opacity-50 chat-footer'>Delivered</div>
					</div>
					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									src={Avatar4}
									alt='Avatar'
								/>
							</div>
						</div>
						<div className='chat-header'>
							Kevin Brown
							<time className='text-xs opacity-50'>12:45</time>
						</div>
						<div className='bg-light-purple chat-bubble'>
							Yeah, I've been experimenting with different sales pitches and
							email, but nothing seems to work.
						</div>
						<div className='opacity-50 chat-footer'>Delivered</div>
					</div>
				</div>
			</div>
		</>
	)
}
