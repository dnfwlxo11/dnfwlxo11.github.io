import { ModalsDispatchContext } from '@/contexts/modalContext'
import { ReactNode, useContext } from 'react'
import projectModal from '@/component/projectModal';

type ModalType = {
  children: ReactNode,
  isOpen: boolean
}

export default function Modal({ children, isOpen }: ModalType) {
  const { close } = useContext(ModalsDispatchContext)
  
  return <div>
    { isOpen ? 
      <div>
        {children}
        12321312321
        <button onClick={() => close(projectModal)}>test</button>
      </div> : null
    }
  </div>
}