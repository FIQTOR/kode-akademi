import React from 'react'

const Section_1 = () => {
  return (
    <section className='px-14 py-10 text-white'>
      <div className='bg-blue-600 rounded-xl py-10 px-20
        flex justify-between'>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-4xl font-bold'>100+</span>
          <span>Membership</span>
        </div>
        <hr />
        <div className='flex flex-col items-center gap-2'>
          <span className='text-4xl font-bold'>10+</span>
          <span>Partnership</span>
        </div>
        <hr />
        <div className='flex flex-col items-center gap-2'>
          <span className='text-4xl font-bold'>100+</span>
          <span>Video tutorials</span>
        </div>
        <hr />
        <div className='flex flex-col items-center gap-2'>
          <span className='text-4xl font-bold'>100+</span>
          <span>Documentation Page</span>
        </div>
      </div>
    </section>
  )
}

export default Section_1