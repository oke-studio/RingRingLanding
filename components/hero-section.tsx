import React from 'react'
import Image from 'next/image'
import ContactForm from '../app/contact/contact-form'

export function HeroSection() {

   
  return (
    <>
    <div className='bg-orange-100 h-4/5 min-w-screen  flex flex-col md:flex md:flex-row relative'>
        {/* left side */}
        <div className=' w-full sm:h-full w-2/4 flex flex-col' >
           <div className=''>
           <div className=' h-fit sm:h-2/4 flex items-start'>
           <Image 
           src ="/RingRing-Logo-01 1.png"
           width={300}
           height ={300}
           alt="Ringlogo"
           className=''
           /> 
           </div>

           <div className=' h-full w-full  sm:h-fit w-full '> 
            <h1 className=' text-2xl  font-sans ml-0 pl-9 pr-9 w-full sm:text-5xl  sm:leading-20 sm:pr-0 sm:pl-10'>
                Make your <br/>memories last forever
            </h1>
           </div>
           <div className='  flex flex-col w-3/4  sm:flex sm:flex-col w-full pl-0'>
                <div className=' h-fit w-full pl-9 pr-9 ml-0 mt-5 text-base sm:h-fit w-3/5  mt-7 font-sans' >
                    <p>Your special event needs a bit of magic. 
                        Thats why we're launching the most personal and fun audio phone. 
                        Canada wide shipping! </p>
                </div>
                <div>
               <ContactForm/>
               </div>
            </div>
            </div>
        </div>

        <div className='h-full  sm:w-full w-full flex flex-col flex items-end'>
        <div className='  flex sm:flex sm:flex-row sm:mr-16'>
            <div className=' flex flex-end relative'>
            <div className=' absolute left-12 sm:left-16 bottom-11'>
            <Image 
            src= "/dot.svg"
            width={20}
            height={20} 
            alt="dot"
            className=""/>
            </div>
            <div className='mt-10'>
            <Image 
            src= "/sickleribbon.svg"
            width={180}
            height={180} 
            alt="sickleribbon"
            className=""/>
            </div>
            </div>
            <div className='my-5'>
            <Image 
            src= "/cake.svg"
            width={150}
            height={150} 
            alt="cake"
            className=""/>
            </div>
            <div className='mt-5 mr-1'>
            <Image 
            src= "/pinkribbon.svg"
            width={200}
            height={200} 
            alt="pinkRib"
            className=""/>
            </div>
            <div className='self-center'>
            <Image 
            src= "/star.svg"
            width={40}
            height={40} 
            alt="star"
            className=""/>
            </div>
         </div>
         <div className=' flex flex-row flex sm:mr-40 sm:w-fit w-full relative'>
            <div className=' mt-10 ' >
            <Image 
            src= "/flower.svg"
            width={130}
            height={130} 
            alt="flower"
            className=""/>
            </div>
            <div className='mt-20 ml-9 '>
            <Image 
            src= "/ring.svg"
            width={100}
            height={100} 
            alt="ring"
            className=""/>
            </div>
            <div className=' ml-10'>
            <Image 
            src= "/pinkphone.svg"
            width={120}
            height={120} 
            alt="pinkPhone"
            className=""/>
            </div>
         </div>
         <div className=' sm:mr-40 '>
                <Image 
                src= "/Group.svg"
                width={80}
                height={80} 
                alt="champagne"
                className=""/>
            </div>
        
         <div className=' w-full sm:w-fit flex relative sm:mr-40'>
            <div className='pb-4 sm:mr-40'>
                <Image 
                src= "/whitephone.svg"
                width={120}
                height={120} 
                alt="whitephone"
                className=""/>
            </div>
            <div className=' pb-9 pl-9 sm:pl-0 sm:pb-0 sm:absolute sm:left-40 sm:top-10'>
                <Image 
                src= "/toastglass.svg"
                width={100}
                height={100} 
                alt="toastGlass"
                className=""/>
            </div>
            
            <div className='sm:ml-10 sm:mt-20'>
                <Image 
                src= "/phone.svg"
                width={100}
                height={100} 
                alt="orangePhone"
                className=""/>
            </div>

         </div>

        </div>
    <div className='bg-amber-300 w-screen sm:p-4 fixed bottom-0 left-0 flex flex-row overflow-x-hidden'>
        <div className='flex flex-row space-x-10 animate-marquee-infinite w-fit'>
       <h2> Baby Showers </h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       
       <h2> Baby Showers </h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       </div>
       </div>
    </div>
    
</>
  )
}

