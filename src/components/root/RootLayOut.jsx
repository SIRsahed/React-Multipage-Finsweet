import React from 'react'
import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Footer_menu from '../footer-menu/Footer_menu'

const RootLayOut = () => {
  return (
    <>
        <Menu/>
        <Outlet/>
        <Footer/>
        <Footer_menu/>
    </>
  )
}

export default RootLayOut