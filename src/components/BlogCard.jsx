import arrow from '../assets/arrow.svg'
const BlogCard = ({title, date, image}) => {
  return (
    // <div className='w-[550px] h-[188px] bg-[#EB5BE5] rounded-[30px]'>
    //   <div className='w-[558px] h-[190px] bg-[#222325] rounded-3xl rounded-tr-[100px] flex flex-row'>
    //     <img
    //         src={blog1}
    //         alt="blog1"
    //         className="w-[279px] h-full object-contain mt-[0px] ml-[0px]"
    //     />
    //     <div className='flex flex-col items-start justify-center ml-[24px]'>
    //         <div className="w-[70px] h-7 px-3 py-2 bg-fuchsia-500 bg-opacity-5 rounded-[119px] justify-start items-start gap-2.5 inline-flex">
    //              <div className="text-fuchsia-500 text-[10px] font-extrabold">UPDATES</div>
    //         </div>
    //         <h4 className='text-zinc-300 font-inter text-[24px] font-normal leading-[28px] mt-[8px]'>
    //             {title}
    //         </h4>
    //         <div className="text-gray-500 text-sm font-normal leading-[27px] mt-[30px]">{date}</div>
    //     </div>
    //   </div>
    // </div>
    <>
    <div className='flex flex-col rounded-3xl bg-[#222325] rounded-br-[20%] relative sm:hidden'>
             <div className={`content-[''] absolute bottom-0 right-1 w-0 h-0 rounded-br-[50%] 
                        border-l-[45px] border-l-transparent
                        border-t-[0px] border-t-transparent
                        border-r-[0px] border-r-transparent
                        border-b-[45px] border-b-[#EB5BE5]
                        group-hover:border-t-white duration-500`
        }></div>
      <img 
        src={image}
        alt="blog1"
        className="object-contain rounded-t-3xl"
      />
      <div className='flex flex-col px-[24px] pt-[24px] pb-[15px]'>
        {/* <div className={`px-3 py-2  bg-opacity-5 rounded-[119px] bg-[#89EB5B]`}> */}
          <div className={`mb-[8px] max-w-[70px] px-[12px] py-[8px] rounded-xl text-[10px] text-[#EB5BE5] font-extrabold uppercase bg-opacity-5 bg-[#EB5BE5]`}>updates</div>
          <h4 className='text-zinc-300 font-inter text-[24px] font-normal leading-[28.8px] tracking-[-0.48px]'>
            {/* Everything Onix <br/>weekly report */}
            {title}
          </h4>
          <div className='flex justify-between mt-[30px]'>
            <div className="text-gray-500 text-sm font-normal leading-[27px] ">{date}</div>
            <img
                src={arrow}
                alt='arrow'
                className='w-[24px] h-[24px] object-contain mr-14'
            />
          </div>
      </div>
    </div>

    <div className='flex gap-3 ss:gap-0 justify-center items-center rounded-3xl bg-[#222325] rounded-tr-[4rem] relative max-sm:hidden'>
          <div className='max-ss:max-w-[224px] max-ss:max-h-[224px]'>
          <img 
              src={image}
              alt='blog1'
              className="object-contain rounded-l-3xl"
            />
            </div>
        <div className='flex flex-col gap-[20px] px-[20px] justify-between'>
          {/* <div className={`px-3 py-2  bg-opacity-5 rounded-[119px] bg-[#89EB5B]`}> */}
          <div className={`max-w-[70px] px-[12px] mt-2 py-[8px] rounded-xl text-[10px] text-[#EB5BE5] font-extrabold uppercase bg-opacity-5 bg-[#EB5BE5]`}>updates</div>
          <h4 className='text-zinc-300 font-inter text-[24px] font-normal leading-[28.8px] tracking-[-0.48px]'>
            {/* Everything Onix <br/>weekly report */}
            {title}
          </h4>
          <div className='flex justify-between '>
            <div className="text-gray-500 text-sm font-normal leading-[27px] ">{date}</div>
            <img
                src={arrow}
                alt='arrow'
                className='w-[24px] h-[24px] object-contain mr-5'
            />
          </div>
      </div>
    </div>
    </>
  )
}

export default BlogCard
