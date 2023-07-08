import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft, BiMoon, BiSun } from 'react-icons/bi'
import { BsBarChartLine, BsCalendar2Date } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import {
	IoPersonCircleSharp,
	IoNotificationsOutline,
	IoPerson,
	IoClose,
} from 'react-icons/io5'
import {
	TbLayout2,
	TbPhoneCheck,
	TbTruckDelivery,
	TbMessageCircle2,
	// TbSearch,
	TbSettings,
} from 'react-icons/tb'
import { VscLayoutMenubar } from 'react-icons/vsc'
import Profile from '../assets/Profile.jpg'
import DashboardLogo from '../assets/DashboardLogo.png'
import DashboardLogoDark from '../assets/DashboardLogoDark.png'
import AvatarImage from '../shared/AvatarImage'
import ThemeContext from '../context/ThemeContext'

function Navbar() {
	const [showMenu, setShowMenu] = useState(true)
	const [showProfileMenu, setShowProfileMenu] = useState(true)

	const { theme, handleToggle } = useContext(ThemeContext)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
	}

	const profileMenuDisplay = () => {
		setShowProfileMenu((prevState) => !prevState)
	}

	return (
		<>
			<div className='flex flex-row items-center justify-between w-[100%] pb-2'>
				<div className='lg:hidden'>
					<label
						tabIndex={0}
						className='cursor-pointer'
						onClick={menuDisplay}
					>
						<div className='border-2 border-violet-200 rounded-xl p-2 sm:p-1 '>
							{showMenu ? (
								<BiMenuAltLeft size='20px' />
							) : (
								<IoClose size='20px' />
							)}
						</div>
					</label>
					<ul
						tabIndex={0}
						onClick={menuDisplay}
						className={
							showMenu
								? 'hidden'
								: `${
										theme === 'light' ? 'shadow' : 'shadow-2xl'
								  } absolute mt-3 p-2 bg-base-100 rounded-box w-[97vw] z-10`
						}
					>
						<li>
							<Link
								to='/'
								className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<TbLayout2 className='mr-2' />
								Dashboard
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/menu'
								className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<VscLayoutMenubar className='mr-2' />
								Menu
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/orders'
								className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<TbPhoneCheck className='mr-2' />
								Orders
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/staff'
								className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<IoIosPeople className='mr-2' />
								Staff
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/delivery'
								className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<TbTruckDelivery className='mr-2' />
								Delivery
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/analytics'
								className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<BsBarChartLine className='mr-2' />
								Analytics
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/messenger'
								className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<TbMessageCircle2 className='mr-2' />
								Messenger
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/calender'
								className='flex p-2 rounded hover:bg-light-purple hover:text-white'
							>
								<BsCalendar2Date className='mr-2' />
								Calender
							</Link>
						</li>
					</ul>
				</div>
				<div className='flex items-center max_md:hidden'>
					<AvatarImage>
						<Link to='/profile'>
							<img
								src={Profile}
								alt=''
							/>
						</Link>
					</AvatarImage>
					<div className='flex-1 text-lg'>
						{''}
						Hello,
						<span className='text-light-purple'> Princess</span>! Welcome Back
					</div>
				</div>
				<Link
					to='/'
					className='p-4 flex items-center lg:hidden'
				>
					<img
						src={theme === 'light' ? DashboardLogo : DashboardLogoDark}
						alt='Logo'
						className='sm:w-7 sm:h-7 w-10 h-10'
						// width='40px'
						// height='40px'
					/>
					<h1
						className={`${
							theme === 'dark' ? 'text-white' : ''
						} text-xl sm:text-lg font-bold uppercase text-center`}
						style={{ fontFamily: 'Abril Fatface' }}
					>
						Buffet
					</h1>
				</Link>

				{/* Right Side Navigation Icon */}
				<div className='flex items-center'>
					{/* Search Input */}
					<div className='mr-3 md:hidden sm:hidden'>
						<input
							type='text'
							id='search'
							name='search'
							placeholder='Search'
							className='input input-bordered w-full h-9 my-2 border-2 border-violet-200'
						/>
					</div>

					{/* Notification Icon for md and lg */}
					<div className='flex'>
						<div className='border-2 border-violet-200 rounded-xl p-2 max_md:mr-2 sm:hidden'>
							<Link to='/notifications'>
								<IoNotificationsOutline size='20px' />
							</Link>
						</div>

						{/* Toggle theme */}
						<div>
							<label className='swap swap-rotate border-2 border-violet-200 rounded-xl p-2 lg:ml-2 max_md:mr-2 sm:p-1'>
								<input
									type='checkbox'
									onChange={handleToggle}
									// show toggle image based on localstorage theme
									checked={theme === 'light' ? false : true}
								/>

								<BiSun className='swap-on fill-current w-5 h-5' />

								<BiMoon className='swap-off fill-current w-5 h-5' />
							</label>
						</div>

						{/* Dropdown for profile and settings and search and sm:Notification */}
						<div className='lg:hidden'>
							<label
								tabIndex={0}
								className='cursor-pointer'
								onClick={profileMenuDisplay}
							>
								<div className='w-10 h-10 sm:h-8 sm:w-8 lg:mr-3 rounded-xl border-2 overflow-hidden border-violet-200'>
									<img
										src={Profile}
										alt='Profile_Image'
									/>
								</div>
							</label>
							<ul
								tabIndex={0}
								className={
									showProfileMenu
										? 'hidden'
										: `${
												theme === 'light' ? 'shadow' : 'shadow-2xl'
										  } absolute right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-60`
								}
								onClick={profileMenuDisplay}
							>
								<li>
									<Link
										to='/profile'
										className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
									>
										<IoPerson className='mr-2' />
										Profile
									</Link>
								</li>
								<hr />
								<li>
									<Link
										to='/notification'
										className='md:hidden lg:hidden flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
									>
										<IoNotificationsOutline className='mr-2' />
										Notification
									</Link>
								</li>
								<hr />
								<li>
									<Link
										to='/settings'
										className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
									>
										<TbSettings className='mr-2' />
										Settings
									</Link>
								</li>
								<hr />
								<li>
									<Link
										to='/log-out'
										className='flex items-center p-2 rounded hover:bg-light-purple hover:text-white'
									>
										<IoPersonCircleSharp className='mr-2' />
										Log Out
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
