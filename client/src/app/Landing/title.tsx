import Image from 'next/image'

export default function title() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-start my-16 sm:my-20">
        <div className="text-2xl sm:text-4xl font-bold tracking-tight leading-snug">
          안녕하세요, <span className="text-accent">임대인</span>입니다.
        </div>
        <div className="mt-5 max-w-xl">
          <div className="leading-relaxed mb-2 text-sm sm:text-lg text-muted">
            끊임없이 배우며 즐거움을 얻고 성장에 쾌감을 얻습니다.
          </div>
          <div className="leading-relaxed text-sm sm:text-lg text-muted">
            프론트엔드 개발자로 일하고 있으며 전반적인 IT 기술들을 관심있게 바라보며 습득하고 사용하려 노력합니다.
          </div>
        </div>
      </div>
      <a
        href="https://github.com/dnfwlxo11"
        target="_blank"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm font-medium transition-colors hover:border-foreground w-fit"
      >
        GitHub
        <Image unoptimized className="w-3.5 h-3.5 dark:invert" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/github.svg`} width={14} height={14} alt="github 아이콘" />
      </a>
    </div>
  );
}
