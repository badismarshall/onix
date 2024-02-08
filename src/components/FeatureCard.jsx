import React from 'react'
import { arrow} from '../assets'

const FeatureCard = ({title, content, icon, color}) => {
  return (
    <div className={`card group flex flex-col justify-center items-center bg-neutral-800 hover:bg-[#333538] duration-300 px-[40px] w-full pb-[40px] rounded-tr-[20%] rounded-3xl relative pt-[150px] z-40`}>
        <div className={`content-[''] absolute top-2 right-2 w-0 h-0 rounded-tr-[50%] 
                        border-l-[40px] border-l-transparent
                        border-t-[50px] border-t-[${color}]
                        border-r-[0px] border-r-transparent
                        group-hover:border-t-white duration-500`
        }></div>
        <img 
            src={icon}
            alt={icon}
            className='object-contain w-[300px] h-[300px] absolute -top-36 scale-125 group-hover:-translate-y-5 duration-700 z-40'
        />

        <h4 className='font-inter text-zinc-300 font-black leading-[38px] text-[32px] tracking-[-0.64px] max-w-[308px]'>
              {title}
        </h4>
        <p className='font-inter text-[18px] font-normal leading-[27px] text-zinc-500 mt-[16px] max-w-[308px]'>
            {content}
        </p>
        <div className='flex justify-between w-full mb-[30px] mt-[50px]'>
            <div className={`text-[${color}] text-lg font-medium leading-[27px]`}>Learn more</div>
            <img
                src={arrow}
                alt='arrow'
                className='w-[24px] h-[24px] object-contain'
            />
        </div>
    </div>
  )
}

export default FeatureCard