import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import { DashboardSidebar } from './components/DashboardSidebar'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Dashboard } from './pages/Dashboard'
import { Menu } from './pages/Menu'
import { Orders } from './pages/Orders'
import { Staff } from './pages/Staff'
import { Delivery } from './pages/Delivery'
import { Analytics } from './pages/Analytics'
// import {Calender} from './pages/Calender'
// import {Calender2} from './pages/Calender2'
import { Calender3 } from './pages/Calender3'
import { Settings } from './pages/Settings'
import { NotFound } from './pages/NotFound'
import { ThemeProvider } from './context/ThemeContext'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path='/'
				element={<Root />}
			>
				<Route
					index
					element={<Dashboard />}
				/>
				<Route
					path='/menu'
					element={<Menu />}
				/>
				<Route
					path='/orders'
					element={<Orders />}
				/>
				<Route
					path='/staff'
					element={<Staff />}
				/>
				<Route
					path='/delivery'
					element={<Delivery />}
				/>
				<Route
					path='/analytics'
					element={<Analytics />}
				/>
				<Route
					path='/calender'
					element={<Calender3 />}
				/>
				<Route
					path='/settings'
					element={<Settings />}
				/>
				<Route
					path='/not-found'
					element={<NotFound />}
				/>
				<Route
					path='/*'
					element={<NotFound />}
				/>
			</Route>
		)
	)

	return (
		<>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	)
}

export const Root = () => {
	return (
		<>
			<div className='flex py-4 lg:px-6 lg:gap-4'>
				<div className='lg:grow-[2]'>
					<DashboardSidebar />
				</div>

				<div className='w-full grow-[5] xl:ml[12vw] max_lg:ml-[18.5vw] min_lg:ml-[20.5vw] lg:ml-[17vw] lg:pl-2 max_md:px-2'>
					<Navbar />
					<Outlet />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
