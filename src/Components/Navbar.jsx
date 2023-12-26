import React from 'react'
import { social } from './Data.jsx'
import { linkedin, github, instagram, file, twitter, mail } from '../../public/SVG/Svg'

const Navbar = ({ show }) => {

    const svg = [instagram, github, linkedin, twitter, mail, file]

    return (
        <div>
            <div className='  gap-3 ml-8 fixed mt-2 lg:flex hidden'>
                <h1 className='h-4 w-4 rounded-full bg-green-400'></h1>
                <h1 className='h-4 w-4 rounded-full bg-blue-500'></h1>
                <h1 className='h-4 w-4 rounded-full bg-red-500'></h1>
            </div>
            <div className={` overflow-hidden font-sans duration-500 lg:mt-[5.3rem] mt-[4.5rem] pt-10    rounded-xl h-[30rem] fixed Sidebar
        lg:block   
        -ml-2
        lg:ml-4
        ${show ? ' sm:w-[35%]  w-full' : 'w-0'}
        lg:w-[18%] 
        `}
            >

                <div className=' flex justify-center  '>
                    <img src="../../Image/sign.png" className='w-40 mx-auto' alt="logo" />
                </div>
                {
                    social.map((item, i) => {
                        const link = Object.values(item);
                        return (
                            <div key={i}
                                className={`sm:w-1/2 justify-center lg:justify-normal  text-slate-300 hover:text-teal-300  hover:[transform:translateY(-4px)]  w-full rounded-lg   my-3    duration-200 hover:duration-200     cursor-pointer  py-2  flex items-center   
                            mx-auto`}
                                onClick={() => window.open(link, '_target')}
                            >
                                <span className=' pr-4'>
                                    {svg[i]}
                                </span>
                                <span
                                    className=' text-base font-normal    '>
                                    {Object.keys(item)}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar