import stick from '../assets/Stick6.svg'
import stick2 from '../assets/Stick7.svg'

const Valueprops = () => {
  return (
    <section id='valueprop' className='flex flex-col items-center justify-start sm:mt-[180px] mt-[80px]'>
      <div className='flex sm:flex-row flex-col justify-center'>
        <div className='flex flex-col justify-center'>
            <h4 className='text-zinc-300 max-w-[578px] font-inter sm:text-6xl text-[40px] font-normal sm:leading-[72px] leading-[48px]'>
              Built by developers, <br />for developers.
            </h4>
            <p className='max-w-[578px] font-karla text-[24px] leading-[36px] font-normal text-zinc-500 mt-[32px]'>
                Onix delivers tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain.
            </p>
            <ul className='list-none flex flex-col mt-[48px] gap-[24px]'>
                <li className='flex flex-row justify-start gap-3'>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute opacity-10 rounded-full border-2 border-fuchsia-500" />
                        <div className="w-1.5 h-1.5 left-[13px] top-[13px] absolute bg-fuchsia-500 rounded-full" />
                    </div>
                    <div className='text-zinc-300 font-karla text-[20px] font-normal leading-[36px]'>
                        Fully benefit from scalable network effects
                    </div>
                </li>
                <li className='flex flex-row justify-start gap-3'>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute opacity-10 rounded-full border-2 border-fuchsia-500" />
                        <div className="w-1.5 h-1.5 left-[13px] top-[13px] absolute bg-fuchsia-500 rounded-full" />
                    </div>
                    <div className='text-zinc-300 font-karla text-[20px] font-normal leading-[36px]'>
                        Fully benefit from scalable network effects
                    </div>
                </li>
                <li className='flex flex-row justify-start gap-3'>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute opacity-10 rounded-full border-2 border-fuchsia-500" />
                        <div className="w-1.5 h-1.5 left-[13px] top-[13px] absolute bg-fuchsia-500 rounded-full" />
                    </div>
                    <div className='text-zinc-300 font-karla text-[20px] font-normal leading-[36px]'>
                        Fully benefit from scalable network effects
                    </div>
                </li>
            </ul>
            <div className='flex flex-row gap-[32px] mt-[56px] items-center'>
              <div className=" px-[3px] inline-flex ">
                  <div className="px-3.5 py-[9px] bg-zinc-800 rounded-tl-[1px] rounded-tr-sm rounded-bl-[1px] rounded-br-[1px]">
                      <div className="text-zinc-300 text-sm font-extrabold uppercase">launchapp</div>  
                  </div>
              </div>
              <div className="text-fuchsia-500 text-lg font-normal leading-[27px] font-karla">Read the docs</div>
            </div>
        </div>
        <img 
          src={stick}
          alt='stick'
          className='w-[712px] h-[712px]  object-contain sm:block hidden'
        />
      </div>
      <div className='flex sm:flex-row flex-col justify-center items-center mt-[80px]'>
        <img
          src={stick2}
          alt='stick'
          className='w-[712px] h-[682px] mb-[100px] object-contain sm:block hidden'
        />
        <div className='flex flex-col'>
          <h4 className='text-zinc-300 max-w-[578px] font-inter sm:text-6xl text-[40px] font-normal sm:leading-[72px] leading-[48px]'>
            Top blockchains <br/>build on Onix.
          </h4>
          <p className='max-w-[578px] font-karla text-[24px] leading-[36px] font-normal text-zinc-500 mt-[32px]'>
            Onix is committed to fostering the growth of Web3 applications by providing the infrastructure and security needed for Web3.
          </p>
          <p className='max-w-[578px] font-karla text-[24px] leading-[36px] font-normal text-zinc-500 mt-[32px]'>
            Onix believes in Web3 for all. Onix is a decentralised blockchain scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.
          </p>
          <div className='flex flex-row gap-[32px] mt-[56px] items-center'>
              <div className=" px-[3px] inline-flex ">
                  <div className="px-3.5 py-[9px] bg-zinc-800 rounded-tl-[1px] rounded-tr-sm rounded-bl-[1px] rounded-br-[1px]">
                      <div className="text-zinc-300 text-sm font-extrabold uppercase">launchapp</div>  
                  </div>
              </div>
              <div className="text-fuchsia-500 text-lg font-normal leading-[27px] font-karla">Read the docs</div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Valueprops
