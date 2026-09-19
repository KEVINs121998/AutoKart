import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Component/AdminNavbar'
import ScrollToTop from '../Component/ScrollToTop'


const AuthLayout = () => {
  return (
    <>
        <ScrollToTop />
    <AdminNavbar />
      <Outlet />
    </>
  )
}

export default AuthLayout
