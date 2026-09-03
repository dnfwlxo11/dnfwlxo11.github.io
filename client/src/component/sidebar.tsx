import { ModalsDispatchContext, ModalsStateContext } from "@/contexts/modalContext"
import useModal from "@/hooks/useModal"
import { useContext, useEffect, useState } from "react"
import Badge from "./badge"
import Image from 'next/image'

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
  logoBg?: string,
  imgLen: number,
  desc: string,
  descDetail: string[],
  descImg: string[],
  stack: StackItem[],
  github: string | null,
  link: string | null,
}

export default function SideBar({ project, isOpen }: { project: ProjectDesc, isOpen: boolean }) {
  const modals = useContext(ModalsStateContext)
  const { close } = useContext(ModalsDispatchContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false)
    }
  }, [isOpen])
  
  const handleTransitionEnd = () => {
    if (!visible) close(SideBar)
  }

  const translateActive = visible 
    ? "sm:translate-x-0 translate-y-0" 
    : "sm:translate-y-0 sm:translate-x-full translate-y-full"

  return <>
    {isOpen && (
      <div
        className={`fixed h-[100%] w-[100%] left-0 top-0 z-10 bg-black/40 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setVisible(false)}
      ></div>
    )}
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`
        flex flex-col z-11
        fixed sm:top-0 right-0
        h-[calc(100%-80px)] w-[100%] min-w-[320px] bottom-0
        sm:h-dvh sm:w-[60%] bg-background
        border-t sm:border-s sm:border-t-0 border-border
        transition-all duration-500
        ${translateActive}
      `}
    >
      <div className="sm:h-11 h-9 px-3 border-b border-border flex items-center justify-end">
        <button
          className="cursor-pointer p-1.5 rounded-full transition-colors hover:bg-surface"
          onClick={() => setVisible(false)}
        >
          <Image unoptimized className="dark:invert" width={16} height={16} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/close.svg`} alt="닫기 아이콘" />
        </button>
      </div>
      <div className="p-[0_40px] flex-1 flex flex-col overflow-hidden">
        <div className="flex min-h-[300px] border-border border-b">
          <div className="w-1/3 m-auto rounded-md p-3" style={{ backgroundColor: project.logoBg || '#ffffff' }}>
            {project.src && <Image className="align-middle" width={200} height={200} objectFit="contain" style={{ width: '100%' }} unoptimized={true} src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.src}/logo.png`} alt="프로젝트 메인 사진" />}
          </div>
          <div className="w-2/3 xl:p-[20px_60px] lg:p-[20px_40px] p-[10px_40px] m-auto">
            <div className="font-semibold sm:text-[28px] text-[18px] sm:mb-[20px] mb-[12px]">{project.name}</div>
            <div className="flex flex-col gap-[10px] sm:text-[18px] text-[12px]">
              <div className="lg:flex block">
                <div className="min-w-[80px] flex text-muted">
                  <Image unoptimized className="m-[auto_0] mr-[5px] dark:invert" width={16} height={16} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/description.svg`} alt="description 아이콘" />
                  <span className="m-[auto_0]">소개</span>
                </div>
                <div>{project.desc}</div>
              </div>
              <div className="lg:flex block">
                <div className="min-w-[80px] flex text-muted">
                  <Image unoptimized className="m-[auto_0] mr-[5px] dark:invert" width={16} height={16} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/calendar_month.svg`} alt="calendar_month 아이콘" />
                  <span className="m-[auto_0]">기간</span>
                </div>
                <div>{project.period_start} ~ {project.period_end}</div>
              </div>
              <div className="lg:flex block">
                <div className="min-w-[80px] flex text-muted">
                  <Image unoptimized className="m-[auto_0] mr-[5px] dark:invert" width={16} height={16} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/code.svg`}alt="code 아이콘" />
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
                <div className="min-w-[80px] flex text-muted">
                  <Image unoptimized className="m-[auto_0] mr-[5px] w-4 h-4 dark:invert" width={16} height={16} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/github.svg`} alt="github 아이콘" />
                  <span className="m-[auto_0]">코드</span>
                </div>
                <a href={project.github} className="text-accent block w-[100%] whitespace-nowrap overflow-hidden text-ellipsis" target="_blank">
                  {project.github}
                </a>
              </div>}
              {project.link && <div className="lg:flex block">
                <div className="min-w-[80px] flex whitespace-nowrap text-muted">
                  <Image unoptimized className="m-[auto_0] mr-[5px] dark:invert" width={16} height={16} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/link.svg`} alt="link 아이콘" />
                  <span className="m-[auto_0]">링크</span>
                </div>
                <a href={project.link} className="text-accent block w-[100%] whitespace-nowrap overflow-hidden text-ellipsis" target="_blank">
                  {project.link}
                </a>
              </div>}
            </div>
          </div>
        </div>
        <div style={{ scrollbarWidth: 'none' }} className="lg:p-[40px_60px] p-[20px_20px] overflow-auto scroll flex-1">
          {project.descImg.map((img, idx) => {
            return <div key={idx} className="flex flex-col gap-[10px] sm:gap-[20px] text-[12px] sm:text-[16px]">
              <Image width={200} height={200} unoptimized={true} objectFit="contain" style={{ width: '100%' }} src={`${process.env.NEXT_PUBLIC_BASE_PATH}${img}`} alt={`${project.name}의 ${idx + 1}번째 사진`} />
              <div className="font-medium leading-[18px] sm:leading-[28px] whitespace-pre-wrap">{project.descDetail[idx]}</div>
              <div className="sm:h-[40px] h-[10px]"></div>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}