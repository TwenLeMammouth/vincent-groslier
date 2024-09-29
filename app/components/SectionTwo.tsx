import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import alpes from '../../public/alpes.jpg'
import github from '../../public/github.png'

export default function SectionTwo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'>
      <div className='w-full relative col-span-1'>
        <Image src={alpes} alt='alpes' className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='flex flex-col w-full col-span-1 lg:col-span-2 gap-4'>
        <Card className='bg-gray-100 border-none'>
          <CardHeader>
            <CardTitle>Explore my Stack</CardTitle>
            <CardDescription>Check out the tools I use daily</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-4'>
            <CardTitle>Figma</CardTitle>
            <CardTitle>Figma</CardTitle>
            <CardTitle>Figma</CardTitle>
            <CardTitle>Figma</CardTitle>
            <CardTitle>Figma</CardTitle>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          <Card className='p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none'>
            <Image width={48} height={48} className="w-16 h-16" alt='github' src={github} />
          </Card>
          <Card className='p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none'>
            <Image width={48} height={48} className="w-16 h-16" alt='github' src={github} />
          </Card>
          <Card className='p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none'>
            <Image width={48} height={48} className="w-16 h-16" alt='github' src={github} />
          </Card>

        </div>
      </div>
    </div>
  )
}
