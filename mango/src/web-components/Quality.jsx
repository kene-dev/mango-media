import React from 'react'
import quality from '../assets/quality.png'

const Quality = () => {
  return (
    <div className='lg:px-[64px] gap-20 lg:grid grid-cols-2 px-5 h-full w-full my-28 lg:my-48'>
        <div className=' w-full h-full mb-5 lg:mb-0'>
            <h1 className='text-4xl font-bold '> Quality Over <br /> Quantity </h1>
            <p className='mt-10  leading-9 '>
                In advertising, focusing on quality rather than quantity can lead to more effective
                and memorable campaigns.<br />
                With the help of Artificial intelligence and computer vision, Mango space gives our
                clients high-quality data and targeting the right audience, businesses can generate
                more engagement and better results.<br />
                Additionally, quality advertising can create a positive brand image and increase
                brand loyalty, leading to long-term success.
            </p>
        </div>

        <div className='h-full w-full'>
            <img loading='lazy' className='lg:object-contain object-cover w-full h-full' src={quality} alt="visual display of Mango space dashboard" />
        </div>
    </div>
  )
}

export default Quality