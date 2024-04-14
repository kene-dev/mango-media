import React from 'react'
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <div id='hero' className='w-full lg:grid grid-cols-2 lg:px-[64px] px-5 lg:pt-[75px] lg:mt-0 pt-[30px]'>
        <div className='h-full w-full mb-5 lg:mb-0'>
            <div className=' flex flex-col space-y-2 text-5xl mt-14'>
                <h1 className=''>Advertising Meets </h1>
                <p style={{textShadow:'2px 2px 2px #FF6700'}}>Artificial Intelligence</p>
            </div>

            <div className='lg:w-[630px] mt-14'>
                <p className='leading-8 font-light text-[#1111118b] text-lg'>
                We at Mango Space have come together to revolutionize the way companies
                reach and target consumers. Our product allows you to analyze large amounts of
                data and make predictions about consumer behavior, creating more effective campaigns<br />
                for your business. <br />
                We make use of Machine Learning, Computer Vision and Artificial Intelligence to achieve
                higher conversion rates and better targeting of relevant audiences.
                </p>
            </div>

            <div className='mt-14'>
                <form className='flex items-center space-x-3'>
                    <input type='email' className='w-full lg:w-[340px] p-2 rounded-md text-sm outline-none' placeholder='Enter your Email' />
                    <button type='button' className='bg-black text-white w-auto h-auto p-2 rounded-md'>Let's work together</button>
                </form>
            </div>
        </div>

        <div className='h-full w-full'>
            <img loading='lazy' width='100%' height="100%" className='object-cover' src={hero} alt="Female AI robot with camera lenses for eyes" />
        </div>

    </div>
  )
}

export default Hero