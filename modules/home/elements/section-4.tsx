import React from 'react'

const Section_4 = () => {
  return (
    <section className='p-20 flex flex-col items-center gap-4'>
      <h2 className='text-6xl font-bold'>Partnership</h2>
      <p className='w-[700px] text-center text-xl'>The learning path will help you learn at the Academy with a curriculum built with well-known industry players.</p>
      <div className='flex gap-4 justify-center items-center pt-7'>
        <img src="/imgs/google-developer.png" alt="" className='h-12' />
        <img src="/imgs/google-cloud.png" alt="" className='h-20 pl-10' />
        <img src="/imgs/google-for-education.jpg" alt="" className='h-20' />
      </div>
    </section>
  )
}

export default Section_4