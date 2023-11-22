import React from 'react'
import { TECHS, Head, Project1 } from './Data'
import { arrow, file } from '../../public/SVG/Svg'

const TechProj = () => {
    return (
        <div className=' p-3  h-fit  font-sans flex xl:flex-row flex-col xl:items-stretch items-center  relative   '>
            <div className=' mb-10 md:mr-5'>
                <h2 className=' font-semibold text-white ml-10 text-xl '>What i Know</h2>
                <div className='md:mx-3 flex xl:gap-3 gap-6 flex-col lg:flex-row w-full   xl:items-stretch items-center'>
                    {
                        TECHS.map((item, i) => {
                            return (
                                <div className='sm:w-full w-10/12 2xl:w-[20%] xl:w-[17%] lg:h-[13rem] h-fit  px-5  pb-10  TechProj text-slate-400 rounded-lg '
                                    key={i}
                                >
                                    <div className=' h-full  w-full    '>
                                        <h4 className='' >{Head[i]}</h4>
                                        <div className=' flex flex-wrap gap-y-6'>

                                            {
                                                item.map((item, i) => {
                                                    return (
                                                        <span key={i} className=' '>
                                                            <span className=' bg-zinc-900  p-2 mx-1 text-xs rounded-md'
                                                                style={{
                                                                    border: '1.2px solid',
                                                                    borderColor:
                                                                        item.includes('e') ? 'rgb(195, 49, 49)' : 'blue' &&
                                                                            item.includes('i') ? 'green' : 'blue'
                                                                }}
                                                            >{item}</span>
                                                        </span>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

            <div className='  justify-center flex h-[32rem]   '>
                <div className=' h-fit md:mr-3 pb-2  rounded  absolute xl:right-0 MoreProj text-slate-200 
             xl:w-[25vw] 2xl:w-[20vw] 
             md:w-[37rem] md:ml-5
             sm:w-[36rem] sm:-ml-2 w-10/12 
            '>
                    <h2 className=' font-semibold  text-xl ml-4 '>More Projects</h2>
                    <div className='  h-full  '>
                        {
                            Project1.map((item, i) => {
                                let ele = (Object.values(item))
                                return (
                                    <div className='h-fit w-full  group   hover:bg-zinc-800 py-1 flex cursor-pointer' key={i} >
                                        <span className='w-1/4 lg:ml-10 sm:ml-14 ml-6 self-center'>
                                            {file}
                                        </span>
                                        <div className='w-1/2  self-center h-20   '>
                                            <span>{Object.keys(item)}</span><br />
                                            {
                                                ele[0].map((item, i) => {
                                                    return (
                                                        <span className='h-fit   text-xs  text-slate-400  ' key={i}>
                                                            {ele[0].length === i || i === 0 ? '' : ','}   {item}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                        <span className='w-1/4 ml-5  self-center group-hover:[transform:translateX(.5rem)] duration-300 '>
                                            {arrow}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechProj