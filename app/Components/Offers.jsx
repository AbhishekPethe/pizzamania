import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeading'
import Heading from './Heading'

const Offers = () => {
  return (
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 border-2 border-[#D63920] text-center'>
          
              <Image
                  src={"/dec-1.webp"}
                  alt='dec-1'
                  width={900}
                  height={900}
                  className='w-full h-full object-cover'
              />
          <div className='relative flex flex-col gap-5 lg:gap-10 justify-center items-center'>
              <Image
                  src={"/love.webp"}
                  alt=''
                  width={70}
                  height={70}
                  className='absolute right-20 top-10 hidden lg:block'
              />
                  <Heading text="two pizzas for the price of one" />
                  <p className='opacity-70 md:w-[400px]'>You want the best bang for your buck, but you may want the most amount of pizza too. Come here and get it!</p>
                  <ul className='grid gap-2 grid-cols-2 gap-x-10 list-disc'>
                      {
                          ["Cappriciosa", "Vesuvio", "Stagione", "Funghi Rosha", "Pepperoni", "Stivale"].map((each , i) => {
                              return (
                                  <li className='text-semibold' key={i}>{each}</li>
                              )
                          })
                      }
                  </ul>
            </div>

         
          <div className='relative max-sm:mt-4 flex flex-col gap-5 md:gap-10 justify-center items-center'>
              <Image
                  src={"/grape-1.webp"}
                  alt=""
                  width={100}
                  height={100}
                  className='absolute bottom-20 right-20 hidden lg:block'
              /> 
                  <Heading text="the speciality of the house" />
                  <p className='opacity-70 md:w-[400px]'>Craving a cheesy, saucy slice of pizza while you’re at out Resort? We’ve rounded up the best places to find pizza in the World for you!</p>
                  
              </div>
              <Image
                  src={"/dec-2.webp"}
                  alt='dec-1'
                  width={900}
                  height={300}
                  className='w-full h-full object-cover'
              />
              
        
      </div>
  )
}

export default Offers