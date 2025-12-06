import { ModalsDispatchContext, ModalsStateContext } from "@/contexts/modalContext"
import useModal from "@/hooks/useModal"
import { useContext } from "react"

export default function SideBar() {
  const { isOpen } = useModal()
  const { close } = useContext(ModalsDispatchContext)

  const pushSide = () => {
    close(SideBar)
  }

  return <div>
    { isOpen('SideBar') ? 
      <div className="h-dvh w-[300px] fixed right-0 top-0 z-10 bg-blue-300">
        <div onClick={pushSide}>close</div>
        sideBar
      </div> : null
    }
  </div>
}