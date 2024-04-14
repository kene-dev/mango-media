import React from 'react'

const Footer = () => {
  return (
    <div className='lg:px-[64px] lg:mx-[64px] h-[67px] flex items-center mx-5 justify-between border-t-[1px] border-black '>
        <p className=''>&copy; Vaderverse Limited</p>

        <ul className='flex lg:space-x-5 space-x-3 text-sm'>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linked In</li>
        </ul>
    </div>
  )
}

export default Footer