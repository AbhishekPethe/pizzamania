import React from 'react'

const Navbar = () => {
  return (
      <div className='absolute top-5 z-10 w-full max-sm:hidden'>
          <div className='flex flex-row justify-between items-center mx-10 bg-[#D63920] border-black border-2 rounded-xl px-5'>
              {/* Left side */}
              <div className='flex flex-row gap-3'>
                  {
                      ["Menu", "About Us", "Contact"].map((each , i) => {
                          return (
                              <a href={`#${each}`} key={i}>{each}</a>
                          )
                      })
                  }
              </div>

              {/* Middle side  */}
              <div className='text-3xl'>
                  <p>PIZZAMANIA</p>
              </div>

              {/* right side  */}
              <div className='flex flex-row gap-3'>
              {
                      ["Login", "Register", "Cart"].map((each , i) => {
                          return (
                              <a href={`#${each}`} key={i}>{each}</a>
                          )
                      })
                  }
              </div>
              

          </div>
      </div>
  )
}

export default Navbar
