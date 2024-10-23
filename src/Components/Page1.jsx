import React, { useEffect, useLayoutEffect, useRef } from 'react'
// import {bg} from "../Public/"
import "./App.css"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import { transformWithEsbuild } from 'vite'

gsap.registerPlugin(ScrollTrigger)



const Page1 = () => {
const bg1 = useRef(null)
const img_container =useRef(null)
const img =useRef(null)
const text1= useRef(null)

useLayoutEffect(()=>{
    let ctx=gsap.context(()=>{
        ScrollTrigger.create({
            trigger:bg1.current,
            pin:bg1.current,
            pinSpacing:false,
            start:"top top",
            endTrigger:".last",
            end:"bottom bottom"
        });

        gsap.timeline({
            scrollTrigger:{
                trigger:"img_container.current",
                pin: img_container.current,
                scrub:1,
                start:"0 0"
            }
            

        })
        .to(img.current,{transform:"translateZ(2200px"},0)
        .to(text1.current, {y:-800},0.08, "<")
        // .to(text2.current, {y:-800})
    })
        

    return ()=>ctx.revert();
},[]);


  return (

    

    <div className='relative overflow-hidden'>
<div ref={bg1} className=' absolute h-screen w-full z-[-1]'></div>
    
    
    <div ref={img_container} className='perspective  text-white bg-[#1E1E1C] h-[100vh] w-[100%] items-center justify-center flex'>
      <img ref={img} src="../Public/Ocean.jpg" className='image w-full h-screen' />
    

    <div  className='absolute flex flex-col items-center justify-center'>
      <h1 ref={text1} className='text-[20vh] absolute'> <span id='text-stroke'>Onixx.</span>Studio</h1>
    </div>
    </div>
<div className='bg-[#E7E4DF] h-60 '> <h1 className='text-[4vw] flex justify-center p-14'>Projects</h1>
    </div>
<div id='project-container' className=' bg-[#E7E4DF]'>

<div id='col-1' className='flex mb-16 pl-20 gap-16'>
  <img src="../Public/1.webp" className='w-[16%] h-80 object-cover' alt="" />
  <img src="../Public/2.webp" className='h-1/2 object-cover w-[32%]' alt="" />
  <img src="../Public/3.webp" className='max-300 ml-56 w-[28%]' alt="" />
</div>

<div id='col-2' className='flex mt-56 justify-between p-24'>
<img src="../Public/3.webp" className='w-[25%]' alt="" />
<div className='h-12 w-12 bg-red-300'></div>
<img src="../Public/Ocean.jpg" className='w-[25%] last' alt="" />

</div>

</div>


    </ div>

    // </ReactLenis>
  )
}

export default Page1
