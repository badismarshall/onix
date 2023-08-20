import React from 'react'
import avatar1 from '../assets/avatar1.jpg'
import { quotes } from '../constants'
const Footer = () => {
  return (
    <section id='footer' className='flex sm:flex-row flex-col justify-center sm:items-start items-center mt-[180px] bg-[#222325] py-[120px] w-full gap-[48px]'>     
        {
            quotes.map((quote, index) => (
                <div key={quote.id} className={`sm:${index === quotes.length - 1 ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col justify-start gap-[24px]'>
                        <p className='text-zinc-300 font-inter text-[32px] font-normal leading-[41px] max-w-[340px]'>
                            {quote.quote}    
                        </p>
                        <div className='flex flex-row items-center'>

                            <img 
                                src={quote.avatar}
                                alt='avatar'
                                className='w-[64px] h-[64px] rounded-full object-cover'
                            />
                            <div className='flex flex-col gap-[3px] ml-[16px]'>
                                <h4 className='text-zinc-300 font-karla text-[16px] font-normal leading-normal'>
                                    {quote.name}
                                </h4>
                                <p className='text-gray-500 font-karla text-[16px] font-normal leading-normal'>
                                    {quote.position}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
    </section>
  )
}

export default Footer
