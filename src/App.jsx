import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Body/Banner'
import About  from './components/Body/About'
import Plans from './components/Body/Plans'
import Service from './components/Body/Service'
import ContactUs from './components/Body/ContactUs'
import Gallery from './components/Body/Gallery'
import Testinomials from './components/Body/Testinomials'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      {/* <Header/> */}

      <Header/>
      <section id="banner"><Banner/></section>
      <section id='about'><About/></section>
      <section id='service'><Service/></section>
      <section id='contact'><ContactUs/></section>
      <section id='gallery'><Gallery/></section>
      <Testinomials/>
      <Footer/>
      
      {/* <Banner/> */}
      {/* <Service/> */}
      {/* <About/> */}
      {/* <Plans/> */}
      {/* <ContactUs/> */}
      {/* <Gallery/> */}
      {/* <Testinomials/> */}
    

    </>
  )
}

export default App
