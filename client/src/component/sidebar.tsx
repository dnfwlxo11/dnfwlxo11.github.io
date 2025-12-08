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
      h-dvh w-[50%] fixed right-0 top-0 z-10 bg-white 
      border-s-1 border-[#ced4da]
      transform transition-transform duration-500
      ${visible  ? "translate-x-0" : "translate-x-full"}
    `}

  >
    <div className="h-[40px] border-b border-[#ced4da] flex">
      <div 
        className="mt-auto mb-auto p-[0_10px]" 
        onClick={() => setVisible(false)}
      >
        <img className="w-[20px] h-[20px]" src="/icons/double_arrow.svg" alt="double arrow 아이콘" />
      </div>
    </div>
    <div>
      <div className="h-[200px] border-[#ced4da] border-b">
        bg img
      </div>
      <div className="border-b border-[#ced4da] border-b p-[10px]">
        project information
      </div>
      <div className="border-b border-[#ced4da] border-b p-[10px]">
        project description
      </div>
    </div>
  </div>
}