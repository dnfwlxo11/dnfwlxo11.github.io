import SideBar from "@/component/sidebar"
import useModal from "@/hooks/useModal"

export default function project() {
  const { openModal } = useModal()

  const projects = [
    { id: 'ddibuLog', name: '띠부로그', period_start: '2025-12-01', period_end: 'ing', src: '/project/ddibuLog/', imgLen: 5, desc: '띠부씰 수집가를 위한 사이트', stack: [{ name: 'Nuxt3', type: 'front' }] },
    { id: 'i18n-manage-tool', name: '국제화 관리 툴', period_start: '2023-12-14', period_end: '2023-12-27 (중단)', src: '/project/i18n-manage-tool', imgLen: 2, desc: '구글 시트 기반의 다국어 관리 툴', stack: [{ name: 'Electron', type: 'back' }, { name: 'Vue3', type: 'front' }] },
    { id: 'aurora', name: 'Aurora', period_start: '2023-05-09', period_end: '2023-05-23 (중단)', src: '/project/aurora', imgLen: 3, desc: 'nuxt 기반의 프로젝트 분석 툴', stack: [{ name: 'Nuxt3', type: 'front' }] },
    { id: 'pickMem', name: 'PickTheMoment', period_start: '2022-03-07', period_end: '2022-04-18', src: '/project/pickMem', imgLen: 5, desc: '오프라인의 간편 사진 찍기를 온라인화 시킨 서비스', stack: [{ name: 'Vue2', type: 'front' }] },
    { id: 'lyricsPlayer', name: 'LyricsPlayer', period_start: '2021-12-23', period_end: '2022-03-05', src: '/project/lyricsPlayer', imgLen: 4, desc: '단순 음악 사이트에 가사의 감정분석을 합친 스트리밍 서비스', stack: [{ name: 'Vue2', type: 'front' }, { name: 'Node.js', type: 'back' }] },
    { id: 'itub', name: 'I-Tub', period_start: '2020-04-20', period_end: '2020-06-25', src: '/project/itub', imgLen: 6, desc: 'IOT 기반의 자동화 샤워 서비스', stack: [{ name: 'Raspberry.pi', type: 'back' }, { name: 'Node.js', type: 'back' }] },
    { id: 'cafi', name: '카피', period_start: '2019-11-18', period_end: '2019-12-09', src: '/project/cafi', imgLen: 5, desc: 'IOT 기반의 병어 분류 서비스', stack: [{ name: 'Raspberry.pi', type: 'back' }, { name: 'Node.js', type: 'back' }] },
    { id: 'match', name: '매치메이커', period_start: '2017-10-02', period_end: '2017-10-20', src: '/project/match', imgLen: 5, desc: '체육활동 대전상태 매칭 앱', stack: [{ name: 'Android native', type: 'back' }, { name: 'Node.js', type: 'back' }] },
  ]

  return (
    <div className="my-[30px] mb-[60px]">
      <div className="sm:text-[24px] text-[18px] font-semibold">
        개인 프로젝트
      </div>
      <div className="my-[5px] mb-[20px] sm:text-[22px] text-[16px]">
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
              <div className="leading-[12px] text-[12px] mb-[3px]">{project.desc}</div>
              <div className="leading-[12px] text-[12px]">{project.period_start} ~ {project.period_end}</div>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}