import React from 'react'
import { oleo_script } from '../layout'

const Banner = ({bgcolor , textcolor}) => {
  return (
      <div className={`${oleo_script.className} text-2xl md:text-5xl bg-[${bgcolor}] text-[${textcolor}] w-screen uppercase h-fit border-y-4 border-[${textcolor}] overflow-hidden relative whitespace-nowrap`}>
          <p className='py-4 w-[150vw] -ml-7'>we love pizza * we love fastfood * we love pizza * we love fastfood * we love pizza *</p>
      </div>
  )
}

export default Banner