import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon, divIcon, point } from 'leaflet'
import { TbPlus } from 'react-icons/tb'
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'

// // custom cluster icon
const createClusterCustomIcon = function (cluster) {
	return new divIcon({
		html: `<span className='text-white'>${cluster.getChildCount()}</span>`,
		className:
			'h-12 w-12 rounded-[50%] bg-light-purple translate-y-[50%] translate-x-[50%] flex justify-center items-center font-black text-white text-2xl',
		iconSize: point(33, 33, true),
	})
}

// markers
const markers = [
	{
		geocode: [48.86, 2.3522],
		popUp: 'Ryan Patel',
		customIcon: new Icon({
			iconUrl: Avatar1,
			iconSize: [38, 38], // size of the icon
		}),
	},
	{
		geocode: [48.85, 2.3522],
		popUp: 'Caleb Thompson',
		customIcon: new Icon({
			iconUrl: Avatar2,
			iconSize: [38, 38], // size of the icon
		}),
	},
	{
		geocode: [48.855, 2.34],
		popUp: 'James Mitchell',
		customIcon: new Icon({
			iconUrl: Avatar3,
			iconSize: [38, 38], // size of the icon
		}),
	},
]

export const Delivery = () => {
	return (
		<>
			<div className='flex flex-col gap-5'>
				<section className='flex items-center gap-4 md:flex-col sm:flex-col'>
					<div className='border-2 border-violet-shade rounded-xl p-2 w-[38%] md:w-full sm:w-full'>
						<div className='flex items-center justify-between px-2 pb-4'>
							<img
								src={Avatar1}
								alt='Avatar 1'
								className='w-10'
							/>

							<div className='px-3 py-2 badge badge-accent rounded-xl'>
								Active
							</div>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Name</p>
							<p>Ryan Patel</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Number</p>
							<p>+374 77 00 00 00</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Email</p>
							<p>ryanpatel@gmail.com</p>
						</div>

						<div className='flex items-center justify-between px-2 my-1 text-white rounded bg-light-purple'>
							<p>Finished Orders</p>
							<p>8</p>
						</div>
						<div className='flex items-center justify-between px-2 border rounded border-violet-shade'>
							<p>Attached Orders</p>
							<p>13</p>
						</div>
					</div>
					<div className='border-2 border-violet-shade rounded-xl p-2 w-[38%] md:w-full sm:w-full'>
						<div className='flex items-center justify-between px-2 pb-4'>
							<img
								src={Avatar2}
								alt='Avatar 2'
								className='w-10'
							/>

							<div className='px-3 py-2 badge badge-accent rounded-xl'>
								Active
							</div>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Name</p>
							<p>Ryan Patel</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Number</p>
							<p>+374 77 00 00 00</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Email</p>
							<p>ryanpatel@gmail.com</p>
						</div>

						<div className='flex items-center justify-between px-2 my-1 text-white rounded bg-light-purple'>
							<p>Finished Orders</p>
							<p>10</p>
						</div>
						<div className='flex items-center justify-between px-2 border rounded border-violet-shade'>
							<p>Attached Orders</p>
							<p>7</p>
						</div>
					</div>
					<div className='border-2 border-violet-shade rounded-xl p-2 w-[38%] md:w-full sm:w-full'>
						<div className='flex items-center justify-between px-2 pb-4'>
							<img
								src={Avatar3}
								alt='Avatar 3'
								className='w-10'
							/>

							<div className='px-3 py-2 badge badge-error rounded-xl'>
								Cancelled
							</div>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Name</p>
							<p>Ryan Patel</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Number</p>
							<p>+374 77 00 00 00</p>
						</div>

						<div className='flex items-center justify-between px-2'>
							<p>Email</p>
							<p>ryanpatel@gmail.com</p>
						</div>

						<div className='flex items-center justify-between px-2 my-1 text-white rounded bg-light-purple'>
							<p>Finished Orders</p>
							<p>8</p>
						</div>
						<div className='flex items-center justify-between px-2 border rounded border-violet-shade'>
							<p>Attached Orders</p>
							<p>13</p>
						</div>
					</div>
					<div className='border-2 border-violet-shade rounded-xl py-2 w-[38%] md:w-full sm:w-full h-[12.8rem] flex items-center justify-center cursor-pointer'>
						<TbPlus className='mr-2 text-white w-7 h-7 rounded-2xl bg-light-purple' />
						<p className='text-light-purple'>Add new driver</p>
					</div>
				</section>
				<div className='shadow-[1px_1px_3px_0px_grey] border-2 border-violet-shade rounded-xl h-[50vh]'>
					<MapContainer
						center={[48.8566, 2.3522]}
						zoom={13}
						scrollWheelZoom={false}
						className='rounded-xl h-[50vh]'
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<MarkerClusterGroup
							chunkedLoading
							iconCreateFunction={createClusterCustomIcon}
						>
							{markers.map((marker) => (
								<Marker
									position={marker.geocode}
									icon={marker.customIcon}
									key={marker.geocode}
								>
									<Popup>{marker.popUp}</Popup>
								</Marker>
							))}
						</MarkerClusterGroup>
					</MapContainer>
				</div>
			</div>
		</>
	)
}
