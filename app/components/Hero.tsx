import React from 'react'
import myPhoto from '../../public/myPhoto.jpg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <div className='col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8'>
        <h1 className='text-4xl lg:text-6xl font-medium'>Hello I'm Vincent !</h1>
        <h1 className='text-2xl lg:text-4xl font-normal mt-3'>I'm a Frontend Developper living in France</h1>
        <a href="mailto:vgroslier@gmail.com" className="mt-5 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Get in Touch !</span>
        </a>
      </div>
      <Image src={myPhoto} priority alt="Vincent Groslier" className='col-span-1 h-[430px] object-cover rounded-3xl bg-gray-100' />
    </div>
  )
}
