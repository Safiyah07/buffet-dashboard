import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardSidebar from './components/DashboardSidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Menu from './pages/Menu'
import Orders from './pages/Orders'
import Staff from './pages/Staff'
import Delivery from './pages/Delivery'
import Analytics from './pages/Analytics'
// import Calender from './pages/Calender'
// import Calender2 from './pages/Calender2'
import Calender3 from './pages/Calender3'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import { ThemeProvider } from './context/ThemeContext'

function App() {
	return (
		<>
			<ThemeProvider>
				<Router>
					<div className='flex h-screen py-4 lg:px-6 lg:gap-4'>
						<div className='lg:grow-[2]'>
							<DashboardSidebar />
						</div>

						<div className='w-full grow-[5] xl:ml[12vw] max_lg:ml-[18.5vw] min_lg:ml-[20.5vw] lg:ml-[17vw] lg:pl-2 max_md:px-2'>
							<Navbar />
							<Routes>
							<Route
									path='/'
									element={<Dashboard />}
								></Route>
								<Route
									path='/dashboard'
									element={<Dashboard />}
								></Route>
								<Route
									path='/menu'
									element={<Menu />}
								></Route>
								<Route
									path='/orders'
									element={<Orders />}
								></Route>
								<Route
									path='/staff'
									element={<Staff />}
								></Route>
								<Route
									path='/delivery'
									element={<Delivery />}
								></Route>
								<Route
									path='/analytics'
									element={<Analytics />}
								></Route>
								<Route
									path='/messenger'
									element={<Dashboard />}
								></Route>
								<Route
									path='/calender'
									element={<Calender3 />}
								></Route>

								<Route
									path='/settings'
									element={<Settings />}
								></Route>
								<Route
									path='/log-out'
									element={<Dashboard />}
								></Route>
								<Route
									path='/notfound'
									element={<NotFound />}
								/>
								<Route
									path='/*'
									element={<NotFound />}
								/>
							</Routes>
							<Footer />
						</div>
					</div>
				</Router>
			</ThemeProvider>
			{/* Try to make a navigation without the nav and sidebar */}
			{/* <Router>
				<Routes>
					<Route
						path='/notfound'
						element={<NotFound />}
					/>
					<Route
						path='/*'
						element={<NotFound />}
					/>
				</Routes>
			</Router> */}
		</>
	)
}

export default App
