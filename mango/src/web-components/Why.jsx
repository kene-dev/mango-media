import React from 'react'

const Why = () => {
  return (
    <div className="lg:px-[64px] z-10 px-5 py-10 lg:py-24 bg-cover bg-no-repeat why bg-center h-auto w-full grid">
        <div className=' flex flex-col w-full'>
            <h1 style={{textShadow:'2px 2px 1px #FF6700'}} className='text-white lg:text-center text-4xl py-8'>About Us</h1>
            <p className='lg:text-center text-white leading-10'>Mango Space uses computer vision and leverages the power of AI and machine learning to analyze and interpret visual data from the world around us, with the goal of helping advertisers deliver more targeted, personalized, and effective advertising campaigns.<br />
            By using advanced algorithms and data analysis techniques, we are able to understand and analyze the behaviors, interests, and preferences of consumers, and to use this information to deliver relevant ads to the right audience at the right time.<br />
            In addition, we use computer vision to measure and optimize the performance of campaigns in real-time, helping advertisers to increase the return on investment of their advertising budgets.<br/>
            Our team is made of world class professionals and enthusiasts who specialize in utilizing the power of Artificial Intelligence (AI) to drive growth, generate revenue and improve business operations.
            </p>
        </div>

        <div className=' w-full  lg:flex items-center lg:justify-between text-left my-14'>
            <div className='w-full lg:pr-[15rem]'>
                <h1 style={{textShadow:'2px 2px 1px #FF6700'}} className='text-white text-left text-4xl py-8'>What We Do</h1>
                <p className='text-left text-white leading-10'>We noticed that there is a problem in getting live accurate data for the more traditional forms of marketing, and we have spent years building and refining a solution for the industry using artificial intelligence and BI analysis. Some features of what we offer includes;</p>
            </div>
            <div id='we' className='w-full flex flex-col'>
                <div className='lg:px-[7rem] mb-5'>
                    <h1 className='text-[#FF6700] text-left text-2xl py-5'>Artificial Intelligence</h1>
                    <p className='text-left text-white leading-10'>We have a computer vision algorithm that tracks and collect live data on customer ad engagements.</p>
                </div>

                <div className='lg:px-[7rem] mb-5'>
                    <h1 className='text-[#FF6700]  text-left text-2xl py-5'>Customization</h1>
                    <p className='text-left text-white leading-10'>We work closely with
                    businesses to understand their specific
                    needs and goals, and design a system that
                    aligns with their brand and target audience.
                    </p>
                </div>

                <div className='lg:px-[7rem] mb-5'>
                    <h1 className='text-[#FF6700]  text-left text-2xl py-5'>Integration</h1>
                    <p className='text-left text-white leading-10'>Our algorithm is compactable
                        with all frameworks and easily scalable to
                        meet your business needs.
                    </p>
                </div>

                <div className='lg:px-[7rem] mb-5'>
                    <h1 className='text-[#FF6700]  text-left text-2xl py-5'>BI Analytics</h1>
                    <p className='text-left text-white leading-10'>We provide businesses with
                        detailed analytics on the performance of
                        their ad campaigns, including metrics such
                        as conversion rate, customer behavioral
                        patterns, gender segmentation analysis etc.
                    </p>
                </div>
            </div>

        </div>

         <div id='us' className='w-full flex flex-col'>
            <h1 style={{textShadow:'2px 2px 1px #FF6700'}} className='text-white  lg:text-center text-4xl py-8'>Why Us</h1>
            <p className='lg:text-center text-white leading-10'>In a crowded and complex advertising landscape, advertisers face the challenge of delivering relevant and engaging messages to their target audience and tracking performance in real-time. Mango Space uses advanced computer vision algorithms and BI analysis techniques to help advertisers target, personalize, and optimize advertising campaigns.<br /> <br /> 
            By using AI, Mango Space is able to help our clients deliver more relevant and effective ads to the right audience at the right time, and to measure and optimize the performance of campaigns in real-time.<br />
            This can position our clients as the go-to advertiser to help businesses increase the return on investment of their advertising budgets and to build more meaningful and engaging relationships with their audience.<br />
            Businesses are well-positioned to benefit from the growing demand for data-driven and personalized advertising and our mission is for our clients  to be  poised at the  forefront of this technology.<br />
            </p>
        </div>
    </div>
  )
}

export default Why