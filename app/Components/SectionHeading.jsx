import React from 'react'
import { oleo_script } from '../layout'


const SectionHeading = ({ text }) => {
  return (
      <div className={`${oleo_script.className} text-3xl text-center md:text-5xl text-[#D63920] md:w-[500px] uppercase`}>
          <p>{text}</p>
      </div>
  )
}

export default SectionHeading