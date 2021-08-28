import React from 'react'

const Hamburger = ({
  width, 
  height, 
  fill = 'currentColor',
  className,
  onClick
}) => {
  return (
    <div 
      className={className} 
      onClick={onClick}
    >
      <svg 
        viewBox="0 0 100 80" 
        width={width} 
        height={height} 
        fill={fill}
      >
        <rect width="80" height="9"></rect>
        <rect y="30" width="80" height="9"></rect>
        <rect y="60" width="80" height="9"></rect>
      </svg>
    </div>
  )
}

export default Hamburger
