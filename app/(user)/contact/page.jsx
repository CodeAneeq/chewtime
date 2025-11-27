import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
      <div className="flex flex-col items-center mt-20 mb-20">
            <h2 className="text-5xl font-medium text-center">For Better Exprience Download <br/> ChewTime App</h2>
            <div className="mt-10 flex gap-8">
              <Image src="/frontend_assets/play_store.png" width={200} height={100} alt="playstore"/>
              <Image src="/frontend_assets/app_store.png" width={200} height={100} alt="appstore"/>
            </div>
          </div>
  )
}

export default Contact