'use client'

import React from 'react'
import Image from 'next/image';
export default function ContactForm() {

    async function handleSubmit(event:any) {
        event.preventDefault();
        let data={
            email: String(event.target.email.value)
        }
       
    
    }
  return (
    <div className="  flex flex-col flex items-center md:flex-items-start w-full  h-full pb-20 ">
          <form onSubmit={handleSubmit} name="contact" data-netlify="true" method="post" className='z-10 flex flex-col  md:pl-8 w-1/2  md:w-full ' data-netlify-honeypot="bot-field">
                <input className='hidden' />
                <input type="email" required placeholder='Enter your email Address' id="email" name="email"className=" bg-white rounded-md h-fit w-full text-center md:text-start md:w-4/5 p-2 mt-3 "/>
                <button type="submit" className='bg-red-700 text-white self-center md:self-start md:flex flex-start  p-3 rounded-3xl w-fit mt-5 mb-7 '>Notify me for preorder </button>
                </form>
              

         
    </div>
  )
}

