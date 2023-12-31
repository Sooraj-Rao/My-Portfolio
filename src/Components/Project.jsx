import React from 'react'
import { Project2 } from '../Components/Data'
import { Live, github, github2 } from '../../public/SVG/Svg';

const Project = () => {
    return (
        <div className=' m-4 font-sans Project text-slate-100' >
            <h3 className='  font-medium'>Projects</h3>
            <div className=' flex  gap-6  lg:flex-nowrap flex-wrap lg:justify-normal justify-center'>

                {
                    Project2.map((item, i) => {
                        const title = Object.keys(item)[0];
                        const desc = Object.values(item)[0];
                        const img = Object.values(item)[1];
                        return (
                            <div className='relative md:h-72 h-fit group  duration-200 w-[90%] sm:w-[24rem] md:w-[24rem] bg-slate-300 Sidebar   rounded-lg overflow-hidden'
                                key={i}>
                                <div className=' h-full   '>
                                    <div className=' h-[55%]       '>
                                        <img src={img} alt="img" className=' h-full w-full ' />
                                    </div>
                                    <div className=' p-4 '>
                                        <span className=' text-base font-bold '>{title}</span><br />
                                        <span className=' text-sm '>
                                            {desc.map((item, i) => {
                                                return (
                                                    <span key={i}>{desc.length == i || i == 0 ? '' : ','}{" "}{item}</span>
                                                )
                                            })}
                                        </span>
                                        <div className=' group-hover:opacity-100 opacity-0 duration-500 hover:duration-500'>
                                            <button className=' flex gap-x-2 items-center cursor-pointer absolute bottom-2 hover:bg-gray-800 bg-gray-900 border-slate-400 border text-white outline-none  px-2 py-1 rounded-md text-base' onClick={() => window.open(item.live, '_blank')}>
                                                <span>
                                                    Live
                                                </span>
                                                <span className=' mt-1'>
                                                    {Live}
                                                </span>
                                            </button>
                                            <button className='flex items-center gap-x-2 cursor-pointer absolute bottom-2 bg-gray-900 hover:bg-gray-800 border-slate-400 border text-white outline-none  px-2 py-1 right-4 rounded-md text-base' onClick={() => window.open(item.github, '_blank')}>
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