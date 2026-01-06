'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

/**
 * TestimonialsSection - 와요가 여러분 곁으로 갈 거예요 섹션
 * 
 * 이력서 형태의 문서를 보여주는 섹션
 * - 상단: "와요가 여러분 곁으로 갈 거예요." 텍스트 (sticky)
 * - 하단: 이력서 형태의 문서 (스크롤에 따라 위치 변경)
 * 
 * 스크롤 진행도:
 * - progress 0: 이력서 상단 10%만 보임 (화면 아래에 위치)
 * - progress 0.3: 이력서가 화면 중앙에 배치
 * - progress 1: 이력서가 위로 이동
 */
export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const resumeRef = useRef<HTMLDivElement>(null)

  // 섹션의 스크롤 진행도 계산 (0 ~ 1)
  // 섹션의 시작이 뷰포트 하단에 도달할 때부터, 섹션의 끝이 뷰포트 하단에 도달할 때까지
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // 이력서의 애니메이션 계산
  // progress 0: y = 30vh (화면 하단에 약 30% 튀어나오도록)
  // progress 0.3: y = 0 (중앙)
  // progress 1: y = 0 (중앙 유지)
  const resumeY = useTransform(scrollYProgress, [0, 0.3, 1], ['30vh', '30vh', '0vh'])
  const resumeOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 1], [0, 0.5, 1, 0.2])
  const resumeScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.9, 1, 1])

  // 중앙 정렬을 위한 top 값 계산 (50% + resumeY)
  const resumeTop = useMotionTemplate`calc(50% + ${resumeY})`

  // 텍스트 opacity 계산 (3등분)
  // progress 0~0.45: 첫 번째 텍스트 표시 (비율 증가)
  // progress 0.35~0.7: 두 번째 텍스트 표시
  // progress 0.65~1: 세 번째 텍스트 표시
  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 0.5],
    [1, 1, 0, 0]
  )
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.5, 0.7, 0.75],
    [0, 0, 1, 1, 0]
  )
  const text3Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.85, 1],
    [0, 0, 1, 1]
  )

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black-low to-navy-dark p-0"
      style={{ height: '300vh' }}
    >
      {/* sticky wrapper - section의 직계 자식 (모바일 주소창 변동 대응: 100dvh) */}
      <div className="sticky top-0 left-0 right-0 w-full h-[100dvh] min-h-[100dvh] z-10">
        {/* inner wrapper - container 스타일링 + relative + h-full */}
        <div className="relative h-full w-full">
          {/* canvas - 한 화면 캔버스 (relative h-full) */}

          {/* 이력서 레이어 - absolute, z-10 */}
          <motion.div
            ref={resumeRef}
            style={{
              top: resumeTop,
              left: '50%',
              x: '-50%',
              y: '-50%',
              opacity: resumeOpacity,
              scale: resumeScale,
            }}
            className="absolute z-10"
          >
            <div className="bg-[#d3bfae] border-[3px_3px_3px_0px] border-[#714f30] border-solid rounded-[30px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.12)] w-[270px] h-[420px] overflow-hidden relative">

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[245px] flex flex-col gap-[10px]">
                <div className="absolute bg-[#d9d9d9] h-[352px] left-[3px] top-[3.5px] w-[245px]" />

                <div className="bg-white flex flex-col items-start overflow-hidden rounded-[2px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full relative z-10">
                  <div className="bg-white border-b border-[#2a2a2a] border-solid w-full">
                    <div className="px-[24px] py-[10px] pb-[11px]">
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-[20px] text-black text-center">
                          <p className="font-chosun">이 력 서</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-[#2a2a2a] border-solid w-full">
                    <div className="flex items-start">
                      <div className="bg-white border-r border-[#2a2a2a] border-solid h-[60px] w-[65px] flex flex-col items-center justify-center px-[5px] py-[5px] pr-[6px]">
                        <div className="bg-[#f3f4f6] h-[60px] w-[47px] flex items-center justify-center">
                          <div className="text-[12px] text-[#9ca3af] text-center leading-[18px]">
                            <p className="font-chosun">사진</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col">

                        <div className="border-b border-[#2a2a2a] border-solid flex items-start h-[30px]">
                          <div className="bg-white border-r border-[#2a2a2a] border-solid h-full w-[60px] flex items-center justify-center relative">
                            <div className="absolute left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 text-[12px] text-black text-center leading-[18px]">
                              <p className="font-chosun">성명 </p>
                            </div>
                          </div>
                          <div className="flex-1 bg-white h-full flex items-center justify-center relative">
                            <div className="absolute left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 text-[12px] text-black text-center leading-none">
                              <p className="font-chosun">와요</p>
                            </div>
                          </div>
                        </div>
                        <div className="border-b  flex items-start h-[30px]">
                          <div className="bg-white border-r border-[#2a2a2a] border-solid h-full w-[60px] flex items-center justify-center relative">
                            <div className="absolute left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 text-[12px] text-black text-center leading-[18px]">
                              <p className="font-chosun">기업</p>
                            </div>
                          </div>
                          <div className="flex-1 bg-white h-full flex items-center justify-center relative">
                            <div className="absolute left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 text-[12px] text-black text-center leading-none">
                              <p className="font-chosun">블랙코코넛</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="bg-[#e8e8e8] border-b border-[#2a2a2a] border-solid flex items-start">
                      <div className="flex-1 h-[30px] flex items-center justify-center relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] text-black text-center leading-[18px]">
                          <p className="font-chosun">경력 기술서</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-[#2a2a2a] border-solid px-0 py-[10px] pb-[11px]">
                      <div className="flex-1 flex flex-col justify-center text-[12px] text-black text-center leading-[19.5px]">
                        <p className="font-chosun">회의록 자동 작성 및 정리</p>
                      </div>
                    </div>
                    <div className="border-b border-[#2a2a2a] border-solid px-0 py-[10px] pb-[11px]">
                      <div className="flex-1 flex flex-col justify-center text-[12px] text-black text-center leading-[19.5px]">
                        <p className="font-chosun">프로젝트 데이터베이스 업데이트</p>
                      </div>
                    </div>
                    <div className="border-b border-[#2a2a2a] border-solid px-0 py-[10px] pb-[11px]">
                      <div className="flex-1 flex flex-col justify-center text-[12px] text-black text-center leading-[19.5px]">
                        <p className="font-chosun">팀 문서 자동 생성</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white h-[83px] w-full px-[24px] py-[20px]">
                    <div className="flex flex-col gap-[8px] items-start">
                      <div className="w-full">
                        <div className="text-[12px] text-black leading-[18px]">
                          <p className="font-chosun">위의 기재사항은 사실과 틀림없습니다.</p>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="text-[12px] text-black leading-[18px]">
                          <p className="font-chosun">작성일: 2026년 1월 8일</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 텍스트 레이어 - absolute inset-0, z-20, 중앙 고정 */}
          <div className="absolute inset-0 flex items-center justify-center z-20 p-10">
            {/* 첫 번째 텍스트: "와요가 여러분 곁으로 갈 거예요." */}
            <motion.div
              style={{ opacity: text1Opacity }}
              className="absolute"
            >
              <h2 className="text-[32px] font-extralight text-white-bone-regularAlt text-center tracking-[-1.28px] leading-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <p className="mb-0">와요가 여러분</p>
                <p>곁으로 갈 거예요.</p>
              </h2>
            </motion.div>

            {/* 두 번째 텍스트: "AI, 이젠 사용하지 마세요." */}
            <motion.div
              style={{ opacity: text2Opacity }}
              className="absolute"
            >
              <h2 className="text-h2 text-white-bone-regularAlt text-center tracking-[-1.28px] leading-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <p className="mb-0">AI, 이젠</p>
                <p>사용하지 마세요.</p>
              </h2>
            </motion.div>

            {/* 세 번째 텍스트: "와요를 채용하세요" + 버튼 */}
            <motion.div
              style={{ opacity: text3Opacity }}
              className="absolute flex flex-col items-center gap-4 z-100"
            >
              <h2 className="flex text-h2 text-white-bone-regularAlt text-center tracking-[-1.28px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <p className="mr-2">와요를</p>
                <p className="bg-gradient-to-b from-white-bone-regularAlt to-[#46DDFF] bg-clip-text text-transparent">채용</p>
                <p>하세요</p>
              </h2>
              {/* 버튼 */}
              <button
                className="bg-gradient-to-b from-black-low to-navy-dark rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] px-[16px] py-[8px]"
                onClick={() => {
                  console.log("스크롤슉")
                  const target = document.getElementById('contact-section')
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="text-[12px] font-bold text-white-bone-regularAlt leading-[1.4] text-center align-middle justify-center">
                  와요 도입 상담하기
                </span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

