import Link from 'next/link'
import React from 'react'
import { SiLaravel, SiNextdotjs, SiReact } from 'react-icons/si'
import { TbEye } from 'react-icons/tb'

const Section_2 = () => {

  return (
    <section id='course' className='px-14 py-10'>
      <div className='text-center flex flex-col gap-4 pb-28'>
        <h2 className='text-6xl font-bold'>Learn more in less time</h2>
        <p className='text-xl px-32'>Our content is written by high achieving teachers and super powered by the latest learning technology.</p>
      </div>

      <div className='grid grid-cols-3 gap-7'>
        <a href='https://www.udemy.com/topic/laravel/' className='rounded-md border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiLaravel className='fill-red-600 w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>Laravel Course</h4>
          <p className='text-center'>Laravel is a powerful PHP framework that streamlines the process of web development, and our Laravel course is tailored to equip developers with the knowledge and tools needed to harness its full potential.</p>
        </a>
        <a href='https://www.codecademy.com/learn/react-101' className='rounded-md border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiReact className='fill-blue-400 w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>ReactJS Course</h4>
          <p className='text-center'>ReactJS is a cutting-edge JavaScript library for building user interfaces, and our ReactJS course is designed to empower developers with the skills needed to create dynamic and responsive web applications. Throughout this course, participants will delve into the fundamentals of ReactJS, understanding concepts such as components, state, and props.</p>
        </a>
        <a href='https://nextjs.org/learn' className='rounded-md border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiNextdotjs className='w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>NextJS Course</h4>
          <p className='text-center'>NextJS is a React framework that enables the development of server-rendered React applications with ease. In our NextJS course, participants will explore the benefits of server-side rendering, static site generation, and routing in the context of React applications.</p>
        </a>
      </div>

      <Link href={'/course'} className='w-full flex justify-center py-7 text-xl hover:opacity-70 text-blue-400 items-center gap-4'>
        <TbEye className='w-7 h-7' />
        See all course
      </Link>
    </section>
  )
}

export default Section_2