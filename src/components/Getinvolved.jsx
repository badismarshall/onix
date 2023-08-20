import star4 from '../assets/star4.png'
import flex from '../assets/flex.png'
const Getinvolved = () => {
  return (
    <section id='involved' className='w-full h-[600px] bg-[url("/src/assets/hero22.png")] bg-cover relative'>
      <img
        src={star4}
        alt='star'
        className='w-[100%] h-[100%] object-contain z-[0] absolute bottom-[17rem] right-[23rem] scale-[45%]'
      />
      <img
        src={flex}
        alt='star'
        className='w-[100%] h-[100%] object-contain z-[0] absolute bottom-[17rem] left-[23rem] scale-[45%]'
      />
    </section>
  )
}

export default Getinvolved
