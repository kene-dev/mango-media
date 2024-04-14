import React, { useState } from 'react'
import logo from "../assets/logo.svg";
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import {Link} from 'react-scroll'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {
            id:2,
            text:"Home",
            url:"hero",
        },
        {
            id:3,
            text:"About us",
            url:"about",
        },
        {
            id:4,
            text:"What we do",
            url:"we",
        },
        {
            id:5,
            text:"Why us",
            url:"us",
        },
        {
            id:6,
            text:"Contact us",
            url:"contact",
        },
    ]

    const [color, setColor] = useState(null)

    const toggler = () => {
        if(window.scrollY >= 60){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', toggler);

    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className={color ? 'fixed h-[67px] w-full bg-[#EEEEEE] shadow-sm shadow-black px-4 md:px-10 lg:px-[64px] lg:pt-2 flex justify-between items-center z-30' : 'fixed h-[67px] w-full bg-[#EEEEEE]  px-4 md:px-10 lg:px-[64px] lg:pt-2 flex justify-between items-center z-30'}>
        <div className='z-10'>
            <Link to='hero' spy={true} smooth={true} offset={50} duration={500}>
                <img style={{padding:'0'}} width={200} height={200} className="md:h-[90px] object-contain"  src={logo} alt='logo' />
            </Link>
        </div>

        <div className='lg:flex items-center space-x-10'>
            <ul className='hidden viga cursor-pointer text-sm lg:flex md:w-80 justify-between lg:w-[40em] text-[#1111118b] uppercase font-normal'>
                    <Link to='hero' spy={true} smooth={true} offset={50} duration={500}  className='mr-7 border-b-2 border-transparent' >Home </Link>
                    <Link to='about' spy={true} smooth={true} offset={50} duration={500}  className='mr-7 ' >About us  </Link>
                    <Link to='we' spy={true} smooth={true} offset={50} duration={500}  className='mr-7 ' >What we do </Link>
                    <Link to='us' spy={true} smooth={true} offset={-50} duration={500}  className='mr-7' >Why us </Link>
                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}  className='mr-7' >Contact us </Link>
            </ul>
            
            <NavLink to='/login' className='hidden lg:block w-auto p-2 rounded-md font-bold px-5 bg-black text-white text-sm cursor-pointer'>
                Login
            </NavLink>
        </div>

        <div className='lg:hidden z-10'>
        { nav ? <HiMenuAlt3 className='h-8 w-8' style={{color:"#FF6700"}} onClick={handleNav} /> :  <AiOutlineClose className='h-8 w-8' style={{color:"#FF0528"}} onClick={handleNav} /> } 
        </div>
    
  
        <ul className={ !nav ? "lg:hidden pt-16 bg-[#000] text-sm absolute left-0 top-0 flex flex-col  justify-end items-start py-5 px-5 h-auto w-full text-left text-white uppercase font-bold duration-300 "  : "absolute left-0 top-16  opacity-0 flex-col justify-center items-center w-full overflow-hidden h-0" }>
            {links.map(link => (
                <Link to={link.url}  spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav} key={link.id} className=' bg-[#eeeeee70] w-full px-2 my-2 py-5'>{link.text}</Link>
            ))}
           
        </ul>
    </div>
  )
}

export default Navbar