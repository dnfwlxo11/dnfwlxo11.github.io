import { ModalsDispatchContext, ModalsStateContext } from "@/contexts/modalContext"
import useModal from "@/hooks/useModal"
import { useContext, useEffect, useState } from "react"
import Badge from "./badge"
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'

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
  descMd: string,
  stack: StackItem[],
  github: string | null,
  link: string | null,
}

const markdownComponents = {
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="mb-3 last:mb-0" {...props} />,
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => <strong className="font-semibold" {...props} />,
  a: (props: React.ComponentPropsWithoutRef<'a'>) => <a className="text-accent underline" target="_blank" {...props} />,
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="list-disc pl-5 mb-3" {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="list-decimal pl-5 mb-3" {...props} />,
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="text-xl font-bold mb-3" {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-lg font-bold mb-2" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="text-base font-bold mb-2" {...props} />,
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}${props.src}`}
      className="w-full object-contain my-3"
    />
  ),
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto my-3">
      <table className="w-full table-fixed border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.ComponentPropsWithoutRef<'thead'>) => <thead {...props} />,
  th: (props: React.ComponentPropsWithoutRef<'th'>) => (
    <th className="border border-border p-2 text-center text-sm text-muted font-medium" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<'td'>) => (
    <td className="border border-border p-2 align-middle" {...props} />
  ),
}

export default function SideBar({ project, isOpen }: { project: ProjectDesc, isOpen: boolean }) {
  const modals = useContext(ModalsStateContext)
  const { close } = useContext(ModalsDispatchContext)
  const [visible, setVisible] = useState(false)
  const [descMdContent, setDescMdContent] = useState('')

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false)
    }
  }, [isOpen])

  useEffect(() => {
    let cancelled = false
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}${project.descMd}`)
      .then((res) => res.text())
      .then((text) => {
        if (!cancelled) setDescMdContent(text)
      })
    return () => { cancelled = true }
  }, [project])
  
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
          <div className="w-1/3 m-auto bg-white rounded-md p-3">
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
          <div className="font-medium leading-[18px] sm:leading-[28px]">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} rehypePlugins={[rehypeRaw]} components={markdownComponents}>
              {descMdContent}
            </ReactMarkdown>
          </div>
          <div className="sm:h-[40px] h-[10px]"></div>
        </div>
      </div>
    </div>
  </>
}