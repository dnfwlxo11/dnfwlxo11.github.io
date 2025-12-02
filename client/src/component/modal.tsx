import { ModalsDispatchContext, ModalStateContext } from "@/contexts/modalContext"
import { useContext, useState } from "react"

export default function Modal() {
  const modalContext = useContext(ModalStateContext)
  const { onClose: close } = useContext(ModalsDispatchContext)

  return modalContext.map((modal, idx) => {
    const { Component, props, isOpen } = modal
    if (!props) return null

    const { onSubmit, ...rest } = props

    const onClose = () => close(Component)

    const handleSubmit = async () => {
      // if (typeof onSubmit === "function") {
      //   await onSubmit()
      // }

      onClose()
    }

    return <Component key={idx} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} {...rest}/>
  }) 
}