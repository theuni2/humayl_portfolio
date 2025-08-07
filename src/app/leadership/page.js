import React from 'react'
import Section_rl from '../component/leadership/section_rl'
import Navbar from '../component/nav'
import Hero from '../component/hero';
import Footer from '../component/footer';

export default function Page() {
  return (
    <div>
        <Navbar/>
        {/* <Hero/> */}
        <Section_rl/>
        <Footer/>
    </div>
  )
}
