import { useState, useContext } from 'react'
import {
	FaMicrophone,
	FaAngleDown,
	FaUserFriends,
	FaRegStar,
	FaRegBell,
} from 'react-icons/fa'
import {
	TbBookUpload,
	TbVideo,
	TbSettings,
	TbMessageSearch,
} from 'react-icons/tb'
import { LuPhoneCall, LuImage } from 'react-icons/lu'
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'
import ThemeContext from '../context/ThemeContext'

export const Messenger = () => {
	const { theme } = useContext(ThemeContext)
	const [chatSelected, setChatSelected] = useState(1)

	const [tab, setTab] = useState(1)

	const toggleTab = (id) => {
		return setTab(id)
	}
	// eslint-disable-next-line no-unused-vars
	const [messages, setMessages] = useState([
		{
			id: 1,
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
			id: 2,
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
			id: 3,
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
			id: 4,
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
			id: 5,
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
			id: 6,
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
			id: 7,
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
			<div className='flex gap- h-[87.6vh] text-black md:hidden sm:hidden'>
				{/* Contacts for large screen */}
				<div className='flex flex-col w-[42%] bg-violet-200 rounded-tl-xl rounded-b-xl sm:text-sm'>
					<div className='px-3 py-2'>
						<div className='flex items-center justify-between rounded'>
							<input
								type='text'
								name='search'
								placeholder='Search'
								className='w-full my-2 input h-9'
							/>
						</div>
						<div>
							<h1 className='flex items-center justify-between mt-3 font-black'>
								Team Messages (1)
								<FaAngleDown />
							</h1>
						</div>
					</div>
					<div className='h-auto overflow-y-auto'>
						{messages.map((message) => (
							<div
								key={message.id}
								className={`${
									chatSelected === message.id && 'bg-white'
								} flex justify-between py-2 px-3`}
								onClick={() => setChatSelected(message.id)}
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
								<div className='flex self-start justify-end text-xs'>
									{message.time}
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Messages */}
				<div className='flex flex-col w-full gap-2 '>
					<div className='flex justify-end w-full gap-1 px-4 py-3 bg-violet-200 rounded-br-xl'>
						<TbMessageSearch />
						<FaUserFriends />
						<FaRegStar />
						<FaRegBell />
						<TbSettings />
					</div>
					<div className='ml-5'>
						<div className='flex items-center justify-between w-full px-4 py-2 mb-2 bg-violet-200 rounded-xl'>
							<h1 className='font-black'>Sales Team</h1>
							<div className='flex gap-2'>
								<TbVideo />
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
						<div className='flex flex-col h-[72.4vh] justify-between w-full p-4 overflow-y-auto text-white bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-300 rounded-xl'>
							<div>
								{chatBox.map((chat, id) => (
									<div key={id}>
										<div className='mb-2 chat chat-start'>
											<div className='chat-image avatar'>
												<div className='w-10 rounded-full'>{chat.image}</div>
											</div>
											<div className='chat-header'>
												{chat.name}
												<time className='text-xs opacity-50'> {chat.time}</time>
											</div>
											<div className='text-white chat-bubble bg-violet-200'>
												{chat.message}
											</div>
										</div>
									</div>
								))}
							</div>
							<div className='px-3 py-2 rounded-xl bg-gradient-to-r from-violet-400 to-violet-400'>
								<div className='flex items-center justify-between w-full'>
									<div className='flex items-center gap-2 w-[80%]'>
										<img
											src={Avatar1}
											className='w-8'
											alt=''
										/>
										<input
											type='text'
											name='text'
											id='text'
											placeholder='Say Something'
											className='w-full text-white border-none outline-none bg-violet-400 placeholder:text-white'
										/>
									</div>
									<div className='flex items-center gap-2'>
										<LuImage />
										<FaMicrophone />
										<button>Send</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Contacts for smaller screen */}
			<div className='text-black lg:hidden md:block sm:block'>
				<div className='flex items-center px-4 py-3 mb-3 bg-violet-200 rounded-xl'>
					<h1 className='font-bold'>Messenger</h1>
					<div className='flex justify-end w-full gap-1'>
						<TbMessageSearch />
						<FaUserFriends />
						<FaRegStar />
						<FaRegBell />
						<TbSettings />
					</div>
				</div>
				<div className='flex justify-between mb-3'>
					<button
						onClick={() => toggleTab(1)}
						className={`${
							tab === 1 && 'text-violet-400'
						} btn bg-transparent border-0 border-b-2 border-b-violet-400 
						`}
					>
						Messages
					</button>

					<button
						onClick={() => toggleTab(2)}
						className={`${
							tab === 2 && 'text-violet-400'
						} btn border-0 border-b-2 bg-transparent border-b-violet-400
						`}
					>
						Chats
					</button>

					<button
						onClick={() => toggleTab(3)}
						className={`${
							tab === 3 && ' text-violet-400'
						} btn border-0 border-b-2 bg-transparent border-b-violet-400`}
					>
						Calls
					</button>
				</div>
				<div
					className={`${
						tab === 1 ? 'block' : 'hidden'
					} h-auto overflow-y-auto `}
				>
					{messages.map((message, id) => (
						<div
							key={message.id}
							className={`${
								theme === 'dark' && 'text-white'
							} flex justify-between my-2`}
							onClick={() => setChatSelected(id)}
						>
							<div className='flex gap-2 cursor-pointer sm:text-sm'>
								<div className='flex self-start'>{message.image}</div>
								<div className='flex flex-col'>
									<span className='sm:text-xs'>{message.name}</span>
									<span
										className={`${
											theme === 'dark' && 'text-gray-300'
										} text-sm text-gray-600 `}
									>
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
				<div
					className={`${
						tab === 2 ? 'block' : 'hidden'
					} flex flex-col w-full gap-2`}
				>
					<div className=''>
						<div className='flex items-center justify-between w-full px-4 py-2 mb-2 bg-violet-200 rounded-xl'>
							<h1 className='font-black'>Sales Team</h1>
							<div className='flex gap-2'>
								<TbVideo />
								<LuPhoneCall />
								<LuImage className='sm:hidden' />
								<TbBookUpload className='sm:hidden' />
								<TbSettings />
							</div>
							<div className='flex items-center sm:hidden'>
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
						<div className='flex flex-col h-[72.4vh] justify-between w-full p-4 overflow-y-auto text-white bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-300 rounded-xl'>
							<div>
								{chatBox.map((chat, id) => (
									<div key={id}>
										<div className='mb-2 chat chat-start'>
											<div className='chat-image avatar'>
												<div className='w-10 rounded-full'>{chat.image}</div>
											</div>
											<div className='chat-header'>
												{chat.name}
												<time className='text-xs opacity-50'> {chat.time}</time>
											</div>
											<div className='text-white chat-bubble bg-violet-200'>
												{chat.message}
											</div>
										</div>
									</div>
								))}
							</div>
							<div className='w-full px-3 py-2 rounded-xl bg-gradient-to-r from-violet-400 to-violet-400'>
								<div className='flex items-center w-full'>
									<div className='flex items-center gap-2 w-[80%]'>
										<span className='flex items-center pl-2'>
											<img
												src={Avatar1}
												className='w-8'
												alt=''
											/>
										</span>
										<input
											type='text'
											name='text'
											placeholder='Say Something'
											className='w-full text-white border-none outline-none bg-violet-400 placeholder:text-white'
										/>
									</div>
									<div className='flex items-center gap-2 sm:relative md:absolute md:right-12'>
										<button>
											<LuImage />
										</button>
										<button>
											<FaMicrophone />
										</button>
										<button>Send</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${
						tab === 3 ? 'block' : 'hidden'
					} h-auto overflow-y-auto `}
				>
					{messages.map((message) => (
						<div
							key={message.id}
							className={`${
								theme === 'dark' && 'text-gray-300'
							} flex items-center justify-between my-2 `}
						>
							<div className='flex items-center gap-2 cursor-pointer items sm:text-sm'>
								<div className='flex self-start'>{message.image}</div>

								<div className='flex flex-col sm:text-xs'>
									<span>{message.name}</span>
									<span>{message.time}</span>
								</div>
							</div>
							<div className=''>
								<LuPhoneCall size={17} />
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
