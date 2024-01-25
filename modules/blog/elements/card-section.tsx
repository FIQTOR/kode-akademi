import { Blogs } from '@/common/blogs'
import Link from 'next/link'
import React from 'react'

const CardSection = () => {
  return (
    <section className='p-14 flex flex-col gap-7'>
      <div className='flex flex-col gap-2 pl-14'>
        <h1 className='text-5xl font-bold text-blue-500'>Our Blog</h1>
        <p className='text-xl font-medium'>This is list of our blog</p>
      </div>
      <ul>
        {Blogs.map((blog: any, index: number) => (
          <Link href={`/blog/${blog.titleSlug}`} key={index} className='flex flex-col gap-4 border py-7 px-14 rounded-xl shadow-md hover:scale-[102%] duration-300'>
            <span className='font-bold text-4xl w-full max-w-[800px]'>{blog.title}</span>
            <span className='text-xl'>{blog.shortDescription}</span>
            <span className='opacity-70'>Hover this box and click to learn more</span>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default CardSection