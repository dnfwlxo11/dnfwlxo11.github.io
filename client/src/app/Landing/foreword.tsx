export default function foreword() {
  return (
    <div className="w-[100%]">
      <div className="h-[360px] flex flex-col justify-center items-start leading-[40px]">
        <div className="text-[30px] font-semibold">안녕하세요.</div>
        <div className="text-[30px] font-semibold">임대인 입니다.</div>
        <div className="mt-[20px]">
          <div className="leading-[24px] mb-[10px]">
            안녕하세요 임대인입니다. <br />
            끊임없이 배우며 즐거움을 얻고 성장에 쾌감을 얻습니다.
          </div>
          <div className="leading-[24px]">
            프론트엔드 개발자로 일하고 있으며 전반적인 IT 기술들을 관심있게 바라보며 습득하고 사용하려 노력합니다.
          </div>
        </div>
      </div>
      <div className="bg-[#F1F3F5] px-[10px] py-[5px] rounded-[4px] flex justify-center items-center box-border w-fit">
        <a href="https://github.com/dnfwlxo11" target="_blank">
          Github
        </a>
        <img className="ml-[5px] w-[24px] h-[24px]" src="/icons/github.svg" alt="github 아이콘" />
      </div>
    </div>
  );
}