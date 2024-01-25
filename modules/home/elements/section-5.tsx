import React from 'react'

const Section_5 = () => {
  return (
    <section className='flex h-[400px] px-14 py-20'>
      <div className='w-1/2 h-full flex justify-center'>
        <img src="/imgs/brain.png" alt="" />
      </div>
      <div className='w-1/2 h-full flex flex-col gap-4'>
        <h4 className='text-6xl font-bold'>Learn anytime, anywhere</h4>
        <p className='text-xl w-96'>Learning on the go? Take your revision offline with our amazing website apps</p>
      </div>
      <div className='w-96 h-96 bg-blue-500 absolute rounded-full blur-[200px] z-[-1]'></div>
    </section>
  )
}

export default Section_5