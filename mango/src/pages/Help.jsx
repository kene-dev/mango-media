import React from 'react'
import help from '../assets/help.png'

const Help = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='w-full px-10'>
      <div className='md:grid md:grid-cols-3 h-full w-full'>
        <div className='w-full md:h-full pt-20 px-5'>
          <div className='mb-14'>
            <p className='font-bold text-2xl '>Need Support</p>
            <p className='font-light text-base '>Fill in the details</p>
          </div>
          <form>
            <div className='flex flex-col mb-2'>
              <label htmlFor='name' className='text-sm my-1'> Full name</label>
              <input type='text' id='name' required className='w-full text-sm outline-none placeholder-[#00000084] bg-transparent p-3 mt-2 rounded-lg border-[1px] border-black' placeholder='Enter Full Name' />
            </div>

            <div className='flex flex-col mb-2'>
              <label htmlFor='email' className='text-sm my-1'> Email</label>
              <input type='email' id='email' className='w-full  text-sm outline-none placeholder-[#00000084] bg-transparent p-3 mt-2 rounded-lg border-[1px] border-black' placeholder='Enter e-mail address' />
            </div>

            <div className='flex flex-col mb-2'>
              <label htmlFor='phone' className='text-sm my-1'> Phone number</label>
              <input type='tel' id='phone' className='w-full text-sm  outline-none placeholder-[#00000084] bg-transparent p-3 mt-2 rounded-lg border-[1px] border-black' placeholder='Enter phone number' />
            </div>

            <div className='flex flex-col mb-2'>
              <label className='mb-2 text-sm'>Details of request</label>
              <textarea rows="5" cols="50" placeholder='Please type in the details of your request' className='w-full bg-transparent text-sm p-3 mt-2 rounded-lg border-[1px] border-black outline-none'>
              
              </textarea>
            </div>

            <button type='submit' onSubmit={formSubmit} className='bg-black text-white text-sm font-semibold mt-1 p-3 w-[6rem] h-auto px-3 rounded-lg'>
              submit
            </button>
          </form>
        </div>

        <div className='w-full col-span-2 md:h-full flex items-center justify-center p-4'>
          <img src={help}  width="100%" height='80%' alt='help' />
        </div>
      </div>
    </div>
  )
}

export default Help