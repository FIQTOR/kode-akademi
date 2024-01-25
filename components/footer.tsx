import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t px-14 py-14 bg-black text-white'>
      <div className='flex justify-around w-full'>

        <div>
          <span className='font-bold text-xl'>Navigation</span>
          <ul className='flex flex-col gap-1 pt-2 underline'>
            <li className='hover:text-neutral-400 duration-200'>
              <Link href='/'>Homepage</Link>
            </li>
            <li className='hover:text-neutral-400 duration-200'>
              <Link href='/about'>About</Link>
            </li>
            <li className='hover:text-neutral-400 duration-200'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className='hover:text-neutral-400 duration-200'>
              <Link href='/blog'>Our Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className='font-bold text-xl'>Most Popular Framework</span>
          <ul className='flex flex-col gap-1 pt-2 underline'>
            <li className='hover:text-neutral-400 duration-200'>
              <a href='https://laravel.com/' target='_blank'>Laravel</a>
            </li>
            <li className='hover:text-neutral-400 duration-200'>
              <a href='https://react.dev/' target='_blank'>ReactJS</a>
            </li>
            <li className='hover:text-neutral-400 duration-200'>
              <a href='https://codeigniter.com/' target='_blank'>Codeigniter(CI)</a>
            </li>
            <li className='hover:text-neutral-400 duration-200'>
              <a href='https://vuejs.org/' target='_blank'>VueJS</a>
            </li>
          </ul>
        </div>

        <div>
          <span className='font-bold text-xl'>Most popular programming <br /> languages</span>
          <div className='flex justify-between underline'>
            <ul className='flex flex-col gap-1 pt-2'>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/Python_(programming_language)' target='_blank'>Python</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank'>Javascript</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/Java_%28programming_language%29' target='_blank'>Java</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/HTML' target='_blank'>HTML</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://id.wikipedia.org/wiki/Cascading_Style_Sheets' target='_blank'>CSS</a>
              </li>
            </ul>
            <ul className='flex flex-col gap-1 pt-2'>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29' target='_blank'>C#</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/SQL' target='_blank'>SQL</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/C_(programming_language)' target='_blank'>C</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/C%2B%2B' target='_blank'>C++</a>
              </li>
              <li className='hover:text-neutral-400 duration-200'>
                <a href='https://en.wikipedia.org/wiki/PHP' target='_blank'>PHP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='w-full text-center'>
        <span>&copy; 2024 Taufiiqul Hakim | <a href="https://fiqtor.xyz" className='text-blue-400 hover:opacity-70'>Portfolio Author</a></span>
      </div>

    </footer>
  )
}

export default Footer