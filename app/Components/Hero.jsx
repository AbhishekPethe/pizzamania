/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import React from 'react'
import { oleo_script, salsa } from '../layout'


const Hero = () => {
  return (
    <div className='w-screen h-[100vh] md:h-[70vh] lg:h-[100vh] relative text-white '>
          <div className='absolute top-0 w-full h-full -z-10 '>
              <img src="/hero-bg-1.webp" alt="" className='w-full h-full object-cover' />
          </div>

          <div className={`pt-44 min-[800px]:pl-20 flex flex-col justify-start items-start gap-5 text-5xl md:text-7xl font-extrabold  [&>*:nth-child(n)]:shadow-xl ${oleo_script.className} drop-shadow-[0_50px_50px_rgba(0,0,0,0.90)]`}>
              <p>ALL THE BEST</p>
              <p>THINGS ARE</p>
              <p>ROUND</p>
              <button className={`text-xl button ${salsa.className} mt-4`}>Order Now</button>
          </div>


    </div>
  )
}

export default Hero