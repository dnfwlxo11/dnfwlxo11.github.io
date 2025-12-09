import SideBar from "@/component/sidebar"
import useModal from "@/hooks/useModal"
import projectDesc from "../../../public/project/desc.js"

export default function project() {
  const { openModal } = useModal()

  const projects = projectDesc

  return (
    <div className="my-[30px] mb-[60px]">
      <div className="sm:text-[24px] text-[18px] font-semibold">
        개인 프로젝트
      </div>
      <div className="my-[5px] mb-[20px] sm:text-[20px] text-[14px]">
        대학생 시절부터 해왔던 보여주기위함보다 내가 필요하거나 해보고 싶어 진행했던 프로젝트입니다. <br />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-3 gap-[20px]">
        {projects.map((project, idx) => {
          return <div key={idx} className="flex flex-col bg-white rounded-[6px] cursor-pointer shadow-md bg-center hover:scale-102 transition-all duration-200">
            <div 
              className='aspect-[4/3] box-border p-[10px] relative rounded-[6px_6px_0_0] bg-center border-b border-[#F3F5F7]'
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1)), url(/project/${project.id}/logo.png)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => openModal(SideBar, { project })}
            ></div>
            <div className="m-[10px_20px_14px_14px] flex flex-col">
              <div className="stroke-black text-[16px] mb-[10px] font-medium">{project.name}</div>
              <div className="leading-[14px] text-[12px] mb-[5px]">{project.desc}</div>
              <div className="leading-[12px] text-[12px]">{project.period_start} ~ {project.period_end}</div>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}