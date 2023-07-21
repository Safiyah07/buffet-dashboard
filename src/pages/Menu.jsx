import { Suspense } from 'react'
import FoodPic2 from '../assets/FoodPic2.jpg'
import FoodPic3 from '../assets/FoodPic3.jpg'
import FoodPic5 from '../assets/FoodPic5.jpg'
import FoodPic8 from '../assets/FoodPic8.jpg'
import FoodImage from '../shared/FoodImage'
import DoughnutChart from './../components/charts/DoughnutChart'

export const Menu = () => {
	return (
		<>
			<div>
				<div className='flex w-full gap-6 min_lg:flex-col max_md:flex-col text-dimgrey'>
					<div className='flex flex-col'>
						<h2 className='mb-4 font-bold text-center'>
							Top Sellings of the Day
						</h2>
						<div className='grid gap-4 lg:grid-cols-4 lg_screen2:grid-cols-3 max_md:grid-cols-2'>
							<Suspense fallback= 'loading...'>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
								<div>
									<FoodImage>
										<img
											src={FoodPic2}
											loading='lazy'
											alt=''
										/>
									</FoodImage>
									<div className='flex items-center justify-between lg_screen:text-sm'>
										<p>Pasta</p>
										<p>$11.40</p>
									</div>
									<p className='border border-orange rounded text-xs w-[4.8rem] px-1 lg_screen:text-[11px] lg_screen:w-[4.5rem]'>
										Ordered 54
									</p>
								</div>
							</Suspense>
						</div>

						<div className='mt-8 max_md:mx-auto'>
							<h2 className='mb-4 font-bold text-center'>
								Currently Not Available
							</h2>
							<div className='grid grid-cols-3 gap-4 max_md:grid-cols-1'>
								<div>
									<img
										src={FoodPic3}
										alt=''
										className='h-[11.5rem] w-[350px] rounded-xl'
									/>
									<p>Doughnut</p>
								</div>
								<div>
									<img
										src={FoodPic5}
										alt=''
										className='h-[11.5rem] w-[350px] rounded-xl'
									/>
									<p>Pizza</p>
								</div>
								<div>
									<img
										src={FoodPic3}
										alt=''
										className='h-[11.5rem] w-[350px] rounded-xl'
									/>
									<p>Doughnut</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col min_lg:m-auto'>
						<div className='border-2 border-violet-shade shadow-[1px_1px_3px_0px_grey] rounded-xl px-10 pt-4 lg_screen:px-2 lg_screen:pb-8 lg:pb-12 max_md:pb-8 md:m-auto'>
							<DoughnutChart />
						</div>
						<div className='my-6'>
							<h1 className='mb-4 font-bold text-center'>
								Todays Specials and Promotions
							</h1>
							<div className='flex max_md:justify-center w-[80%] min_lg:w-full max_md:w-full'>
								<img
									src={FoodPic8}
									alt=''
									className='w-full h-48 p-2 rounded-2xl lg_screen:h-40'
								/>
								<img
									src={FoodPic8}
									alt=''
									className='w-full h-48 p-2 rounded-2xl lg_screen:h-40'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu
