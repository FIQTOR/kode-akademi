import React from 'react'

const Section_1 = () => {
  return (
    <section className='p-20 flex'>
      <div className='w-1/2 flex flex-col gap-7'>
        <h2 className='text-6xl font-bold'>What it is?</h2>
        <p className='text-xl'>Welcome to Code Academy, where innovation meets education in the dynamic world of web development. Our mission is to empower individuals with the skills and knowledge necessary to thrive in the ever-evolving landscape of technology. With a focus on excellence, our carefully crafted courses provide a comprehensive learning experience for both beginners and experienced developers alike.
        </p>
        <p className='text-xl'>
          Join Code Academy on your journey to becoming a proficient web developer. Whether you're a novice eager to learn the ropes or an experienced coder seeking to expand your skill set, our courses provide a supportive and immersive learning environment. Elevate your coding journey with Code Academy, where expertise meets education, and innovation meets implementation.
        </p>
        <p className='text-xl'>
          Our commitment to excellence extends beyond the latest trends, as we recognize the importance of foundational knowledge. Delve into the fundamentals of web development with our Codeigniter course, a PHP framework that emphasizes simplicity and ease of use. Our courses are crafted with a hands-on approach, combining theoretical understanding with practical application, ensuring that you not only comprehend the concepts but also gain the skills to implement them effectively.
        </p>
        <p className='text-xl'>
          At Code Academy, we take pride in offering a diverse range of courses that cater to the demands of modern web development. Dive into the world of front-end frameworks with our ReactJS and NextJS courses, designed to equip you with the expertise to build dynamic and interactive user interfaces. Explore the robust capabilities of Laravel, a PHP framework that streamlines backend development, or master the art of creating responsive and visually appealing designs with our Tailwind and Bootstrap courses.
        </p>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <img src="/imgs/logo-aboutus.png" alt="" />
      </div>
    </section>
  )
}

export default Section_1