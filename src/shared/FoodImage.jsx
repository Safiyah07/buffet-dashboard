import PropTypes from 'prop-types'

function FoodImage({children}) {
  return (
    <div className='w-full overflow-hidden h-28 lg_screen:h-20 max_md:h-32 lg:mr-3 rounded-xl'>{children}</div>
  )
}

FoodImage.propTypes = {
	children: PropTypes.any,
}

export default FoodImage