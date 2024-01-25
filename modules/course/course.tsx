import React from 'react'
import { SiLaravel, SiReact, SiNextdotjs, SiVuedotjs, SiCodeigniter, SiAngular, SiAngularjs } from 'react-icons/si'

const Course = () => {
  return (
    <div className='p-14 flex flex-col gap-7'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-5xl font-bold text-blue-500'>All Our Partner Course</h1>
        <p className='text-xl font-medium'>This is list of Partner Course</p>
      </div>
      <div className='grid grid-cols-3 gap-x-7 gap-y-20 py-20'>
        <a href='https://www.udemy.com/topic/laravel/' className='rounded-md shadow-lg border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiLaravel className='fill-red-600 w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>Laravel (Backend) Course</h4>
          <p className='text-center'>Laravel is a powerful PHP framework that streamlines the process of web development, and our Laravel course is tailored to equip developers with the knowledge and tools needed to harness its full potential.</p>
        </a>
        <a href='https://www.codecademy.com/learn/react-101' className='rounded-md shadow-lg border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiReact className='fill-blue-400 w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>ReactJS (Frontend) Course</h4>
          <p className='text-center'>ReactJS is a cutting-edge JavaScript library for building user interfaces, and our ReactJS course is designed to empower developers with the skills needed to create dynamic and responsive web applications. Throughout this course, participants will delve into the fundamentals of ReactJS, understanding concepts such as components, state, and props.</p>
        </a>
        <a href='https://nextjs.org/learn' className='rounded-md shadow-lg border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiNextdotjs className='w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>NextJS (Frontend) Course</h4>
          <p className='text-center'>NextJS is a React framework that enables the development of server-rendered React applications with ease. In our NextJS course, participants will explore the benefits of server-side rendering, static site generation, and routing in the context of React applications.</p>
        </a>
        <a href='https://vuejs.org/' className='rounded-md shadow-lg border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiVuedotjs className='fill-green-700 w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>VueJS (Frontend) Course</h4>
          <p className='text-center'>Course VueJS dirancang untuk membekali peserta dengan keterampilan pengembangan web menggunakan VueJS, sebuah framework JavaScript yang ringan dan sangat fleksibel untuk membangun antarmuka pengguna yang responsif dan dinamis.</p>
        </a>
        <a href='https://codeigniter.com/' className='rounded-md shadow-lg border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiCodeigniter className='fill-red-700 w-20 h-20' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>Codeigniter (Backend) Course</h4>
          <p className='text-center'>Course Codeigniter ditujukan untuk peserta yang ingin menguasai pengembangan web dengan menggunakan framework PHP Codeigniter. Peserta akan diajarkan konsep dasar MVC (Model-View-Controller), routing, query database, serta bagaimana membangun aplikasi web yang efisien dan mudah dipelihara.</p>
        </a>
        <a href='https://angularjs.org/' className='rounded-md shadow-lg border p-7 relative flex flex-col pt-10 items-center hover:scale-105 hover:opacity-70 duration-300 gap-2'>
          <div className='absolute p-4 bg-white shadow-xl rounded-xl -top-16'>
            <SiAngularjs className='w-20 h-20 fill-red-600' />
          </div>
          <h4 className='font-semibold text-2xl pt-16'>AngularJS (Frontend) Course</h4>
          <p className='text-center'>Course AngularJS dirancang untuk membimbing peserta dalam memahami dan menguasai pengembangan web dengan menggunakan framework JavaScript AngularJS. Peserta akan belajar konsep dasar seperti two-way data binding, dependency injection, dan modularitas melalui struktur MVC.</p>
        </a>
      </div>
    </div>
  )
}

export default Course