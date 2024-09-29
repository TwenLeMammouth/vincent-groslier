import { Card } from '@/components/ui/card'
import React from 'react'

export default function AboutSection() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'>
      <Card className='col-span-1 lg:col-span-2 border-none bg-gray-100 p-8'>
        <h1 className='text-2xl lg:text-4xl' > Passionate versatile Mobile and Web Developper who loves to create</h1>
        <p className='mt-4 text-muted-foreground lg:text-lg'>
          Experienced Full Stack Web and Mobile Developer specializing in JavaScript and UI. 
          Skilled in React.js, Next.js, Figma, and MongoDB. Seasoned in debugging and problem solving, with a passion for creating efficient and user-friendly solutions. Eager to excel in the software realm and contribute to building amazing online experiences. Accomplished in various projects, continuously learning and adapting to new technologies. 
          Excited to further develop my skills and make a significant impact in web development.
        </p>
        <a href="mailto:vgroslier@gmail.com" className="mt-5 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Get in Touch !</span>
        </a>
      </Card>
    </div>
  )
}
