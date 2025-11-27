import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'

const Navbar = () => {

  return (
    <nav className='mt-5 h-15 p-3 flex justify-around'>
        <figure>
            <Image src="/frontend_assets/logo.png" width={200} height={50} alt='chewtime - logo'/>
        </figure>
        <ul className='flex justify-center gap-5 items-center text-xl'>
            <a href="/"><li>Home</li></a>
            <a href="/menu"><li>Menu</li></a>
            <a href="/download-app"><li>Mobile-app</li></a>
            <a href="/contact"><li>Contact Us</li></a>
        </ul>
        <div className='flex items-center gap-6'>
            <span className='cursor-pointer'>
                <Image src="/frontend_assets/search_icon.png" width={20} height={20} alt='search icon'/>
            </span>
            <span className='cursor-pointer'>
                <Image src="/frontend_assets/basket_icon.png" width={20} height={20} alt='basket icon'/>
            </span>
            <PrimaryBtn style={{borderColor: "orange", cursor: "pointer"}} className="hover:bg-orange-200">Sign In</PrimaryBtn>
        </div>
    </nav>
  )
}

export default Navbar