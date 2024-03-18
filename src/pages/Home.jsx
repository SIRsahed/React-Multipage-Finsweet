import React from 'react'
import Banner from '../components/banner/Banner'
import Project from '../components/project/Project'
import Features from '../components/features/Features'
import What from '../components/what/What'
import Faq from '../components/faq/Faq'
import Contact from '../components/contact/Contact'
import Blog from '../components/blog/Blog'
import Footer from '../components/footer/Footer'
import Footer_menu from '../components/footer-menu/Footer_menu'
import Hww from '../components/hww/Hww'

const Home = () => {
  return (
    <>
        <Banner/>
        <Hww/>
        <Project/>
        <Features/>
        <What/>
        <Faq/>
        <Contact/>
        <Blog/>
    </>
  )
}

export default Home