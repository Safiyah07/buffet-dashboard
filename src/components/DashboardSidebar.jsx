import { useLocation, Link } from 'react-router-dom'
import {
	TbLayout2,
	TbPhoneCheck,
	TbTruckDelivery,
	TbMessageCircle2,
	TbSettings,
} from 'react-icons/tb'
import { VscLayoutMenubar } from 'react-icons/vsc'
import { IoIosPeople } from 'react-icons/io'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { BsBarChartLine, BsCalendar2Date } from 'react-icons/bs'
import DashboardLogo from '../assets/DashboardLogo.png'

export const DashboardSidebar = () => {
	const navbarItems = [
		{
			id: 1,
			title: 'dashboard',
			icon: <TbLayout2 />,
			link: ''
		},
		{
			id: 2,
			title: 'menu',
			icon: <VscLayoutMenubar />,
			link: 'menu'
		},
		{
			id: 3,
			title: 'orders',
			icon: <TbPhoneCheck />,
			link: 'orders'
		},
		{
			id: 4,
			title: 'staff',
			icon: <IoIosPeople />,
			link: 'staff'
		},
		{
			id: 5,
			title: 'delivery',
			icon: <TbTruckDelivery />,
			link: 'delivery'
		},
		{
			id: 6,
			title: 'analytics',
			icon: <BsBarChartLine />,
			link: 'analytics'
		},
		{
			id: 7,
			title: 'messenger',
			icon: <TbMessageCircle2 />,
			link: 'messenger'
		},
		{
			id: 8,
			title: 'calender',
			icon: <BsCalendar2Date />,
			link: 'calender'
		},
	]

	const navbarItemsBottom = [
		{
			id: 1,
			title: 'settings',
			icon: <TbSettings />,
		},
		{
			id: 2,
			title: 'log-out',
			icon: <IoPersonCircleSharp />,
		},
	]

	const location = useLocation()

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true
		}
	}

	return (
		<>
			{/* Sidebar for larger screens */}
			<div className='fixed xl:w-[17vw] text-black bg-violet-shade rounded-xl shadow-[1px_1px_3px_0px_grey] overflow-y-auto h-[96vh] z-10'>
				<div className='relative flex flex-col justify-between w-full h-full sm:hidden md:hidden'>
					<Link
						to='/'
						className='flex items-center p-4'
					>
						<img
							src={DashboardLogo}
							alt='Logo'
							width='40px'
							height='40px'
						/>
						<h1
							className='text-xl font-bold text-center uppercase'
							style={{ fontFamily: 'Abril Fatface' }}
						>
							Buffet
						</h1>
					</Link>

					<div>
						<ul className='p-4 rounded-box'>
							<span className='pb-1 text-sm text-slate-400'>Main Menu</span>

							{navbarItems.map((Item) => (
								<li
									key={Item.id}
									className='capitalize'
								>
									<Link
										to={`/${Item.link}`}
										className={`${
											pathMatchRoute(`/${Item.link}`) &&
											'text-white bg-light-purple'
										} flex items-center mb-1 py-2 px-4 w-full rounded-lg hover:bg-light-purple hover:text-white`}
									>
										<span className='mr-2'>{Item.icon}</span>
										{Item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<ul className='p-4 rounded-box'>
						{navbarItemsBottom.map((Item) => (
								<li
									key={Item.id}
									className='capitalize'
								>
									<Link
										to={`/${Item.title}`}
										className={`${
											pathMatchRoute(`/${Item.title}`) &&
											'text-white bg-light-purple'
										} flex items-center mb-1 py-2 px-4 w-full rounded-lg hover:bg-light-purple hover:text-white`}
									>
										<span className='mr-2'>{Item.icon}</span>
										{Item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardSidebar
