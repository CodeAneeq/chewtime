import CategoryCard from '@/components/Cards/CategoryCard'
import FoodCard from '@/components/Cards/FoodCard'
import React from 'react'

const Menu = () => {
  return (
    <div className='px-30 mt-10 flex justify-around flex-col'>
        <div className="mt-15">
        <h2 className="text-3xl font-medium">Explore Our Menu</h2>
        <p className="mt-3 w-2/3">Choose from a diverse menu featuring a detectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="flex gap-14 mt-12">
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
        </div>
      </div>
        <hr className="text-gray-400 border-2 my-10 w-full"/>
      <div className="flex flex-col justify-start ">
        <h2 className="text-3xl font-medium">Top Dishes Near You</h2>
         <div className="flex gap-1 justify-between mt-12 flex-wrap">
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
        </div>
      </div>
    </div>
  )
}

export default Menu