import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft, BiMoon, BiSun } from 'react-icons/bi'
import { BsBarChartLine, BsCalendar2Date } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import {
	IoPersonCircleSharp,
	IoNotificationsOutline,
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
	const navbarItems = [
		{
			id: 1,
			title: 'dashboard',
			icon: <TbLayout2 />,
		},
		{
			id: 2,
			title: 'menu',
			icon: <VscLayoutMenubar />,
		},
		{
			id: 3,
			title: 'orders',
			icon: <TbPhoneCheck />,
		},
		{
			id: 4,
			title: 'staff',
			icon: <IoIosPeople />,
		},
		{
			id: 5,
			title: 'delivery',
			icon: <TbTruckDelivery />,
		},
		{
			id: 6,
			title: 'analytics',
			icon: <BsBarChartLine />,
		},
		{
			id: 7,
			title: 'messenger',
			icon: <TbMessageCircle2 />,
		},
		{
			id: 6,
			title: 'calender',
			icon: <BsCalendar2Date />,
		},
		{
			id: 7,
			title: 'Notification',
			icon: <IoNotificationsOutline />,
		},
		{
			id: 8,
			title: 'settings',
			icon: <TbSettings />,
		},
		{
			id: 9,
			title: 'log-out',
			icon: <IoPersonCircleSharp />,
		},
	]

	const [showMenu, setShowMenu] = useState(true)

	const { theme, handleToggle } = useContext(ThemeContext)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
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
						<div className='p-2 border-2 border-violet-200 rounded-xl sm:p-1 '>
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
						{navbarItems.map((Item) => (
							<li
								key={Item.id}
								className='capitalize'
							>
								<Link
									to={`/${Item.title}`}
									className='flex items-center px-2 py-[10px] rounded hover:bg-light-purple hover:text-white'
								>
									<span className='mr-2'>{Item.icon}</span>
									{Item.title}
								</Link>
							</li>
						))}
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
					className='flex items-center p-4 lg:hidden'
				>
					<img
						src={theme === 'light' ? DashboardLogo : DashboardLogoDark}
						alt='Logo'
						className='w-10 h-10 sm:w-7 sm:h-7'
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
							className='w-full my-2 border-2 input input-bordered h-9 border-violet-200'
						/>
					</div>

					{/* Notification Icon for md and lg */}
					<div className='flex'>
						<div className='p-2 border-2 border-violet-200 rounded-xl max_md:mr-2 sm:hidden'>
							<Link to='/notifications'>
								<IoNotificationsOutline size='20px' />
							</Link>
						</div>

						{/* Toggle theme */}
						<div>
							<label className='p-2 border-2 swap swap-rotate border-violet-200 rounded-xl lg:ml-2 max_md:mr-2 sm:p-1'>
								<input
									type='checkbox'
									onChange={handleToggle}
									// show toggle image based on localstorage theme
									checked={theme === 'light' ? false : true}
								/>

								<BiSun className='w-5 h-5 fill-current swap-on' />

								<BiMoon className='w-5 h-5 fill-current swap-off' />
							</label>
						</div>

						<div className='w-10 h-10 overflow-hidden border-2 cursor-pointer lg:hidden sm:h-8 sm:w-8 lg:mr-3 rounded-xl border-violet-200'>
							<Link to='/profile'>
								<img
									src={Profile}
									alt='Profile_Image'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
