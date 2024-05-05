'use client'

import { useEffect, useState } from 'react'

import CoverImageModal from '@/components/modals/cover-image-modal'
import SettingsModal from '@/components/modals/settings-modal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  // None of the modals are going to be rendered until we are fully on the client-side.
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  )
}

export default ModalProvider
