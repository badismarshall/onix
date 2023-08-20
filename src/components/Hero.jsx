import hero from '../assets/heroimages.png' 

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col justify-center items-center mt-[88px]'>
        <h4 className='text-gray-500 text-sm font-extrabold font-karla z-10'>
            INTRODUCING ONIX
        </h4>
        <div className='font-inter text-center text-zinc-300 font-black sm:leading-[88px] leading-[60px] sm:text-[80px] text-[40px] z-10'>
            Community-owned <br className='sm:block hidden'/>API of blockchains.
        </div>
        <p className='font-karla text-center text-zinc-300 text-[24px] font-normal leading-9 max-w-[760px] mt-[20px] z-10'>
            Onix delivers tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain
        </p>
    </section>
  )
}

export default Hero
