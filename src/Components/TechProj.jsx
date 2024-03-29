import React from 'react'
import { TECHS, Head, Project1 } from './Data'
import { arrow, Folder } from '../../public/SVG/Svg'

const TechProj = () => {
    return (
        <div className=' p-3  h-fit  font-sans flex xl:flex-row flex-col xl:items-stretch items-center  relative   '>
            <div className='  md:mr-5'>
                <h2 className=' font-semibold text-slate-100 ml-2 text-xl '>What I Know</h2>
                <div className='md:mx-3 flex xl:gap-3 gap-6 flex-col lg:flex-row w-full   xl:items-stretch items-center'>
                    {
                        TECHS.map((item, i) => {
                            return (
                                <div className='sm:w-full w-10/12 2xl:w-[20%] xl:w-[17%] lg:h-[13rem] h-fit  px-5  pb-10  bg text-slate-400 rounded-lg '
                                    key={i}
                                >
                                    <div className=' h-full  w-full    '>
                                        <h4 className=' text-slate-200' >{Head[i]}</h4>
                                        <div className=' flex flex-wrap gap-y-6'>

                                            {
                                                item.map((item, i) => {
                                                    return (
                                                        <span key={i} className=' '>
                                                            <span className=' text-slate-300 p-2 mx-1 text-xs rounded-md cursor-default'
                                                                style={{
                                                                    border: '1px solid',
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

            <div className='  justify-center flex sm:h-[26rem] h-[32rem] mt-10 xl:mt-0   '>
                <div className=' h-fit md:mr-3 pb-2  rounded  absolute xl:right-0 bg text-slate-200 
             xl:w-[25vw] 2xl:w-[20vw] 
             md:w-[37rem] md:ml-5
             sm:w-[36rem] sm:-ml-2 w-10/12 
            '>
                    <h2 className=' font-semibold  text-xl ml-7 text-slate-100 '>More Projects</h2>
                    <div className='  h-full  '>
                        {
                            Project1.map((item, i) => {
                                let ele = (Object.values(item))
                                let github = item.github || null;
                                return (
                                    <div onClick={() => github ? window.open(github, '_blank') : ''} className={`h-fit w-full  group  0 sm:py-0 py-2  flex ${github ? ' cursor-pointer' : ' cursor-progress'}`} key={i} >
                                        <span className='w-1/5 lg:ml-10 sm:ml-14 ml-5 self-center'>
                                            {Folder}
                                        </span>
                                        <div className='w-1/2  self-center h-20  group-hover:text-blue-400  '>
                                            <span>{Object.keys(item)[0]}</span><br />
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
                                        <span className='w-1/5 ml-5     self-center group-hover:[transform:translateX(.5rem)] duration-300 '>
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