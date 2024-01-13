import React from 'react'
import { SidbarIcon, Close, Contact } from '../../public/SVG/Svg'
import { social } from './Data'

const Topbar = ({ show, setshow }) => {
    const mail = social.find((item) => item.Mail)
    return (
        <div className=' h-20 bg-[#14131a]  fixed  lg:w-[80vw] w-full mb-10 top-0 z-50   '>
             
            <button onClick={() => window.open(Object.values(mail))} className=' absolute lg:right-7  right-20 top-5 p-3 rounded bg-green-700 border-none text-white '>
                <span>
                    Contact Me
                </span>
                <span className=' ml-2 '>
                    {Contact}
                </span>
            </button>
            <span className={`lg:hidden block absolute 
            ${show ? 'top-7 right-9 ' : 'top-5 right-8 '}
            `}
                onClick={() => setshow(!show)}
            >
                {
                    show ?
                        Close
                        :
                        SidbarIcon
                }
            </span>
        </div>
    )
}

export default Topbar