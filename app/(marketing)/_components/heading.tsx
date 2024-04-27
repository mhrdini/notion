'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Heading: React.FC = () => {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your ideas, documents, and plans. Unified. Welcome to{' '}
        <span className='underline'>Jotion</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Definitely not Notion.
      </h3>
      <Button>
        Start using Jotion
        <ArrowRight className='h-4 2-4 ml-2' />
      </Button>
    </div>
  )
}

export default Heading
