import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-30 pt-30 pb-5 bg-gray-600'>
        <div className=' flex justify-between'>
            <div className='w-1/3'>
            <figure className='mb-7'>
                <Image src="/frontend_assets/logo1.png" width={200} height={100} alt='chew time logo' />
            </figure>
            <p className='text-gray-300 mb-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nostrum iure suscipit maiores non harum incidunt unde magnam molestias ipsum qui vel aut natus aspernatur ipsa dignissimos, numquam assumenda deserunt.</p>
            <div className='flex gap-5'>
                <span className='border border-white rounded-full flex justify-center items-center'><Image src="/frontend_assets/facebook_icon.png" width={30} height={30} alt='facebook logo'/></span>
                <span className='border border-white rounded-full flex justify-center items-center'><Image src="/frontend_assets/linkedin_icon.png" width={30} height={30} alt='linkedin logo'/></span>
                <span className='border border-white rounded-full flex justify-center items-center'><Image src="/frontend_assets/twitter_icon.png" width={30} height={30} alt='twitter logo'/></span>
            </div>
        </div>
        <div>
        <h2 className='text-white font-medium text-3xl mb-7'>Company</h2>
        <ul className='flex flex-col gap-2 text-white'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div>
        <h2 className='text-white font-medium text-3xl mb-7'>Get In Touch</h2>
        <ul className='flex flex-col gap-2 text-white'>
            <li>+92-308-4900522</li>
            <li>contact@chewtime.com</li>
        </ul>
        </div>
        </div>
        <hr className='border-2 text-gray-300 my-10'/>
        <p className='text-center text-white'>Copyright 2025 @ ChewTime.com - All Right Reserved.</p>
    </footer>
  )
}

export default Footer