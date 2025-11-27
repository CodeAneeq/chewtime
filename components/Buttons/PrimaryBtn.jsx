import React from 'react'

const PrimaryBtn = ({style, children, className}) => {
  return (
         <button style={style} className={`p-4 rounded-4xl border-2 border-gray-500 w-30 h-10 flex items-center justify-center ${className}`}>
             {children}
            </button>
  )
}

export default PrimaryBtn