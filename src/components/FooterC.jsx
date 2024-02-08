import React from 'react'
import onix from '../assets/onix.svg'
import { socials } from '../constants'
import FeatureCard from './FeatureCard'
import { footerLinks } from '../constants'
const FooterC = () => {
  return (
    <section id ='socialmedia' className='flex flex-col mt-[72px] justify-center items-start xs:max-sm:items-center mb-[64px] gap-[80px]'>
        <div className='flex flex-col sm:flex-row gap-[40px] justify-between w-full xs:max-sm:items-center'>
            <img 
                src={onix}
                alt='onix'
                className='w-[90px] h-[24px] object-contain'
            />
            <div className='flex gap-[48px] max-sm:hidden justify-center items-center'>
                {
                    footerLinks.map((link, index) => (
                        <div key={index} className='text-white font-karla leading-normal text-[16px] font-normal tracking-[-0.32px]'>
                            {link.title}
                        </div>
                    ))
                }
            </div>
            <div className='flex gap-[24px] justify-center items-center sm:hidden'>
                {
                    socials.map((social, index) => (
                        <div key={index} className='rounded-full w-10 h-10 bg-neutral-800 flex justify-center items-center'>
                            <img
                                src={social}
                                alt='social'
                                className='w-[24px] h-[24px] object-contain scale-75'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex xs:max-sm:justify-center justify-between w-full items-center'>
            <div className="text-gray-500 text-sm font-normal leading-[27px] ">© 2022 Onix Systems. All rights reserved.</div>
            <div className='flex gap-[24px] justify-center items-center max-sm:hidden'>
                {
                    socials.map((social, index) => (
                        <div key={index} className='rounded-full w-10 h-10 bg-neutral-800 flex justify-center items-center'>
                            <img
                                src={social}
                                alt='social'
                                className='w-[24px] h-[24px] object-contain scale-75'
                            />
                        </div>
                    ))
                }
            </div>   
        </div>
    </section>
  )
}

export default FooterC