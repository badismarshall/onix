import React, { useEffect, useRef } from 'react'
import stick from '../assets/Stick6.svg'
import stick2 from '../assets/Stick7.svg'
import { useInView, motion, useAnimation } from 'framer-motion'
import { slideIn } from "../utils/motion";

const Valueprops = () => {
  const stickref = useRef(null)
  const stick2ref = useRef(null)
  const inView = useInView(stickref, {once : true})
  const inView2 = useInView(stick2ref, {once : true})

  const sitckyControls2 = useAnimation()
  const sitckyControls = useAnimation()
  useEffect(() => {
    if(inView){
      sitckyControls.start('show')
    }
    if(inView2){
      sitckyControls2.start('show')
    }
  }, [inView, inView2])

  return (
    <section id='valueprop' className='flex flex-col items-center justify-start sm:mt-[180px] mt-[80px]'>
      <div className='flex sm:flex-row flex-col justify-start '>
        <div className='flex flex-col justify-center'>
            <h4 className='text-zinc-300 max-w-[578px] font-inter font-normal
            text-[40px] xs:text-[48px] sm:text-[60px]
            leading-[48px] xs:leading-[60px] sm:leading-[72px]
            tracking-[-0.8px] xs:tracking-[-0.96px] sm:tracking-[-1.2px]'>
              Built by developers, <br />for developers.
            </h4>
            <p className='max-w-[578px] font-karla text-[24px] leading-[36px] font-normal text-zinc-500 mt-[32px]'>
                Onix delivers tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain.
            </p>
            <ul className='list-none flex flex-col mt-[48px] gap-[24px]'>
                <li className='flex flex-row justify-start gap-3'>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute opacity-10 rounded-full border-2 border-fuchsia-500" />
                        <div className="w-1.5 h-1.5 left-[13px] top-[13px] absolute bg-fuchsia-500 rounded-full" />
                    </div>
                    <div className='text-zinc-300 font-karla text-[20px] font-normal leading-[36px]'>
                        Fully benefit from scalable network effects
                    </div>
                </li>
                <li className='flex flex-row justify-start gap-3'>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute opacity-10 rounded-full border-2 border-fuchsia-500" />
                        <div className="w-1.5 h-1.5 left-[13px] top-[13px] absolute bg-fuchsia-500 rounded-full" />
                    </div>
                    <div className='text-zinc-300 font-karla text-[20px] font-normal leading-[36px]'>
                        Fully benefit from scalable network effects
                    </div>
                </li>
                <li className='flex flex-row justify-start gap-3'>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute opacity-10 rounded-full border-2 border-fuchsia-500" />
                        <div className="w-1.5 h-1.5 left-[13px] top-[13px] absolute bg-fuchsia-500 rounded-full" />
                    </div>
                    <div className='text-zinc-300 font-karla text-[20px] font-normal leading-[36px]'>
                        Fully benefit from scalable network effects
                    </div>
                </li>
            </ul>
            <div className='flex flex-row gap-[32px] mt-[56px] items-center'>
              <div className=" px-[3px] inline-flex ">
                  <div className="px-3.5 py-[9px] bg-zinc-800 rounded-tl-[1px] rounded-tr-sm rounded-bl-[1px] rounded-br-[1px]">
                      <div className="text-zinc-300 text-sm font-extrabold uppercase">launchapp</div>  
                  </div>
              </div>
              <div className="text-fuchsia-500 text-lg font-normal leading-[27px] font-karla">Read the docs</div>
            </div>
        </div>
        <motion.div 
            ref={stickref} 
            variants={slideIn("right", "tween", 0.2, 1)}
            initial='hidden'
            animate={sitckyControls}
            className='relative max-ss:left-[50px] left-[0px]'
        >
          <img 
            src={stick}
            alt='stick'
            className='w-[712px] h-[712px] max-ss:scale-[150%] object-contain sm:block hidden'
          />
        </motion.div>
      </div>
      <div className='flex sm:flex-row flex-col justify-end items-center mt-[80px]'>
      {/* <div ref={stick2ref} className='delay-300 duration-700 slide-in-from-left-96 hidden'>
          <img
            src={stick2}
            alt='stick'
            className='w-[712px] h-[682px] mb-[100px] object-contain sm:block hidden'
          />
        </div> */}
        <motion.div 
            ref={stick2ref} 
            variants={slideIn("left", "tween", 0.2, 1)}
            initial='hidden'
            animate={sitckyControls2}
            className='relative max-ss:right-[50px] right-[0px]'
        >
          <img
              src={stick2}
              alt='stick'
              className='w-[712px] h-[682px] mb-[100px] max-ss:scale-[150%] object-contain sm:block hidden'
          />
        </motion.div>
        <div className='flex flex-col'>
          <h4 className='text-zinc-300 max-w-[578px] font-inter font-normal
            text-[40px] xs:text-[48px] sm:text-[60px]
            leading-[48px] xs:leading-[60px] sm:leading-[72px]
            tracking-[-0.8px] xs:tracking-[-0.96px] sm:tracking-[-1.2px]'>
            Top blockchains <br/>build on Onix.
          </h4>
          <p className='max-w-[578px] font-karla text-[24px] leading-[36px] font-normal text-zinc-500 mt-[32px]'>
            Onix is committed to fostering the growth of Web3 applications by providing the infrastructure and security needed for Web3.
          </p>
          <p className='max-w-[578px] font-karla text-[24px] leading-[36px] font-normal text-zinc-500 mt-[32px]'>
            Onix believes in Web3 for all. Onix is a decentralised blockchain scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.
          </p>
          <div className='flex flex-row gap-[32px] mt-[56px] items-center'>
              <div className=" px-[3px] inline-flex ">
                  <div className="px-3.5 py-[9px] bg-zinc-800 rounded-tl-[1px] rounded-tr-sm rounded-bl-[1px] rounded-br-[1px]">
                      <div className="text-zinc-300 text-sm font-extrabold uppercase">launchapp</div>  
                  </div>
              </div>
              <div className="text-fuchsia-500 text-lg font-normal leading-[27px] font-karla">Read the docs</div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Valueprops
