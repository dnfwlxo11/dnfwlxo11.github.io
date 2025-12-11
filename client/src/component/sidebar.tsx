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
  stack: StackItem[],
  github: string | null,
  link: string | null,
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
        h-[calc(100%-80px)] w-[100%] min-w-[320px] bottom-0
        sm:h-dvh sm:w-[60%] sm:top-0 right-0 fixed z-11 bg-white
        border-t-1 sm:border-s-1 sm:border-t-0 border-[#ced4da]
        transform transition-transform duration-500
        ${visible  ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-y-0 sm:translate-x-full"}
      `}
    >
      <div className="sm:h-[40px] h-[32px] p-[0_10px] border-b border-[#ced4da] flex">
        <div className="m-[auto_0]" onClick={() => setVisible(false)}>
          <img className="w-[20px] h-[20px] cursor-pointer" src="/icons/close.svg" alt="double arrow 아이콘" />
        </div>
      </div>
      <div className="p-[0_40px] flex-1 flex flex-col overflow-hidden">
        <div className="flex min-h-[300px] border-[#ced4da] border-b">
          <div className="w-1/3 m-auto">
            {project.src && <img className="w-[100%] align-middle" src={`${project.src}/logo.png`} />}
          </div>
          <div className="w-2/3 xl:p-[20px_60px] lg:p-[20px_40px] p-[10px_40px] m-auto">
            <div className="font-semibold sm:text-[28px] text-[18px] sm:mb-[20px] mb-[12px]">{project.name}</div>
            <div className="flex flex-col gap-[10px] sm:text-[18px] text-[12px]">
              <div className="lg:flex block">
                <div className="min-w-[80px] flex">
                  <img className="w-[16px] h-[16px] m-[auto_0] mr-[5px]" src="/icons/description.svg" alt="description 아이콘" />
                  <span className="m-[auto_0]">소개</span>
                </div>
                <div>{project.desc}</div>
              </div>
              <div className="lg:flex block">
                <div className="min-w-[80px] flex">
                  <img className="w-[16px] h-[16px] m-[auto_0] mr-[5px]" src="/icons/calendar_month.svg" alt="calendar_month 아이콘" />
                  <span className="m-[auto_0]">기간</span>
                </div>
                <div>{project.period_start} ~ {project.period_end}</div>
              </div>
              <div className="lg:flex block">
                <div className="min-w-[80px] flex">
                  <img className="w-[16px] h-[16px] m-[auto_0] mr-[5px]" src="/icons/code.svg" alt="code 아이콘" />
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
              {project.github && <div className="lg:flex block">
                <div className="min-w-[80px] flex">
                  <img className="w-[16px] h-[20px] m-[auto_0] mr-[5px]" src="/icons/github.svg" alt="github 아이콘" />
                  <span className="m-[auto_0]">코드</span>
                </div>
                <a href={project.github} className="text-[#2196F3] block w-[100%] whitespace-nowrap overflow-hidden text-ellipsis" target="_blank">
                  {project.github}
                </a>
              </div>}
              {project.link && <div className="lg:flex block">
                <div className="min-w-[80px] flex whitespace-nowrap">
                  <img className="w-[16px] h-[16px] m-[auto_0] mr-[5px]" src="/icons/link.svg" alt="link 아이콘" />
                  <span className="m-[auto_0]">링크</span>
                </div>
                <a href={project.link} className="text-[#2196F3] block w-[100%] whitespace-nowrap overflow-hidden text-ellipsis" target="_blank">
                  {project.link}
                </a>
              </div>}
            </div>
          </div>
        </div>
        <div style={{ scrollbarWidth: 'none' }} className="lg:p-[40px_60px] p-[20px_20px] overflow-auto scroll flex-1">
          {project.descImg.map((img, idx) => {
            return <div key={idx} className="flex flex-col gap-[10px] sm:gap-[20px] text-[12px] sm:text-[16px]">
              <img className="h-[100%] object-contain" src={img} alt={`${project.name}의 ${idx + 1}번째 사진`} />
              <div className="font-medium leading-[18px] sm:leading-[28px] whitespace-pre-wrap">{project.descDetail[idx]}</div>
              <div className="sm:h-[40px] h-[10px]"></div>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}