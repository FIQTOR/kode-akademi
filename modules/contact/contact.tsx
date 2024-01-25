import React from 'react'
import { TbMessage } from 'react-icons/tb'

const Contact = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row justify-between py-24 text-stone-600 px-[5%] lg:px-[15%]'>
      <div className='max-w-sm w-full md:w-1/2 flex flex-col gap-4'>
        <h1 className='text-4xl font-semibold text-stone-800 flex items-center gap-4'>
          <TbMessage className='w-20 h-20 xl:w-10 xl:h-10' />
          Contact Us</h1>
        <div className='flex flex-col gap-2'>
          <label htmlFor="name">
            Username

          </label>
          <input type="text" name='name' id='name' placeholder='example: @username'
            className='py-1 px-2 outline outline-1 outline-stone-500 duration-300
            rounded-md focus:bg-stone-100
            focus:outline-2 focus:outline-blue-400' required />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">
            Email Address
          </label>
          <input type="text" name='email' id='email'
            className='py-1 px-2 outline outline-1 outline-stone-500 duration-300
            rounded-md focus:bg-stone-100
            focus:outline-2 focus:outline-blue-400' required />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id='message' required
            className='py-1 px-2 focus:bg-stone-100 rounded-md outline outline-1 outline-stone-500
          focus:outline-2 focus:outline-blue-400'></textarea>
        </div>
        <button className='w-fit py-1 pl-4 pr-7 shadow-md bg-stone-100 rounded-md duration-300 hover:opacity-70 flex gap-3 hover:gap-2 hover:pl-5'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-neutral-500 dark:text-neutral-300' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 7l5 5l-5 5"></path>
            <path d="M13 7l5 5l-5 5"></path>
          </svg>
          <div className='h-full flex gap-3 tracking-widest'>
            <div className='w-[2px] bg-neutral-400 h-4/5 my-[3px]'></div>
            Click To Send
          </div>
        </button>
      </div>
    </div>
  )
}

export default Contact