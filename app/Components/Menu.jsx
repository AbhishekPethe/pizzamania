import React from 'react'
import SectionHeading from './SectionHeading'


const menu = [
    {
        price: "49",
        name : "Buffalo"
    },
    {
        price: "38",
        name : "Palermo"
    },
    {
        price: "52",
        name : "Napolitano"
    },
    {
        price: "35",
        name : "Bologneze"
    },
    {
        price: "40",
        name : "Vegetarian"
    },
    {
        price: "47",
        name : "Cappriciosa"
    },
    {
        price: "39",
        name : "Margherita"
    },
    {
        price: "53",
        name : "Hawaiian"
    },
    {
        price: "40",
        name : "Vegan"
    },
    {
        price: "53",
        name : "Chicken"
    }
]

const Menu = () => {
  return (
      <div className='flex flex-col gap-5'>
          <SectionHeading text="order best pizza" />
          <div className='mx-3 md:mx-20 grid grid-col-1 gap-3 lg:grid-cols-2 lg:gap-x-24 '>
              {
                  menu.map((each , i) => {
                      return (
                          <div className='flex flex-col gap-1' key={i}>
                              <div className='flex flex-row gap-3 text-lg md:text-xl'>
                                  <p className='font-semibold '>{each.name}</p>
                                  <div className='border-b border-dotted border-black w-full' />
                                  <p className='font-semibold'>{each.price}$</p>
                              </div>
                              <p className='opacity-50 text-sm md:text-base'>Pizza sauce, mozzarella, bacon, onion, beef mince, capsicum, pepperoni, mushroom, olives</p>
                          </div>
                      )
                  })
              }
          </div>
      </div>
  )
}

export default Menu