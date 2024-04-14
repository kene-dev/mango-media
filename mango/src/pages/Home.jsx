import React from 'react'
import Navbar from '../web-components/Navbar'
import Hero from '../web-components/Hero'
import About from '../web-components/About'
import Why from '../web-components/Why'
import Quality from '../web-components/Quality'
import Contact from '../web-components/Contact'
import Footer from '../web-components/Footer'

const Home = () => {
  return (
     <>
     <Navbar />
     <Hero />
     <About />
     <Why />
     <Quality />
     <Contact />
     <Footer />
    </>
  )
}

export default Home