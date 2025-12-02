import { ReactNode } from 'react'

type ModalType = {
  children: ReactNode,
  isOpen: boolean
}

export default function Modal({ children, isOpen }: ModalType) {
  return <div>
    {isOpen}
    { isOpen ? 
      <div>
        {children}
        12321312321
      </div> : null
    }
  </div>
}