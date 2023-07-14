import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { TbBookUpload, TbSettings } from 'react-icons/tb'
import { LuVideo, LuPhoneCall, LuImage } from 'react-icons/lu'
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

	// eslint-disable-next-line no-unused-vars
	const [chatBox, setChatBox] = useState([
		{
			name: 'Henry Phillip',
			image: (
				<img
					src={Avatar5}
					className='w-10 h-10'
				/>
			),
			time: '11:34 AM',
			message: 'Hey, guys! How are sales going?',
			status: 'Delivered',
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
			message:
				'Not bad, but i think we could do better. We need to step up our game.',
			status: 'Delivered',
		},
		{
			name: 'Kevin Brown',
			image: (
				<img
					src={Avatar1}
					className='w-10 h-10'
				/>
			),
			time: '9:30 AM',
			message: 'That is a bummer. Have you tried using a different approach?',
			status: 'Delivered',
		},
		{
			name: 'Whitney Stevens',
			image: (
				<img
					src={Avatar4}
					className='w-10 h-10'
				/>
			),
			time: '10:30 AM',
			message:
				'Yeah, I have been experimenting with different sales pitches and email, but nothing seems to work.',
			status: 'Delivered',
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
					<div className='h-auto overflow-y-auto'>
						{messages.map((message, id) => (
							<div
								key={id}
								className='flex justify-between my-2'
							>
								<div
									className='flex gap-2 cursor-pointer sm:text-sm'
									onClick={console.log(id)}
								>
									<div className='flex self-start'>{message.image}</div>
									<div className='flex flex-col'>
										<span className='sm:text-xs'>{message.name}</span>
										<span className='text-sm text-gray-600'>
											{message.message}
										</span>
									</div>
								</div>
								<div className='flex self-start justify-end text-xs'>
									{message.time}
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Messages */}
				<div className='flex flex-col w-full gap-2'>
					<div className='flex items-center justify-between w-full px-4 py-2 bg-violet-200 rounded-xl'>
						<h1 className='font-black'>Sales Team</h1>
						<div className='flex gap-2'>
							<LuVideo />
							<LuPhoneCall />
							<LuImage />
							<TbBookUpload />
							<TbSettings />
						</div>
						<div className='flex items-center'>
							<img
								src={Avatar1}
								className='w-8 h-8'
								alt=''
							/>
							<img
								src={Avatar2}
								className='w-8 h-8'
								alt=''
							/>
							<img
								src={Avatar3}
								className='w-8 h-8'
								alt=''
							/>
							<p>+5</p>
						</div>
					</div>
					<div className='w-full h-auto p-4 overflow-y-auto bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-300 rounded-xl'>
						{chatBox.map((chat, id) => (
							<div key={id}>
								<div className='chat chat-start'>
									<div className='chat-image avatar'>
										<div className='w-10 rounded-full'>{chat.image}</div>
									</div>
									<div className='chat-header'>
										{chat.name}
										<time className='text-xs opacity-50'>{chat.time}</time>
									</div>
									<div className='chat-bubble'>{chat.message}</div>
									<div className='opacity-50 chat-footer'>{chat.status}</div>
								</div>
							</div>
						))}
						<div className='w-full bg-green-500'>hey</div>
					</div>
				</div>
			</div>
		</>
	)
}
