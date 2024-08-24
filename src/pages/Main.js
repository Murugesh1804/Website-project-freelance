import React from 'react'
import Nav from '../Compoents/Nav'
import Home from '../Compoents/Home'
import Box from '../Compoents/Box'
import Offer from '../Compoents/Offer'
import TakeCourse from '../Compoents/TakeCourse'
import Certified from '../Compoents/Certified'
import Courses from '../Compoents/Courses'
import Experience from '../Compoents/Experience'
import Footer from '../Compoents/Footer'
import Pricing from '../Compoents/Pricing'
import SignUp from '../Compoents/SignUp'
import Login from '../Compoents/Login'
import Dashboard from '../Compoents/Dashboard'



const Main = () => {
  return (
 <>
 <Nav/>
 <Home/>
 <Box/>
 <Offer/>
 <TakeCourse/>
 <Certified/>
 <Courses/>
 <Experience/>
 <Pricing/>
 <Footer/>
 {/* <SignUp/>
 <Login/>
 <Dashboard/> */}
 </>
  )
}

export default Main