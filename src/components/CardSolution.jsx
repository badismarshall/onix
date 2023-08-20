import icon from '../assets/icon.svg'
import arrow from '../assets/arrow.svg'
const CardSolution = ({icon, title, description, color}) => {
  return (
    <div className='flex flex-row justify-start mb-5'>
        <div className={`w-[320px] h-[320px]  bg-${color} rounded-[30px]`}>
            <div className='rounded-[20px] w-[330px] h-[330px] bg-[#222325] rounded-tr-[100px] flex flex-col'>
                <img 
                    src={icon}
                    alt="icon"
                    className="w-[32px] h-[32px] object-contain mt-[30px] ml-[30px]"
                />
                <div className='ml-[32px] mt-[36px]'>
                    <h4 className='text-zinc-300  font-inter text-[32px] font-normal leading-[38px]'>
                        {title}
                    </h4>
                    <p className='text-zinc-300 max-w-[266px] font-karla text-[18px] font-normal leading-[27px] mt-[16px]'>
                        {description}
                    </p>
                </div>
                <div className='flex flex-row justify-between mt-[34px] ml-[32px] mr-[32px]'>
                    <div className={`w-[61px] h-7 px-3 py-2 bg-${color} bg-opacity-5 rounded-[119px] items-center gap-2.5 inline-flex`}>
                        <div className={`text-${color} text-[10px] font-extrabold`}>ONLINE</div>
                    </div>
                    <img
                        src={arrow}
                        alt="arrow"
                        className="w-[26px] h-[11px] object-contain ml-[10px] mt-[5px]"
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default CardSolution
