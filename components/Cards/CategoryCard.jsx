import Image from 'next/image'
import React from 'react'

const CategoryCard = () => {
  return (
    <div className='flex flex-col items-center'>
        <Image className="rounded-full" src="/frontend_assets/menu_1.png" width={100} height={100} alt="salad" />
        <p className='mt-3 text-gray-500'>Salad</p>
    </div>
  )
}

export default CategoryCard