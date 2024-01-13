import React from 'react'
import { Project2 } from '../Components/Data'
import { Live, github, github2 } from '../../public/SVG/Svg';

const Project = () => {
    return (
        <div className=' m-4 font-sans  text-slate-100' >
            <h3 className='  font-medium'>Projects</h3>
            <div className=' flex  gap-6  lg:flex-nowrap flex-wrap lg:justify-normal justify-center'>

                {
                    Project2.map((item, i) => {
                        const title = Object.keys(item)[0];
                        const desc = Object.values(item)[0];
                        const img = Object.values(item)[1];
                        return (
                            <div className='relative md:h-72 h-fit group  duration-200 w-[90%] sm:w-[24rem] md:w-[24rem]  bg-[#1c1b23]   rounded-lg overflow-hidden'
                                key={i}>
                                <div className=' h-full   '>
                                    <div className=' h-[55%]'>
                                        <img src={img} alt="img" className=' h-full w-full ' />
                                    </div>
                                    <div className=' p-4 '>
                                        <span className=' text-base font-semibold  '>{title}</span><br />
                                        <span className=' text-xs text-gray-300 '>
                                            {desc.map((item, i) => {
                                                return (
                                                    <span key={i}>{desc.length == i || i == 0 ? '' : ','}{" "}{item}</span>
                                                )
                                            })}
                                        </span>
                                        <div className=' group-hover:opacity-100 opacity-0 duration-500 hover:duration-500'>
                                            <button className=' flex gap-x-2 items-center cursor-pointer absolute md:bottom-2 bottom-[80%] hover:bg-[#14131a]  bg-[#1c1b23] border-slate-400  border text-white outline-none  px-2  rounded-md xl:text-base text-xs' onClick={() => window.open(item.live, '_blank')}>
                                                <span>
                                                    Live
                                                </span>
                                                <span className=' mt-1'>
                                                    {Live}
                                                </span>
                                            </button>
                                            <button className='flex items-center gap-x-2 cursor-pointer absolute md:bottom-2 bottom-[80%] hover:bg-[#14131a]  bg-[#1c1b23] border-slate-400 border text-white outline-none  px-2   right-4 rounded-md xl:text-base text-xs' onClick={() => window.open(item.github, '_blank')}>
                                                <span>GitHub</span>
                                                <span className=' mt-1'>{github2}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Project