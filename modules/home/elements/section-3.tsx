import React from 'react'

const Section_3 = () => {
  return (
    <section className='px-14 py-20'>
      <div className='text-center flex flex-col gap-4 pb-20'>
        <h4 className='text-6xl font-bold'>What our students say</h4>
        <p className='text-xl px-32'>We created a platform we wish we had as students, Join thousands of students who have used our platform to excel at school.</p>
      </div>
      <div className='grid grid-cols-3 gap-7'>
        <div className='p-7 flex flex-col justify-between gap-7 border rounded-xl'>
          <p>I stumbled upon Code Academy when I was looking for a comprehensive platform to learn web development. The ReactJS course not only deepened my understanding of front-end development but also provided practical, hands-on experience. The interactive lessons and real-world projects made the learning process engaging and rewarding. Code Academy's approach to education is truly commendable, and it has been an invaluable resource on my journey to becoming a skilled developer.</p>
          <div className=' flex flex-col justify-start'>
            <span>John Smith</span>
            <span>United States</span>
          </div>
        </div>
        <div className='p-7 flex flex-col justify-between gap-7 border rounded-xl'>
          <p>As a student from India, finding a reliable platform to learn web development with a global perspective was crucial for me. Code Academy's NextJS and Tailwind courses stood out for their depth and relevance. The courses not only equipped me with the latest technologies but also emphasized best practices. The supportive community and responsive instructors at Code Academy made my learning experience enjoyable. Now, armed with new skills, I feel confident navigating the world of modern web development.</p>
          <div className=' flex flex-col justify-start'>
            <span>Aisha Patel</span>
            <span> India</span>
          </div>
        </div>
        <div className='p-7 flex flex-col justify-between gap-7 border rounded-xl'>
          <p>Hola from Mexico! I enrolled in Code Academy's Laravel and Bootstrap courses to enhance my backend development skills and create visually appealing user interfaces. The courses provided a well-structured curriculum, and the real-world projects allowed me to apply what I learned. The combination of Laravel's efficiency and Bootstrap's responsiveness has transformed the way I approach web development projects. Gracias to Code Academy for providing a platform that caters to the global coding community!</p>
          <div className=' flex flex-col justify-start'>
            <span>Carlos Rodriguez</span>
            <span>Mexico</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section_3