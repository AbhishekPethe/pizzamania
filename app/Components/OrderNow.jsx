import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeading'
import { oleo_script } from '../layout'
import Heading from './Heading'

const OrderNow = () => {
  return (
      <div className='grid grid-cols-1 md:grid-cols-3 border-b-2 border-[#D63920]'>
          <div className=''>
              <Image
                  src={"/order-1.webp"}
                  alt='img'
                  width={2000}
                  height={2000}
                  className='w-full h-full object-cover'
                  
              />
          </div>
          <div className='relative flex flex-col justify-center items-center gap-2 max-sm:py-10'>
              <Heading text="order now" />
              <p className='opacity-60'>Order the best pizza in Town !</p>
              <button className='button'>order now</button>
              <Image
                  src={"/pizza_layer.webp"}
                  alt='pizza_layer'
                  width={150}
                  height={150}
                  className='absolute -bottom-10 -left-10 hidden lg:block'
              />
          </div>
          <div className=''>
          <Image
                  src={"/order-2.webp"}
                  alt='img'
                  width={2000}
                  height={2000}
                  className='w-full h-full object-cover'
                  
              />
          </div>
      </div>
  )
}

export default OrderNow