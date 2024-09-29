import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { navigationItems } from './NavBar'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  
  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className='w-4 h-4' />
        </Button>
      </SheetTrigger>
      <SheetContent className="glass">
        <div className="mt-5 px-2 flex space-y-1 flex-col">
          {navigationItems.map((item, index) => (
            <Link key={index} href={item.href} className={cn(
              pathname == item.href 
              ? "bg-muted glass" 
              : "hover:bg-muted hover:bg-opacity-75",
              "group flex items-center p-2 text-sm font-medium rounded-md"
              )}>
              {item.name}
            </Link>
          ))}
        </div>
        <SheetFooter className='mt-5'>
          <SheetClose asChild>
            <Button type="submit">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
