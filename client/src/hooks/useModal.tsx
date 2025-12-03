'use client'

import { ModalComponent, ModalProps, ModalsDispatchContext } from "@/contexts/modalContext"
import { useContext } from "react"

export default function useModal() {
  const { open, close } = useContext(ModalsDispatchContext)

  const openModal = (Component: ModalComponent, props: ModalProps) => {
    open(Component, props)
  }

  const closeModal = (Component: ModalComponent) => {
    close(Component)
  }

  return {
    openModal,
    closeModal
  }
}