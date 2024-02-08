import star4 from '../assets/star4.png'
import flex from '../assets/flex.png'
import cube2 from '../assets/cube2.png'
import lines from '../assets/lines.svg'
import {motion} from 'framer-motion'
const Getinvolved = () => {
  return (
    // <section id='involved' className='w-full h-[600px] bg-[url("/src/assets/hero22.png")] bg-cover relative'>
    //   <img
    //     src={star4}
    //     alt='star'
    //     className='w-[100%] h-[100%] object-contain z-[0] absolute bottom-[17rem] right-[23rem] scale-[45%]'
    //   />
    //   <img
    //     src={flex}
    //     alt='star'
    //     className='w-[100%] h-[100%] object-contain z-[0] absolute bottom-[17rem] left-[23rem] scale-[45%]'
    //   />
    // </section>
    <section id='involved' className='w-full relative overflow-hidden justify-center flex flex-col '>

      <div className='flex flex-col justify-center items-center py-[230px]'>
        {/* <motion.div
         className='relative  w-full'
        >
          <img
            src={star4}
            alt='star'
            className='block max-sm:hidden scale-[30%] w-[1000px] md:-top-[550px] object-fill absolute -left-[23rem] -top-[450px]'
          />
        </motion.div> */}
        {/* ------------------- */}
        {/* <div className='stork-[6.585px] rounded-full border-[#EB5BE5] border-opacity-5 w-[180px] h-[180px] border-8 z-40 xs:absolute -top-36 -left-4 hidden sm:block '>
            <img
              src={star4}
              alt='star4'
              className='scale-125 object-contain relative'
            />
          </div> */}
        <h4 className='text-center font-inter font-normal leading-[48px] text-[40px] text-zinc-300'>
          Want to get involved?
        </h4>
        <div className="text-center"><span className="text-zinc-500 text-2xl font-normal leading-9 font-inter">Or learn all about </span><br/><span className="text-[#EB5BE5] text-2xl font-normal leading-[36px] font-karla">how to build on Onix</span><span className="text-zinc-500 text-2xl font-normal leading-9">.</span></div>
        <div className='flex justify-center'>
        <button className='bg-[#362535] text-white font-inter font-normal text-[14px] leading-[24px] py-[10px] px-[20px] rounded-[4px] rounded-tr-[30px] mt-[40px] hover:bg-fuchsia-600 uppercase border-2 border-fuchsia-600'>join the community</button>
      </div>
      </div>


      <div className='absolute'>
        <div className='relative'>
          <img
            src={lines}
            alt='lines'
            // width={1744}
            // height={700}
            className='z-[0] object-contain min-w-[1400px]'
          />
        </div>
        <div className=' top-[67%] left-[15%] object-fill'>
        {/* <img
            src={star4}
            alt='star'
            // className='object-contain w-[245px] h-[245px]'
            className="scale-[100%] absolute top-[67%] left-[15%] w-[300px] h-[300px] object-contain ss:block hidden"
          /> */}
          </div>
      </div>
    </section>
  )
}

export default Getinvolved
