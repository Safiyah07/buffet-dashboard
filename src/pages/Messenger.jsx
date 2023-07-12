import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'
import Avatar6 from '../assets/Avatar6.png'
import Avatar9 from '../assets/Avatar8.png'

export const Messenger = () => {
	return (
		<>
			<div className='flex gap-5'>
				{/* Contacts */}
				<div className='w-[45%] h-[86.6vh] bg-light-purple rounded-xl'>
					<div className='mx-3 my-2 rounded'>
						<input
							type='text'
							id='search'
							name='search'
							placeholder='Search'
							className='w-full my-2 input h-9'
						/>
					</div>
				</div>
				{/* Messages */}
				<div className='w-full'>
					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									src={Avatar9}
									alt='Avatar'
								/>
							</div>
						</div>
						<div className='chat-header'>
							Obi-Wan Kenobi
							<time className='text-xs opacity-50'>12:45</time>
						</div>
						<div className='chat-bubble'>You were the Chosen One!</div>
						<div className='opacity-50 chat-footer'>Delivered</div>
					</div>
					<div className='chat chat-end'>
						<div className='chat-image avatar'>
							<div className='w-12 rounded-full'>
								<img
									src={Avatar1}
									alt='Avatar'
								/>
							</div>
						</div>
						<div className='chat-header'>
							Anakin
							<time className='text-xs opacity-50'>12:46</time>
						</div>
						<div className='chat-bubble'>I hate you!</div>
						<div className='opacity-50 chat-footer'>Seen at 12:46</div>
					</div>
				</div>
			</div>
		</>
	)
}
