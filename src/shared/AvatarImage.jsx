import React from 'react'

function AvatarImage({children}) {
  return (
    <div className='w-12 h-12 lg:mr-3 rounded-xl border-2 overflow-hidden border-violet-200'>{children}</div>
  )
}

export default AvatarImage