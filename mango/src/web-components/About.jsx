import React from 'react'
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';

const About = () => {
  return (
    <div id="about" className='lg:px-[9rem] px-5 w-full mt-20 lg:mb-60 mb-36'>
        <h1 className='text-4xl font-bold text-center mb-20'>Our Holy Grail</h1>

        <div className='lg:flex items-center justify-between space-y-6 lg:space-y-0 mb-20 lg:space-x-20'>
            <div className='w-full h-[330px] rounded-md bg-white p-5 hover:shadow-sm hover:shadow-black cursor-pointer'>
                <img src={icon1} width={70} height={70} />
                <h1 className='text-lg font-semibold my-6'>Computer vision</h1>
                <p className='text-[#1111118b]'>It involves the development of algorithms and models that can analyze and understand visual information, and can be applied to a wide range of tasks, such as object recognition, image understanding, and video analysis.</p>
            </div>
            <div className='w-full h-[330px] rounded-md bg-white p-5 hover:shadow-sm hover:shadow-black cursor-pointer'>
                <img src={icon2} width={70} height={70} />
                <h1 className='text-lg font-semibold my-6'>Machine Learning</h1>
                <p className='text-[#1111118b]'>It uses algorithms to learn from data, without being explicitly programmed. This allows the computer to find hidden insights without being told where to look.</p>
            </div>
            <div className='w-full h-[330px] rounded-md bg-white p-5 hover:shadow-sm hover:shadow-black cursor-pointer'>
                <img src={icon3} width={70} height={70} />
                <h1 className='text-lg font-semibold my-6'>Artificial Intelligence</h1>
                <p className='text-[#1111118b]'>It includes learning (the acquisition of information and rules for using the information), reasoning (using the rules to reach approximate or definite conclusions), and self-correction.</p>
            </div>
        </div>

    </div>
  )
}

export default About