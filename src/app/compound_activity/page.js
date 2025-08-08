import React from 'react'
import Navbar from '../component/nav'
import Footer from '../component/footer'
import Hero from './hero';
import Slider from './slider'
import Work_ex from './work_ex';
import SportsSection from './sports';
import Gallery from './gallery';

export default function Page() {
  return (
    <div>
<Navbar/>
<Hero/>
<Slider/>
<Work_ex/>
<SportsSection/>
<Gallery/>
<Footer/>
    </div>
  )
}
