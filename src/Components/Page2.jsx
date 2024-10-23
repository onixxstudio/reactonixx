import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Page2 = () => {
  
  
const page2 = useRef(null);
const page_2= page2.current;

useEffect(()=>{
    gsap.to(page_2,{
      x: "100% ",
      duration:3,
      scrollTrigger:{
        trigger:page_2,
        markers:true,
        start:"50% 50%",
        end:"50%  70%",
        pin:true,
        scrub:0.8,
      }
    })
  })

    return (
    <>
         <div ref={page2} className='h-screen w-full whitespace-nowrap bg-[#0A0A0A]'>
      
      <h1 className='text-white text-[12vw]'>what we provide</h1>
<div className='h-screen w-full bg-violet-400' ></div>
<div className='h-screen w-full bg-violet-600' ></div>
<div className='h-screen w-full bg-violet-900' ></div>
    </div>

    <div className='h-screen w-full bg-red-300'>hello this is</div>
    
    </>
  )
}

export default Page2
