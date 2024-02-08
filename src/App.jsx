import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import hero from './assets/heroimages.png'
import Valueprops from './components/Valueprops'
import Metrics from './components/Metrics'
import Solutions from './components/Solutions'
import Blog from './components/Blog'
import Footer from './components/Footer'
import hero22 from './assets/hero22.png' 
import Getinvolved from './components/Getinvolved'
import FooterC from './components/FooterC'

const App = () =>  (
  <>
  <Navbar />
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        {/* <img 
                src={hero}
                alt='hero'
                className='w-[100%] h-[100%] object-contain z-[0] absolute top-0 left-0'
            /> */}

          <Hero />
          <Features />
          <Valueprops />
          <Metrics />
          <Solutions />
          <Blog />
          <Footer />
          <Getinvolved />
          <FooterC />
        </div>
        {/* <img 
            src={hero22}
            alt='hero'
            className='w-[100%] h-[100%] object-contain z-[0] absolute bottom-0 right-0'
          /> */}
      </div>
    </div>
    </>
  )


export default App
