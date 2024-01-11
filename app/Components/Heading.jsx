import React from 'react'
import { oleo_script } from '../layout'

const Heading = ({text}) => {
  return (
      <h1 className={`${oleo_script.className} text-[#D63920] uppercase text-2xl md:text-3xl lg:text-4xl`}>{text}</h1>
  )
}

export default Heading