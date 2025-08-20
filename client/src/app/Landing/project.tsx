export default function project() {
  const projects = [
    { id: 'ddibuLog', name: '띠부로그', period_start: '2025-06-14', period_end: 'ing', src: '/project/ddibuLog/', imgLen: 5 },
    { id: 'tool', name: '국제화 관리 툴', period_start: '2023-12-14', period_end: '2023-12-27 (중단)', src: '/project/i18n-manage-tool', imgLen: 2 },
    { id: 'aurora', name: 'Aurora', period_start: '2023-05-09', period_end: '2023-05-23 (중단)', src: '/project/aurora', imgLen: 3 },
    { id: 'pickMem', name: 'PickTheMoment', period_start: '2022-03-07', period_end: '2022-04-18', src: '/project/pickMem', imgLen: 5 },
    { id: 'lyricsPlayer', name: 'LyricsPlayer', period_start: '2021-12-23', period_end: '2022-03-05', src: '/project/lyricsPlayer', imgLen: 4 },
    { id: 'easy', name: 'EveryCanAI', period_start: '2021-11-04', period_end: '2021-12-02', src: '/project/easy', imgLen: 4 },
    { id: 'certainFrame', name: '이거 어딨어?', period_start: '2021-06-18', period_end: '2021-07-09', src: '/project/certainFrame', imgLen: 3 },
    { id: null, name: '캐치마인드', period_start: '2021-05-26', period_end: '2021-06-09', src: null, imgLen: 0 },
    { id: 'itub', name: 'I-Tub', period_start: '2020-04-20', period_end: '2020-06-25', src: '/project/itub', imgLen: 6 },
    { id: 'cafi', name: '카피', period_start: '2019-11-18', period_end: '2019-12-09', src: '/project/cafi', imgLen: 5 },
    { id: 'alsong', name: '알쏭', period_start: '2018-10-04', period_end: '2018-10-30', src: '/project/alsong', imgLen: 5 },
    { id: 'match', name: '매치메이커', period_start: '2017-10-02', period_end: '2017-10-20', src: '/project/match', imgLen: 5 },
  ]



  return (
    <div>
      <div className="text-[24px] font-semibold">
        개인 프로젝트
      </div>
      <div className="my-[5px] mb-[20px]">
        대학생 시절부터 해왔던 보여주기위함보다 내가 필요하거나 해보고 싶어 진행했던 프로젝트입니다. <br />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-[20px]">
        {projects.map((project, idx) => {
          return <div 
            key={idx} 
            className='aspect-[4/3] bg-[#F1F3F5] rounded-[8px] box-border p-[10px] relative cursor-pointer shadow-md bg-center'
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1)), url(/project/${project.id}/${project.id}_1.jpg)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="mt-auto absolute bottom-[10px] left-0 w-full py-[5px] bg-[rgba(0,0,0,0.2)] text-[#f8f9fa]">
              <div className="ml-[10px] leading-[18px] text-[14px] font-semibold">{project.name}</div>
              <div className="ml-[10px] leading-[12px] text-[12px] font-medium">test</div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}