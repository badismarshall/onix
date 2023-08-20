import CardSolution from './CardSolution'
import {solutions} from '../constants'
import sphere2 from '../assets/sphere2.png'
import cube2 from '../assets/cube2.png'
const Solutions = () => {
  return (
    <section id='soulotions' className='flex flex-col mt-[180px] justify-center relative '>
        <h4 className='text-zinc-300 font-inter text-center text-[60px] font-normal leading-[72px]'>
            Scaling solutions, amplified.
        </h4>
        <p className='text-zinc-500 text-center text-[24px] font-karla font-normal leading-[36px] mb-[80px]'>
            Onix's complete suite of blockchain-scaling solutions.
        </p>
        <div className='flex flex-wrap gap-[40px] justify-center'>
            {
                solutions.map((card) => (
                    <CardSolution key={card.id} {...card}/>
                ))
            }
        </div>
        <img
            src={cube2}
            alt="sphere"
            className=" scale-[51%] absolute -top-[27rem] -right-[25rem] w-[1006px] h-[1006px] object-contain mb-11 sm:block hidden"
        />
        <img
            src={sphere2}
            alt="sphere"
            className=" scale-[51%] absolute -bottom-[39rem] -left-[5rem] w-[1006px] h-[1006px] object-contain mb-11 sm:block hidden"
        />
    </section>
  )
}

export default Solutions
