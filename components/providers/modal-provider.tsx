'use client'

import { useEffect, useState } from 'react'

import SettingsModal from '../modals/settings-modal'

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
    </>
  )
}

export default ModalProvider
