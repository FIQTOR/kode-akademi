import Link from 'next/link'
import React from 'react'
import { SiGithub, SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si'

const Header = () => {
  return (
    <header className='w-full h-screen pb-14 relative overflow-hidden'>
      <div className='w-1/2 h-full flex flex-col gap-4 justify-center px-14'>
        <h1 className='font-bold text-8xl'><span>Platform</span> <span>built</span> <span>for</span> <span>student</span></h1>
        <p className='text-xl'>Code Learned is a cutting-edge learning platform designed to help you ace and succeed as a Software Engineer.</p>
        <div className='flex gap-4'>
          <Link href={'/#course'} className='px-4 py-4 bg-blue-500 rounded-md text-white hover:opacity-70 duration-200'>Get started</Link>
          <button className='px-4 py-4 rounded-md border-2 hover:opacity-70 duration-200'>Try free</button>
        </div>
        <div className='flex gap-4'>
          <a href="https://www.instagram.com/fiqtorr/" className='hover:opacity-70 hover:scale-105 duration-200'>
            <SiInstagram className='w-7 h-7 fill-neutral-500' />
          </a>
          <a href="https://www.youtube.com/channel/UCjImMlihTzXB872jkBzsuiw" className='hover:opacity-70 hover:scale-105 duration-200'>
            <SiYoutube className='w-7 h-7 fill-neutral-500' />
          </a>
          <a href="https://github.com/fiqtor" className='hover:opacity-70 hover:scale-105 duration-200'>
            <SiGithub className='w-7 h-7 fill-neutral-500' />
          </a>
          <a href="https://www.tiktok.com/@fiqtor" className='hover:opacity-70 hover:scale-105 duration-200'>
            <SiTiktok className='w-7 h-7 fill-neutral-500' />
          </a>
        </div>
      </div>

      <div className='absolute w-[500px] h-[500px] bg-neutral-200 rounded-full bottom-20 -right-52'></div>
      <img src="/imgs/header.png" alt="Header Image Not Found" className='absolute bottom-52 w-96 h-96 right-14' />
    </header>
  )
}

export default Header