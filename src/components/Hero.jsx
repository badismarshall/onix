import hero from '../assets/heroimages.png' 
import { sphere, star13, sphere2, star4 } from '../assets'
import { useScroll, useSpring, useTransform, motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';
import { ViewIn } from '../utils/motion';
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 });
  const rotate = useTransform(spring, [0, 1], [0, 90]);

  const TitleControl = useAnimation()
  const HeroTitle = useRef(null)
  const HeroInView = useInView(HeroTitle, {once : true})
  useEffect(() => {
    if(HeroInView){
      TitleControl.start('show')
    }})
  return (
    <section id='hero' className='flex flex-col justify-center items-center mt-[170px]'>
        <motion.div
          ref={HeroTitle}
          variants={ViewIn('up', "tween", 0.2, 0.8)}
          initial='hidden'
          animate={TitleControl}
        >
          <h4 className='text-gray-500 text-center text-sm font-extrabold font-karla z-10'>
              INTRODUCING ONIX
          </h4>
          <div className='font-inter text-center text-zinc-300 font-normal 
          xs:leading-[72px] sm:leading-[88px] leading-[60px] 
          xs:text-[60px] sm:text-[80px] text-[48px] 
          tracking-[-0.96px] xs:tracking-[-1.2px] sm:tracking-[-1.6px] z-40'>
              Community-owned <br className='sm:block hidden'/>API of blockchains.
          </div>
          <p className='font-karla text-center text-zinc-300 text-[24px] font-normal leading-9 max-w-[760px] mt-[20px] z-10 w-full tracking-[-0.48px]'>
              Onix delivers tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain
          </p>
        </motion.div>
        {/* <img 
          src={hero}
          alt='hero'
          className='w-full h-full scale-2 object-contain z-[0] absolute'
        /> */}
        <div className='relative flex justify-center flex-col items-center md:-mt-28 -mt-0'>
          <motion.img 
            style={{rotateZ: rotate}}
            src={sphere}
            alt='sphere'
            className='w-full h-full object-contain z-40 max-w-[1021px] max-h-[1021px] relative'
          />
          <img 
            src={star13}
            alt='star13'
            className='w-1/2 h-1/2 object-contain z-0 absolute'
          />
          <div className='stork-[6.585px] rounded-full border-[#EB5BE5] border-opacity-5 w-[150px] h-[150px] border-8 z-10 xs:absolute xs:right-16 -right-14 -top-80 xs:-top-60 hidden sm:block '>

            <img
              src={sphere2}
              alt='sphere2'
              className='scale-75 object-contain relative'
            />
          </div>
          <div className='stork-[6.585px] rounded-full border-[#EB5BE5] border-opacity-5 w-[180px] h-[180px] border-8 z-40 xs:absolute top-28 -left-4 hidden sm:block '>
            <img
              src={star4}
              alt='star4'
              className='scale-110 object-contain relative'
            />
          </div>
          
        </div>

    </section>
  )
}

export default Hero
