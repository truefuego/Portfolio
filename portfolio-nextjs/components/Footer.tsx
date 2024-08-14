import React from 'react'
import copy from 'copy-to-clipboard';

const Footer = () => {
  return (
    <div className='w-full h-full bg-transprent flex flex-col gap-8 justify-center items-center pb-24'>
      <div className='text-white text-6xl md:text-[72px] font-semibold cursor-default'>
        Let&apos;s chat!
      </div>
      <div className='text-white sm:text-md md:text-[20px] font-normal cursor-pointer' onClick={() => {copy('ankitsharma9152003@gmail.com')}}>
        ankitsharma9152003@gmail.com
      </div>
    </div>
  )
}

export default Footer