import React from 'react'
import line from '../assets/line.svg'


const Contact = () => {
  return (
    <div id='contact' className='lg:px-[64px] lg:grid grid-cols-2 px-5 h-full w-full my-20'>
        <div className=' flex flex-col items-center justify-center mb-10 lg:mb-0'>
            <h1 style={{textShadow:'2px 2px 2px #FF6700'}} className='text-5xl font-bold'>Get In <br/>Touch</h1>
            <img src={line} className='w-20 h-40 lg:-ml-16 my-3' />
            <p className='text-left'>+2349015288349</p>
            <p className='text-left'>Contact@mangospace.tech</p>
        </div>

        <div>
            <form className='lg:px-[10rem] w-full'>
                <div className='flex flex-col mb-2 '>
                <label htmlFor='name' className='text-sm my-1'> Full name</label>
                <input type='text' id='name' className='w-full text-sm outline-none placeholder-[#00000084] bg-transparent p-3 mt-2 rounded-lg border-[1px] border-black' placeholder='Enter Full Name' />
                </div>

                <div className='flex flex-col mb-2'>
                <label htmlFor='phone' className='text-sm my-1'> Phone number</label>
                <input type='tel' id='phone' className='w-full text-sm  outline-none placeholder-[#00000084] bg-transparent p-3 mt-2 rounded-lg border-[1px] border-black' placeholder='Enter phone number' />
                </div>

                <div className='flex flex-col mb-2'>
                <label className='mb-2 text-sm'>Details of request</label>
                <textarea rows="12" cols="50" placeholder='Type your message here' className='w-full bg-transparent text-sm p-3 mt-2 rounded-lg border-[1px] border-black outline-none'>
                
                </textarea>
                </div>

                <button type='button'  className='bg-black text-white text-sm font-semibold mt-1 p-3 w-[6rem] h-auto px-3 rounded-lg'>
                submit
                </button>
            </form>
        </div>
        
    </div>
  )
}

export default Contact