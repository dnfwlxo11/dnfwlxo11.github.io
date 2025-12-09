import { ModalsDispatchContext } from "@/contexts/modalContext"
import useModal from "@/hooks/useModal"
import { useContext, useEffect, useState } from "react"
import Badge from "./badge"

type TechCategory = 'front' | 'back' | 'lang' | 'db'
interface StackItem {
  name: string,
  type: TechCategory
}

type ProjectDesc = {
  id: string | null,
  name: string,
  period_start: string,
  period_end: string,
  src: string | null,
  imgLen: number,
  desc: string,
  descDetail: string[],
  descImg: string[],
  stack: StackItem[]
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
    {isOpen && <div className="fixed h-[100%] w-[100%] left-0 top-0 z-10" onClick={() => setVisible(false)}></div>}
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`
        flex flex-col
        h-dvh w-[60%] fixed right-0 top-0 z-11 bg-white 
        border-s-1 border-[#ced4da]
        transform transition-transform duration-500
        ${visible  ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="h-[40px] p-[0_10px] border-b border-[#ced4da] flex">
        <div className="m-[auto_0]" onClick={() => setVisible(false)}>
          <img className="w-[20px] h-[20px] cursor-pointer" src="/icons/double_arrow.svg" alt="double arrow 아이콘" />
        </div>
      </div>
      <div className="p-[0_40px] flex-1 flex flex-col overflow-hidden">
        <div className="h-[300px] border-[#ced4da] border-b bg-contain bg-center">
          {project.src && <img className="h-[100%] m-auto" src={`${project.src}/logo.png`} />}
        </div>
        <div className="border-b border-[#ced4da] p-[20px_60px]">
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
                <span className="m-[auto_0]">스택</span>
              </div>
              <div className="flex flex-wrap flex-1 gap-[5px]">
                {project.stack.map((stack, idx) => {
                  return <Badge key={idx} type={stack.type}>
                    {stack.name}
                  </Badge>
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={{ scrollbarWidth: 'none' }} className="p-[20px_60px] overflow-auto scroll flex-1">
          {project.descImg.map((img, idx) => {
            return <div key={idx} className="flex flex-col gap-[20px]">
              <div className="h-[400px]">
                <img className="h-[100%]" src={img} alt={`${project.name}의 ${idx + 1}번째 사진`} />
              </div>
              <div className="font-medium leading-[28px] whitespace-pre-wrap">{project.descDetail[idx]}</div>
              <br /><br />
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}