'use client'
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import Spinner from '@/components/spinner'
import { Button } from '@/components/ui/button'

const Heading: React.FC = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your ideas, documents, and plans. Unified. Welcome to{' '}
        <span className='underline'>Jotion</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Definitely not Notion.
      </h3>
      {isLoading && (
        <div className='w-full flex items-center justify-center'>
          <Spinner />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Get Jotion free <ArrowRight className='h-4 2-4 ml-2' />
          </Button>
        </SignInButton>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter Jotion
            <ArrowRight className='h-4 2-4 ml-2' />
          </Link>
        </Button>
      )}
    </div>
  )
}

export default Heading
