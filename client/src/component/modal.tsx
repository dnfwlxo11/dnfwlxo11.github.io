import { useState } from "react"

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return <div className="">
    {isOpen ? 
      <div>test</div> 
      : null}
  </div>
}