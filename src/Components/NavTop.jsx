import React from 'react'
import { social } from './Data'
import bgUrl from '../../public/Image/Navbg.jpg'
import Image from '../../public/Image/Image.jpg'
import { linkedinWhite } from '../../public/SVG/Svg'

const NavTop = () => {
    const { LinkedIn } = social.find((item) => item.LinkedIn)
    
    return (
        <div className=' mt-20 cursor-default'>
            <div style={{ background: `url(${bgUrl})` }}
                className={` bg-cover md:mx-4 rounded mt-2  h-40
                `}>
                <div className=' h-full
                md:px-10
                relative 
                ' style={{ 'backdropFilter': 'blur(1rem)' }}>
                    <div className=' flex font-sans  items-center h-full
                    md:justify-between
                    justify-center
                     gap-2
                     px-1
                    '>
                        <div className=' flex 
                         md:gap-10 gap-4
                         px-1   
                        '>
                            <div
                                className=' md:h-[7.5rem] md:w-[7.5rem] h-[7rem] w-[7rem]   rounded-full overflow-hidden  shadow-white shadow-[0px_0px_.1rem_.3rem]   '>
                                <img src={Image} alt="Image" className='  h-full w-full  ' />
                            </div>
                            <div className='  md:mt-6 mt-3 text-white  flex flex-col gap-1'>
                                <span className=' md:text-3xl text-2xl font-bold '>Sooraj Rao</span>
                                <span className=' md:text-lg text-base'>@Sooraj18</span>
                            </div>
                        </div>
                        <div className=' absolute right-0 bottom-0 md:relative group flex 
                        items-center h-12 md:px-3 px-2 gap-2 cursor-pointer hover:Sidebar
                         md:bg-zinc-900 hover:[transform:translateY(-2px)] rounded '
                            onClick={() => window.open(LinkedIn, '_blank')}
                        >
                            <span className=' text-white text-xs -mr-1 block md:hidden'>
                                Lets Connect !
                            </span>
                            <h1>
                                {linkedinWhite}
                            </h1>
                            <span className='      text-white md:block hidden text-sm '>
                                Let's Connect on LinkedIn
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTop