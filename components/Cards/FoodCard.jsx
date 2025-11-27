import Image from 'next/image'
import React from 'react'

const FoodCard = () => {
  return (
    <div className='w-[22%] h-90 rounded-xl shadow mb-7'>
        <figure className='h-50 relative '>
        <Image className='rounded-t-lg' src="/frontend_assets/food_1.png" fill={true} alt='food img'/>
        <div className='w-10 h-10 bg-white shadow rounded-full absolute bottom-2 right-4'>
            <Image src="/frontend_assets/add_icon_white.png" width={40} height={40} alt='add icon'/>
        </div>
        </figure>
        <div className='p-5 flex flex-col gap-1'>
            <h2 className='text-2xl font-medium'>Greek Salad</h2>
            <p className='text-sm text-gray-400'>Food Provide essential nutrients for overall health and well-being</p>
            <h4 className='text-2xl text-red-700'>$14</h4>
        </div>
    </div>
  )
}

export default FoodCard