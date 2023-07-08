import PropTypes from 'prop-types'

function AvatarImage({children}) {
  return (
    <div className='w-12 h-12 overflow-hidden border-2 lg:mr-3 rounded-xl border-violet-200'>{children}</div>
  )
}

AvatarImage.propTypes = {
	children: PropTypes.any,
}

export default AvatarImage