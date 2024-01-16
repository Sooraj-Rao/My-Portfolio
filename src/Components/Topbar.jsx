import React from 'react'
import { SidbarIcon, Close, Contact } from '../../public/SVG/Svg'
import { social } from './Data'

const Topbar = ({ show, setshow }) => {
    const mail = social.find((item) => item.Mail)
    return (
        <div className=' cursor-default h-20 bg2  fixed  lg:w-[80vw] w-full mb-10 top-0 z-50   '>
             
            <div onClick={() => window.open(Object.values(mail))} className=' absolute lg:right-7  right-20 top-5 p-3 rounded bg-transparent shadow-[0px_0px_1px_1px]  shadow-slate-600 font-sans  text-white '>
                <span>
                    Contact Me
                </span>
                <span className=' ml-2 '>
                    {Contact}
                </span>
            </div>
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