import React, { useEffect, useRef } from 'react'
import Page1 from './Page1'
import Lenis from 'lenis'
import { ReactLenis, useLenis } from 'lenis/react'
// import Page2 from './Components/Page2'
import StartWork from './Components/StartWork'
import Footer from './Components/Footer'

const App = () => {

  return (
    <>
<ReactLenis root className='h-screen w-full'>
    
<Page1 />      
 {/* <Page2/> */}
 <StartWork/>
 <Footer/>
 {/* <h1>hello</h1> */}
</ReactLenis>
    </>
  )
}

export default App
