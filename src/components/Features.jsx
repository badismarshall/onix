import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import star from "../assets/star3.png"
import { features } from '../constants';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import FeatureCard from './FeatureCard';

const Features = () => {
  const colors =['text-[#6F5BEB]', 'text-[#EBB15B]', 'text-[#89EB5B]', 'text-[#E87A95]', 'border-t-[#6F5BEB]', 'border-t-[#EBB15B]', 'border-t-[#89EB5B]', 'border-t-[#E87A95]']
  return (
    <section id='Features' className='flex flex-col items-center justify-center mt-[100px] z-50 w-full'>
        <h4 className='font-inter text-zinc-300 font-normal 
        leading-[48px] xs:leading-[60px] ss:leading-[72px] 
        sm:text-[60px] xs:max-sm:text-[48px] text-[40px] 
        z-10 justify-start md:text-center 
        tracking-[-0.8px] xs:tracking-[-0.96px] sm:tracking-[-1.2px] '>
        Onix makes blockchain development <br className='sm:block hidden'/> accessible for everyone.
        </h4>
          <Splide 
            aria-label='My Favorite Images'
            className='mt-10 w-full flex justify-center items-start ml-0'
            options={
              {
                pagination: true,
                // drag: 'free',
                snap: true,
                arrows: false,
                easing: 'ease',
                autoplay: true,
                gap: '20px',
                // fixedWidth: 'auto',
                perPage: 3,
                wheel: true,
                mediaQuery: 'max',
                breakpoints:
                {
                    768:{
                      perPage: 2,
                      width: '1000px',
                    },
                    375:{
                      perPage: 1,
                    },
                    1260:{
                      perPage:2,
                    },
                    690:{
                      perPage:1,
                      width: '500px',
                    },
                }
                
              }
            }  
          >
            {
              features.map((feature) => (
                <SplideSlide key={feature.id} className='flex pt-[100px]'>
                  <FeatureCard  {...feature}/>   
                </SplideSlide>
              ))
            }
          </Splide>
    </section>
  )
}

export default Features
