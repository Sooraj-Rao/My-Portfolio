import React, { useState } from 'react'
import NavTop from './Components/NavTop'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import TechProj from './Components/TechProj'
import Topbar from './Components/Topbar'

const App = () => {
  const [show, setshow] = useState(false)

  return (
    <>
      <div className='flex relative ' >
        <div className={` z-50 md:w-[20%] sm:w-[40%] w-[96%] 
        lg:block
        `}>
          <Navbar show={show} />
        </div>
        <div className='lg:w-[80%] xl:w-[76%s] w-full  absolute right-0  top-0 '>
          <Topbar show={show} setshow={setshow} />
          <div className={` ${show ? 'blur-lg' : 'blur-none'} `}
            style={{ 'filter': show && ' blur(1rem)' }}
          >
            <NavTop />
            <Project />
            <TechProj />
          </div>
        </div>
      </div>
    </>
  )
}

export default App