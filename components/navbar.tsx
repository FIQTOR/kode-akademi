import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-14 shadow-md flex items-center'>
      <span className='absolute left-14 italic font-semibold text-xl'>
        <div className='flex items-center gap-2'>
          <img src="/icon.jpeg" alt="" className='w-12 h-12 rounded-full' />
          <span>Kode Akademi</span>
        </div>
      </span>

      <ul className='w-full flex gap-7 justify-center'>
        <li className='hover:text-neutral-400 duration-200'>
          <Link href='/'>Homepage</Link>
        </li>
        <li className='hover:text-neutral-400 duration-200'>
          <Link href='/about'>About Us</Link>
        </li>
        <li className='hover:text-neutral-400 duration-200'>
          <Link href='/course'>Course</Link>
        </li>
        <li className='hover:text-neutral-400 duration-200'>
          <Link href='/blog'>Our Blog</Link>
        </li>
        <li className='hover:text-neutral-400 duration-200'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar