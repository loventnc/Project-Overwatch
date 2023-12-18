import React from 'react'

const CustomButton = ({title, containerStyles, iconRight, type, onClick }) => {
  return (
    <button 
      type={type || 'button'}
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white ${containerStyles}`}
      >
      {title}
      {iconRight && (
        <div className='ml-2'>
          {iconRight}
        </div>
      )}
    </button>
  )
}

export default CustomButton