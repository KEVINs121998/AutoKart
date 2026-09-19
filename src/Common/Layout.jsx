import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import ScrollToTop from '../Component/ScrollToTop'

const Layout = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
      
    </>
  )
}

export default Layout
