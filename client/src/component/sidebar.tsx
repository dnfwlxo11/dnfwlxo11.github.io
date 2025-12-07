import { ModalsDispatchContext, ModalsStateContext } from "@/contexts/modalContext"
import useModal from "@/hooks/useModal"
import { useContext, useEffect, useState } from "react"

export default function SideBar() {
  const { isOpen: IsOpen } = useModal()
  const { close } = useContext(ModalsDispatchContext)

  const isOpen = IsOpen('SideBar')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!visible) close(SideBar)
  }

  return <div
    onTransitionEnd={handleTransitionEnd}
    className={`
      h-dvh w-[300px] fixed right-0 top-0 z-10 bg-blue-300 
      transform transition-transform duration-500
      ${visible  ? "translate-x-0" : "translate-x-full"}
    `}

  >
    <div onClick={() => setVisible(false)}>close</div>
    sideBar
  </div>
}