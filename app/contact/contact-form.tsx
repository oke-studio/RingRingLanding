'use client'

import React, { useState,useEffect } from 'react'
import Image from 'next/image';
export default function ContactForm() {

  const [message,setmessage] = useState(false)

  useEffect(() => {
    console.log(message)
  }, [message])
  
    async function handleSubmit(event:any) {
        event.preventDefault();
        let data={
            email: String(event.target.email.value)
        }
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString(),
        })
          .then(() => setmessage(!false))
          .catch((error) => alert(error));
    
    }
  return (
    <div className="   flex flex-col flex items-center md:flex-items-start w-full  h-full pb-0 lg:pt-5 ">
          <form name="contact" data-netlify="true" method="POST" className='z-10 flex flex-col  md:pl-8 w-1/2  md:w-full ' data-netlify-honeypot="bot-field" autoComplete="off" onSubmit={handleSubmit}>
                <input type ='hidden' name='form-name' value='contact' />
                <input type="email" required placeholder='Enter your email Address'  name="email"className=" bg-white rounded-md h-fit w-full text-center md:text-start md:w-4/5 p-2 mt-3 "/>
                <button type="submit" className='bg-[#BD4230] font-newhero font-normal text-white self-center md:self-start md:flex flex-start  p-3 border-b-4 border-b-[#5E2017] rounded-3xl w-fit mt-5 mb-7 '>Notify me for preorders </button>
                {message? <div>Thank you, your email has been received</div> :'this works'}
                </form>
              

         
    </div>
  )
}

