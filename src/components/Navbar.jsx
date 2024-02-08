import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='flex w-full py-6 justify-between items-center 
                    fixed px-[24px] xs:px-[40px] md:px-[80px] z-50 bg-transparent backdrop-blur-md'>
            <img 
                src={logo}
                alt='onix'
                className='w-[90px] h-[24px] object-contain'
            />
            <div className='flex items-center gap-[24px]'>
                <div className="w-10 h-10 rotate-180 pt-3">
                    <div className="w-4 h-4 absolute">
                        <div className="w-1.5 h-1.5  bg-zinc-300 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[10px] top-0 absolute bg-zinc-300 rounded-full" />
                        <div className="w-1.5 h-1.5 left-0 top-[10px] absolute bg-zinc-300 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[10px] top-[10px] absolute bg-zinc-300 rounded-full" />
                    </div>
                </div> 
                <div className=" px-[3px] hidden sm:inline-flex z-50">
                    <div className="px-3.5 py-[9px] bg-zinc-800 rounded-tl-[1px] rounded-tr-sm rounded-bl-[1px] rounded-br-[1px]">
                        <div className="text-zinc-300 text-sm font-extrabold uppercase">launchapp</div>  
                    </div>
                </div>
            </div>
    </nav>
  )
}

export default Navbar
