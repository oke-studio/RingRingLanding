'use client'

import React from 'react'

export default function ContactForm() {

    async function handleSubmit(event:any) {
        event.preventDefault();
        let data={
            email: String(event.target.email.value)
        }
       
    
    }
  return (
    <div className="flex flex-col">
          <form onSubmit={handleSubmit} name="contact" data-netlify="true" method="post" className='flex flex-col pl-8  sm:w-full' data-netlify-honeypot="bot-field">
                <input className='hidden' />
                <input type="email" required placeholder='Enter your email Address' id="email" name="email"className=" bg-white rounded-md h-fit w-3/4 sm: sm:w-4/5 p-2 mt-3 "/>
                <button type="submit" className='bg-red-700 text-white flex flex-start  p-3 rounded-3xl w-fit mt-5 mb-7'>Notify me for preorder </button>
                </form>
    </div>
  )
}

