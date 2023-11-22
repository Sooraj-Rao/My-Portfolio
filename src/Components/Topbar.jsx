import React from 'react'
import { SidbarIcon, Close, Contact } from '../../public/SVG/Svg'

const Topbar = ({ show, setshow }) => {
    return (
        <div className=' h-20 TopBar  sticky top-0 z-50   '>
            <div>
            </div>
            <button className=' cursor-not-allowed absolute lg:right-5  right-20 top-5 p-3 rounded bg-green-700 border-none text-zinc-400'>
                <span>
                    Contact Me
                </span>
                <span className=' ml-2 '>
                    {Contact}
                </span>
            </button>
            <span className='lg:hidden block absolute right-5 top-5 '
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