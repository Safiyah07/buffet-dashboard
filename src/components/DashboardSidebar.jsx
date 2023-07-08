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

function DashboardSidebar() {
	const location = useLocation()

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true
		}
	}

	return (
		<>
			{/* Sidebar for larger screens */}
			<div className='fixed xl:w-[17vw] text-black bg-violet-shade rounded-xl shadow-[1px_1px_3px_0px_grey] no-animation overflow-y-auto h-[96vh] z-10'>
				<div className='sm:hidden md:hidden h-full relative flex flex-col justify-between w-full'>
					<Link
						to='/'
						className='p-4 flex items-center'
					>
						<img
							src={DashboardLogo}
							alt='Logo'
							width='40px'
							height='40px'
						/>
						<h1
							className='text-xl font-bold uppercase text-center'
							style={{ fontFamily: 'Abril Fatface' }}
						>
							Buffet
						</h1>
					</Link>

					<div>
						<ul className='menu p-4 rounded-box'>
							<span className='text-sm text-slate-400 pb-1'>Main Menu</span>
							<li>
								<Link
									to='/'
									className={
										pathMatchRoute('/') ? 'active-sidebar' : 'sidebarNav'
									}
								>
									<TbLayout2 />
									Dashboard
								</Link>
							</li>
							<li>
								<Link
									to='/menu'
									className={
										pathMatchRoute('/menu') ? 'active-sidebar' : 'sidebarNav'
									}
								>
									<VscLayoutMenubar />
									Menu
								</Link>
							</li>
							<li>
								<Link
									to='/orders'
									className={
										pathMatchRoute('/orders') ? 'active-sidebar' : 'sidebarNav'
									}
								>
									<TbPhoneCheck />
									Orders
								</Link>
							</li>
							<li>
								<Link
									to='/staff'
									className={
										pathMatchRoute('/staff') ? 'active-sidebar' : 'sidebarNav'
									}
								>
									<IoIosPeople />
									Staff
								</Link>
							</li>
							<li>
								<Link
									to='/delivery'
									className={
										pathMatchRoute('/delivery')
											? 'active-sidebar'
											: 'sidebarNav'
									}
								>
									<TbTruckDelivery />
									Delivery
								</Link>
							</li>
							<li>
								<Link
									to='/analytics'
									className={
										pathMatchRoute('/analytics')
											? 'active-sidebar'
											: 'sidebarNav'
									}
								>
									<BsBarChartLine />
									Analytics
								</Link>
							</li>
							<li>
								<Link
									to='/messenger'
									className={
										pathMatchRoute('/messenger')
											? 'active-sidebar'
											: 'sidebarNav'
									}
								>
									<TbMessageCircle2 />
									Messenger
								</Link>
							</li>
							<li>
								<Link
									to='/calender'
									className={
										pathMatchRoute('/calender')
											? 'active-sidebar'
											: 'sidebarNav'
									}
								>
									<BsCalendar2Date />
									Calender
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<ul className='menu p-4 rounded-box'>
							<li>
								<Link
									to='/settings'
									className={
										pathMatchRoute('/settings')
											? 'active-sidebar'
											: 'sidebarNav'
									}
								>
									<TbSettings />
									Settings
								</Link>
							</li>
							<li>
								<Link
									to='/log-out'
									className={
										pathMatchRoute('/log-out') ? 'active-sidebar' : 'sidebarNav'
									}
								>
									<IoPersonCircleSharp />
									Log Out
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardSidebar
