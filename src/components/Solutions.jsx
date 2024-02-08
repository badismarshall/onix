import CardSolution from './CardSolution'
import {solutions} from '../constants'
import sphere2 from '../assets/sphere2.png'
import cube2 from '../assets/cube2.png'
import { useScroll, useSpring, useTransform, motion, useInView, useAnimation } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { useRef, useEffect } from 'react'
const Solutions = () => {
    const { scrollYProgress } = useScroll();
    const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 });
    const rotate = useTransform(spring, [0, 1], [0, 360]);
    const translate = useTransform(spring, [0, 1], [0, 300])
    const sitckyControls = useAnimation()
    const stickref = useRef(null)
    const inView = useInView(stickref, {once : true})
    useEffect(() => {
        if(inView){
        sitckyControls.start('show')
        }
    })
    const mycolors = ['text-lime-400', 'text-orange-300', 'text-indigo-500', 'border-t-lime-400', 'border-t-orange-300', 'border-t-indigo-500']

  return (
    <section id='soulotions' className='xs:text-center flex flex-col md:mt-[180px] xs:mt-[120px] mt-[80px] justify-center relative '>
        <motion.div
            ref={stickref}
            variants={fadeIn('up', "tween", 0.2, 0.8)}
            initial='hidden'
            animate={sitckyControls}
        >
        <h4 
        className='text-zinc-300 font-inter font-normal 
        text-[40px] xs:text-[48px] sm:text-[60px]
        leading-[48px] xs:leading-[60px] sm:leading-[72px]
        tracking-[-0.8px] xs:tracking-[-0.96px] sm:tracking-[-1.2px]'>
            Scaling solutions, amplified.
        </h4>
        <p className='text-zinc-500 text-[24px] font-karla font-normal leading-[36px] mb-[80px]'>
            Onix's complete suite of blockchain-scaling solutions.
        </p>
        </motion.div>
        <div className='z-40 flex flex-wrap gap-[40px] justify-center items-center'>
            {
                solutions.map((card) => (
                    <CardSolution key={card.id} {...card}/>
                ))
            }
        </div>
        <motion.img
            style={{translateY: translate}}
            src={cube2}
            alt="sphere"
            className="scale-[50%] md:scale-[70%] absolute -top-[27rem] md:-right-[35rem] -right-[32rem] w-[1006px] h-[1006px] object-contain mb-11 ss:block hidden"
        />
        <motion.img
            style={{rotateZ: rotate}}
            src={sphere2}
            alt="sphere"
            className="scale-[51%] absolute -bottom-[17rem] left-16 w-[300px] h-[300px] object-contain mb-11 ss:block hidden"
        />
    </section>
  )
}

export default Solutions
