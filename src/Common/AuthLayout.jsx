import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Component/AdminNavbar'

const AuthLayout = () => {
  return (
    <>
    <AdminNavbar />
      <Outlet />
    </>
  )
}

export default AuthLayout
