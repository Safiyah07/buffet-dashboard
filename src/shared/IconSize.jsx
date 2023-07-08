import PropTypes from 'prop-types'

function IconSize({children}) {
  return (
    <div className='p-2 border-2 rounded-xl'>{children}</div>
  )
}

IconSize.propTypes = {
	children: PropTypes.any,
}

export default IconSize