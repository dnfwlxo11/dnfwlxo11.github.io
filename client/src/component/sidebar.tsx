import { ModalsDispatchContext, ModalsStateContext } from "@/contexts/modalContext"
import useModal from "@/hooks/useModal"
import { useContext, useEffect, useState } from "react"

type ProjectDesc = {
  id: string | null,
  name: string,
  period_start: string,
  period_end: string,
  src: string | null,
  imgLen: number,
  desc: string
}

export default function SideBar({ project }: { project: ProjectDesc }) {
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

  return <>
    {isOpen && <div className="absolute h-[100%] w-[100%] left-0 top-0 z-10" onClick={() => setVisible(false)}></div>}
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`
        h-dvh w-[50%] fixed right-0 top-0 z-11 bg-white 
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
        <div className="h-[200px] border-[#ced4da] border-b bg-contain bg-center">
          {project.src && <img className="h-[100%] m-auto" src={`${project.src}/${project.id}_1.jpg`} />}
        </div>
        <div className="border-b border-[#ced4da] p-[10px] p-[20px_60px]">
          <div className="font-semibold text-[28px] mb-[20px]">{project.name}</div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex">
              <div className="w-[80px] flex">
                <img className="w-[16px] h-[16px] m-[auto_0] mr-[5px]" src="/icons/description.svg" alt="double arrow 아이콘" />
                소개
              </div>
              <div>{project.desc}</div>
            </div>
            <div className="flex">
              <div className="w-[80px] flex">
                <img className="w-[16px] h-[16px] m-[auto_0] mr-[5px]" src="/icons/calendar_month.svg" alt="double arrow 아이콘" />
                기간
              </div>
              <div>{project.period_start} ~ {project.period_end}</div>
            </div>
            <div className="flex">
              <div className="w-[80px] flex">
                <img className="w-[16px] h-[16px] m-[auto_0] mr-[5px]" src="/icons/code.svg" alt="double arrow 아이콘" />
                스택
              </div>
              <div>Vue.js</div>
            </div>
          </div>
        </div>
        <div className="border-b border-[#ced4da] p-[10px] p-[20px_60px]">
          project description <br /><br /><br />

          프로젝트를 진행했습니다 <br />
          얄리얄리얄라리
        </div>
      </div>
    </div>
  </>
}