import blog1 from '../assets/Blog1.png'
import blog2 from '../assets/Blog2.png'
import blog3 from '../assets/Blog3.png'
const BlogCard = ({title, date}) => {
  return (
    <div className='w-[550px] h-[188px] bg-[#EB5BE5] rounded-[30px]'>
      <div className='w-[558px] h-[190px] bg-[#222325] rounded-3xl rounded-tr-[100px] flex flex-row'>
        <img
            src={blog1}
            alt="blog1"
            className="w-[279px] h-full object-contain mt-[0px] ml-[0px]"
        />
        <div className='flex flex-col items-start justify-center ml-[24px]'>
            <div className="w-[70px] h-7 px-3 py-2 bg-fuchsia-500 bg-opacity-5 rounded-[119px] justify-start items-start gap-2.5 inline-flex">
                 <div className="text-fuchsia-500 text-[10px] font-extrabold">UPDATES</div>
            </div>
            <h4 className='text-zinc-300 font-inter text-[24px] font-normal leading-[28px] mt-[8px]'>
                {title}
            </h4>
            <div className="text-gray-500 text-sm font-normal leading-[27px] mt-[30px]">{date}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
