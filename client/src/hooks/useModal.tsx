'use client'

import { ModalComponent, ModalProps, ModalsDispatchContext, ModalsStateContext } from "@/contexts/modalContext"
import { useContext } from "react"

export default function useModal() {
  const modals = useContext(ModalsStateContext)
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