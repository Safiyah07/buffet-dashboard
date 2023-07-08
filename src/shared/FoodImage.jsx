import React from 'react'

function FoodImage({children}) {
  return (
    <div className='w-full h-28 lg_screen:h-20 max_md:h-32 lg:mr-3 rounded-xl overflow-hidden'>{children}</div>
  )
}

export default FoodImage