"use client";

import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import MobileMenu from './MobileMenu';

export const navigationItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Guestbook',
    href: '/guestbook'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
]

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className='max-w-7xl mx-auto my-2 px-2 md:px-8 py-5 flex flex-row justify-between border-2 glass'>
      <h1 className='text-3xl font-semibold'>Vincent <span className='text-green-500'>Groslier</span></h1>
      <div className='hidden sm:flex justify-center items-center col-span-6'>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink active={pathname == item.href} className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='flex items-center justify-end md:col-span-3 col-span-6'>
        <Button className='hidden sm:flex'><a href='mailto:vgroslier@gmail.com'> Contact Me </a></Button>
        <div className='sm:hidden'>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
