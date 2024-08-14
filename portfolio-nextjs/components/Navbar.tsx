import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-fill h-[9vh] z-30 flex items-center justify-center sm:justify-start gap-8 sm:gap-16 bg-transparent'>
      <Link href="/" className='text-white cursor-pointer' >
        <img src='https://i.postimg.cc/QNmLVjyY/Logo-Dark.png' alt='logo' className='h-9 object-center items-center'/>
      </Link>
      <Link href="/projects" className='text-white cursor-pointer' >
        Works
      </Link>
      <Link href="/about-me" className='text-white cursor-pointer' >
        About Me
      </Link>
      <Link href="/passion" className='text-white cursor-pointer' >
        Passion
      </Link>
    </div>
  )
}

export default Navbar