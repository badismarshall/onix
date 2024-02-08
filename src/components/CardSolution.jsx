import icon from '../assets/icon.svg'
import arrow from '../assets/arrow.svg'
const CardSolution = ({icon, title, description, color, state}) => {
  return (
    <div className='flex flex-row justify-start mb-5 group '>
        <div className={`w-[320px] h-[320px]  bg-${color} rounded-[30px] relative`}>
        <div className={`content-[''] absolute top-2 right-1 w-0 h-0 rounded-tr-[50%] 
                        border-l-[40px] border-l-transparent
                        border-t-[40px] border-t-${color}
                        border-r-[0px] border-r-transparent
                        border-b-[0px] border-b-transparent
                        group-hover:border-t-white duration-500`
        }></div>
            <div className='hover:bg-[#333538] duration-300 pr-[32px] justify-start items-start rounded-[20px] w-[330px] h-[330px] bg-[#222325] rounded-tr-[100px] flex flex-col'>
                <img 
                    src={icon}
                    alt="icon"
                    className="w-[32px] h-[32px] object-contain mt-[30px] ml-[30px]"
                />
                <div className='ml-[32px] mt-[36px]'>
                    <h4 className='text-zinc-300  font-inter text-[32px] font-normal leading-[38px] text-left'>
                        {title}
                    </h4>
                    <p className='text-zinc-300 max-w-[266px] font-karla text-left text-[18px] font-normal leading-[27px] mt-[16px]'>
                        {description}
                    </p>
                </div>
                    <div className={`h-7 px-3 py-2 bg-${color} bg-opacity-5 rounded-[119px] bg-[#89EB5B] mt-[34px] ml-[32px]`}>
                        <div className={`text-${color} text-[10px] font-extrabold uppercase`}>{state}</div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default CardSolution
