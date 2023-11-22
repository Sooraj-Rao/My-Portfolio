import React from 'react'
import { Project2 } from '../Components/Data'

const Project = () => {
    return (
        <div className=' m-4 font-sans Project text-slate-900' >
            <h3 className='  font-medium'>Projects</h3>
            <div className=' flex  gap-6  lg:flex-nowrap flex-wrap lg:justify-normal justify-center'>

                {
                    Project2.map((item, i) => {
                        const title = Object.keys(item)[0];
                        const desc = Object.values(item)[0];
                        const img = Object.values(item)[1];
                        return (
                            <div className=' md:h-72 h-fit w-[90%] sm:w-[24rem] md:w-[24rem] bg-slate-300 Sidebar   rounded-lg overflow-hidden'
                                key={i}
                            >
                                <div className=' h-full '>
                                    <div className=' h-[55%] overflow-hidden     '>
                                        <img src={img} alt="img" height="100%" width="100%" />
                                    </div>
                                    <div className=' p-4 '>
                                        <span className=' text-base font-bold text-slate-200'>{title}</span><br />
                                        <span className=' text-sm text-slate-300'>
                                            {desc.map((item, i) => {
                                                return (
                                                    <span key={i}>{desc.length == i || i == 0 ? '' : ','}{" "}{item}</span>
                                                )
                                            })}
                                        </span>
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