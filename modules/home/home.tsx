import React from 'react'
import Header from './elements/header'
import Section_1 from './elements/section-1'
import Section_2 from './elements/section-2'
import Section_3 from './elements/section-3'
import Section_4 from './elements/section-4'
import Section_5 from './elements/section-5'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
      </main>
    </div>
  )
}

export default Home