import { metrics } from "../constants"
import star from "../assets/star3.png"
const Metrics = () => {
  return (
    <section id='metrics' className='flex justify-start mt-[180px] flex-col relative'>
      <div className='flex flex-wrap  bg-[#222325] rounded-2xl justify-between items-center sm:px-[120px] px-[80px] sm:py-[30px] py-[20px]'>
            <div className="flex sm:flex-row flex-wrap justify-between  gap-16">
                {
                    metrics.map((item, index) => (
                      <div key={item.id}>
                        <h4 className="font-inter text-zinc-300 sm:text-[32px] text-[24px]  leading-[38.40px]">
                          {item.metric}
                        </h4>
                        <div className="text-gray-500 font-inter sm:text-[12px] text-[10px] font-normal leading-[23px]">
                          {item.label}
                        </div>
                      </div> 
                  ))

                }
            </div>
      </div>
      <img 
        src={star}
        alt="star"
        className="absolute top-0 left-0 w-[378px] h-[378px] object-contain mb-11 sm:block hidden"
      />
    </section>
  )
}

export default Metrics
