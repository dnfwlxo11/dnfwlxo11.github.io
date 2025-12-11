import { ReactNode } from "react"

export default function badge({ children, type }: { children: ReactNode, type: string}) {
  type colorType = {
    [key: string]: string,
  }
  const color: colorType = {
    front: '#2383e236',
    back: '#8d62ae66',
    lang: '#50906766',
  }

  return (
    <div 
      style={{ backgroundColor: color[type] }}
      className={`rounded-[8px] p-[1px_10px]`}
    >
      {children}
    </div>
  )
}