/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'


const data = [
    {
        img: "/tomato.webp",
        header: "Tomatoes",
        text: "Vesuviani tomatoes that are grown in the mineral-rich volcanic soil of Mount Vesuvius, which is famous for creating the most authentic Italian sauces,"
    },
    {
        img: "/fresh.webp",
        header: "Fresh Ingredients",
        text: "We are committed to bringing the freshest and best quality seafood to our customers everywhere in USA. Order direct to your door today!"
    },
    {
        img: "/oil.webp",
        header: "Italian Oil",
        text: "Olive oil, is a primary ingredient in Italian and Mediterranean cuisine. It can be used to season dishes and appetisers"
    },
    {
        img: "/thumb.webp",
        header: "Top Chefs",
        text: "With national pride and the title of World All-Stars on the line, the chefs are at the top of their game as they compete on a global stage."
    },

]

const Ingredients = () => {
    return (
        <div className='pt-10 md:pt-20 w-screen bg-[#F8F7F2] flex flex-col md:flex-row'>
            <div className='md:w-[50%] mb-5 relative'>
                <img src="/rain.webp" alt="img" className='w-full h-full object-cover' />
                <img src="/arrow.webp" alt="arrow" className='absolute top-10 left-5 lg:left-20 w-14 h-28' />
            </div>
            <div className='flex flex-col gap-3 md:gap-6'>
                <SectionHeading text="feed the beast with a pizza feast" />
                <div className='px-4 flex flex-col gap-14 md:flex-row'>
                    <div className='flex flex-col gap-8'>
                        {
                            data.slice(0,2).map((each , i) => {
                                return (
                                    <div className='flex flex-col gap-3' key={i}>
                                        <Image
                                            src={each.img}
                                            alt='img'
                                            width={50}
                                            height={50}
                                            className=''
                                        />
                                        <h1 className='font-semibold w-fit text-xl'>{each.header}</h1>
                                        <p className='w-full md:w-[300px] opacity-60'>{each.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='max-md:hidden flex flex-col gap-4 md:gap-8 pt-16'>
                        {
                            data.slice(2, 4).map((each, i) => {
                                return (
                                    <div className='flex flex-col gap-2' key={i}>
                                        <Image
                                            src={each.img}
                                            alt='img'
                                            width={50}
                                            height={50}
                                            className=''
                                        />
                                        <h1 className='font-semibold w-fit text-xl'>{each.header}</h1>
                                        <p className='w-full md:w-[300px] opacity-60'>{each.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

             
            </div>
        </div>
    )
}

export default Ingredients