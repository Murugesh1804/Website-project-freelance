import React from 'react'
import Nav from '../Compoents/Nav'
import Home from '../Compoents/Home'
// import Box from '../Compoents/Box'
import Offer from '../Compoents/Offer'
import TakeCourse from '../Compoents/TakeCourse'
// import Certified from '../Compoents/Certified'
import Levels from '../Compoents/Levels'
import Experience from '../Compoents/Experience'
import Footer from '../Compoents/Footer'
import Pricing from '../Compoents/Pricing'
import SignUp from '../Compoents/SignUp'
import Login from '../Compoents/Login'
import Dashboard from '../AdminPanel/Compontent/Dashboard'



const Main = () => {
  return (
 <>
 <Nav/>
 <Home/>
 {/* <Box/> */}
 <Levels/>

 <Offer/>
 <TakeCourse/>
 {/* <Certified/> */}
 <Pricing/>
 <Experience/>

 <Footer/>
 {/* <SignUp/>
 <Login/>
 <Dashboard/> */}
 </>
  )
}

export default Main