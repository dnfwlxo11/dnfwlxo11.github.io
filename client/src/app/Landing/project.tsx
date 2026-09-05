import SideBar from "@/component/sidebar"
import useModal from "@/hooks/useModal"
import projectDesc from "../../../public/project/desc.js"

export default function project() {
  const { openModal } = useModal()

  const projects = projectDesc

  return (
    <div className="my-16 pt-8 border-t border-border">
      <div className="text-lg sm:text-2xl font-semibold tracking-tight">
        개인 프로젝트
      </div>
      <div className="mt-2 mb-8 text-sm sm:text-base text-muted">
        대학생 시절부터 해왔던 보여주기위함보다 내가 필요하거나 해보고 싶어 진행했던 프로젝트입니다.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, idx) => {
          return <div
            key={idx}
            className="flex flex-col rounded-lg cursor-pointer border border-border bg-surface transition-all duration-200 hover:border-foreground hover:-translate-y-0.5"
            onClick={() => openModal(SideBar, { project })}
          >
            <div
              className="aspect-[4/3] relative rounded-t-lg bg-center border-b border-border bg-white"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/project/${project.id}/logo.png)`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="p-4 flex flex-col flex-1 gap-1.5">
              <div className="text-base font-medium">{project.name}</div>
              <div className="text-sm text-muted leading-snug line-clamp-2">{project.desc}</div>
              <div className="text-xs text-muted mt-auto pt-2">{project.period_start} ~ {project.period_end}</div>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}