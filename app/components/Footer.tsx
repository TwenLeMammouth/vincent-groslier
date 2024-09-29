"use client"

import React from 'react'
import { navigationItems } from './NavBar'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='my-12'>
      <ul className='flex flex-wrap justify-center'>
        {navigationItems.map((item, index) => (
          <div key={index} className='px-5 py-4'>
            <Link href={item.href} className='text-muted-foreground'>
              {item.name}
            </Link>
          </div>
        ))}
      </ul>
      <p className='mt-2 text-center text-muted-foreground'>
        &copy; 2024 Vincent Groslier. All Rights reserved.
      </p>
    </footer>
  )
}
