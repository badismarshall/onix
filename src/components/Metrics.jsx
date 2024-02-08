import { metrics } from "../constants"
import star from "../assets/star3.png"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react"

const Metrics = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 });
  const rotate = useTransform(spring, [0, 1], [0, 360]);

  return (
    <section id='metrics' className='flex justify-start mt-[80px] flex-col relative'>
      <div className='flex flex-wrap  bg-[#222325] rounded-2xl justify-center items-center'>
            <div className="flex flex-wrap justify-center
            px-[24px] xs:px-0 py-[38px] gap-[64px]
            ">
                {
                    metrics.map((item, index) => (
                      <div key={item.id}>
                        <h4 className="font-inter text-zinc-300 text-[32px]  leading-[38.40px] tracking-[-0.64]">
                          {item.metric}
                        </h4>
                        <div className="text-gray-500 font-karla text-[17px] font-normal leading-[27px] tracking-[-0.36px] max-w-none max-sm:max-w-[128px]">
                          {item.label}
                        </div>
                      </div> 
                  ))

                }
            </div>
      </div>
        <motion.img 
          style={{rotateZ: rotate}}
          src={star}
          alt="star"
          className="absolute top-[100px] -left-48 md:top-4 md:-left-20 w-[378px] h-[378px] object-contain mb-11 xs:block hidden"
        />
    </section>
  )
}

export default Metrics
