'use client'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import Link from 'next/link'
import React from 'react'

import Spinner from '@/components/spinner'
import { Button } from '@/components/ui/button'
import useScrollTop from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'

import { ModeToggle } from '../../../components/mode-toggle'
import Logo from './logo'

const Navbar: React.FC = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button variant='ghost' size='sm'>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>Get Jotion free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost' size='sm'>
              <Link href='/documents'>Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl='/' />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
