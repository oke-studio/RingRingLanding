import React from 'react'
import Image from 'next/image'
import ContactForm from '../app/contact/contact-form'

export function HeroSection() {

   
  return (
    <>
    <div className='bg-orange-100  md:h-full w-screen  flex flex-col md:flex md:flex-row relative '>
        {/* left side */}
        <div className=' bg-orange-100 h-full w-full md:h-full flex flex-col relative' >
        <div className=' md:hidden z-0 absolute top-0 left-0'>
            <Image 
            src= "/cake.svg"
            width={100}
            height={100} 
            alt="cake"
            />
            </div>
            <div className='md:hidden absolute top-5 right-0'>
            <Image 
            src= "/pinkribbon.svg"
            width={100}
            height={100} 
            alt="pinkRib"
            className=""/>
            </div>
            <div className=' md:hidden absolute right-5 top-60 '>
            <Image 
            src= "/pinkphone.svg"
            width={100}
            height={100} 
            alt="pinkPhone"
            className=""/>
            </div>
            <div className=' absolute top-60 left-10 md:hidden flex flex-end '>
            <div className=' absolute left-5 lg:left-16 bottom-10'>
            <Image 
            src= "/dot.svg"
            width={10}
            height={10} 
            alt="dot"
            className=""/>
            </div>
            <div className='mt-10'>
            <Image 
            src= "/sickleribbon.svg"
            width={80}
            height={80} 
            alt="sickleribbon"
            className=""/>
            </div>
            </div>
            
           <div className='relative '>
           <div className='h-fit z-10 w-fit md:w-full lg:w-full sm:h-2/4 mx-auto p-5 lg:p-10 xl:p-20 lg:flex items-start'>
            
           <Image 
           src ="/ringringlogo.svg"
           width={150}
           height ={200}
           alt="Ringlogo"
           /> 
           </div>

           <div className='  mt-4 h-fit sm:h-fit w-1/2 mx-auto sm:w-1/2 md:w-full lg:w-full  '> 
            <h1 className=' tk-new-hero text-2xl font-bold text-center md:text-start lg:text-start  ml-0 pl-9 pr-9 w-full  md:text-4xl lg:text-4xl xl:text-5xl sm:leading-10 lg:pl-9'>
                Make your <br/>memories last forever
            </h1>
           </div>
           <div className='  flex flex-col w-3/4  sm:flex sm:flex-col w-full pl-0'>
                <div className=' w-2/3 self-center h-fit md:w-full lg:w-full pl-9 pr-9 ml-0 mt-5 text-base sm:h-fit mt-4 sm:mt-7  md:text-[24px] sm:text-[20px] text-[14px]' >
                    <p className='tk-new-hero'>Your special event needs a bit of magic. 
                        Thats why we're launching the most personal and fun audio phone. 
                        Canada wide shipping! </p>
                </div>
                <div className='h-fit relative'>
               <ContactForm/>
               <div className='md:hidden z-0 absolute top-5 left-2 pb-4 sm:mr-40 '>
                <Image 
                src= "/whitephone.svg"
                width={80}
                height={80} 
                alt="whitephone"
                className=""/>
            </div>
            <div className=' md:hidden absolute right-40 top-10'>
                <Image 
                src= "/toastglass.svg"
                width={100}
                height={100} 
                alt="toastGlass"
                className=""/>
            </div>
            
            <div className=' md:hidden absolute bottom-0 right-5 '>
                <Image 
                src= "/phone.svg"
                width={100}
                height={100} 
                alt="orangePhone"
                className=""/>
            </div>
               </div>
            </div>
            
            </div>
        </div>

        <div className=' hidden h-full  md:w-full w-full md:flex flex-col md:flex items-end'>
        <div className=' flex md:flex md:flex-row lg:mr-16'>
            <div className=' flex flex-end relative'>
            <div className=' absolute left-12 lg:left-16 bottom-11'>
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
         <div className='  flex flex-row flex lg:mr-40 sm:w-fit w-full relative'>
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
         <div className='lg:mr-40 '>
                <Image 
                src= "/Group.svg"
                width={80}
                height={80} 
                alt="champagne"
                className=""/>
            </div>
        
         <div className='w-full md:w-full lg:w-fit flex relative lg:mr-40'>
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
        <div className='z-20 bg-amber-300 w-screen sm:p-4 fixed bottom-0 left-0 flex flex-row '>
        <div className=' flex flex-row whitespace-nowrap w-[200%] overflow-x-hidden'>
         <div className='flex flex-row font-newhero font-extrabold text-[1.2rem] capitalize whitespace-nowrap space-x-40 justify-around w-full animate-marquee'>   
       <h2 > Baby Showers</h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       <h2 > Baby Showers</h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       <h2 > Baby Showers</h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       <h2> Baby Showers</h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       <h2 > Baby Showers</h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       <h2 > Baby Showers</h2>
       <h2>Weddings</h2>
       <h2>Birthdays</h2>
       <h2>Engagement</h2>
       <h2>Graduation</h2>
       </div>
       
      
       </div>
       </div>
    </div>
    
</>
  )
}

