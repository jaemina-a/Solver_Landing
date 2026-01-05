/**
 * BenefitsSection - 장점 소개 섹션
 * 
 * 와요의 주요 장점을 소개하는 섹션
 * - 저렴함: 통상 인건비의 30% 이하 가격
 * - 능동성: 시키지 않아도 일을 찾고 처리
 */
export default function BenefitsSection() {
  const benefits = [
    {
      id: 'affordable',
      title: {
        prefix: '와요는',
        highlight: '저렴하게',
        suffix: '일합니다.',
      },
      description: [
        [
          { text: '통상 인건비의 ', semibold: false },
          { text: '오직 ', semibold: false },
        ],
        [
          { text: '30%', semibold: true },
          { text: ' 이하', semibold: true },
          { text: ' 가격.', semibold: false },
        ],
        [{ text: '일은 잘하지만, 가격은 훨씬 저렴해요.', semibold: false }],
      ],
    },
    {
      id: 'proactive',
      title: {
        prefix: '와요는',
        highlight: '능동적으로',
        suffix: '일합니다.',
      },
      description: [
        [
          { text: '시키지 않아도 ', semibold: true },
          { text: '일을 찾고,', semibold: false },
        ],
        [{ text: '귀찮은 건 대신 맡고, 중요한 건 놓치지 않아요.', semibold: false }],
      ],
    },
  ]

  return (
    <section className="relative bg-black-low py-[40px]">
      <div className="container mx-auto px-0">
        <div className="flex flex-row gap-[20px] items-center justify-center">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-[#414141] flex flex-col h-[299px] items-start justify-between px-[16px] py-[20px] relative rounded-[4px] w-[170px]"
            >
              {/* 제목 */}
              <div className="flex flex-col gap-[2px] items-start leading-[0] text-[20px] text-white-bone-regularAlt tracking-[-0.4px]">
                <p className="font-light leading-[1.4]">{benefit.title.prefix}</p>
                <p className="font-black leading-[1.4]">{benefit.title.highlight}</p>
                <p className="font-light leading-[1.4]">{benefit.title.suffix}</p>
              </div>

              {/* 본문 */}
              <div className="font-light leading-[1.4] text-[12px] text-white-bone-regularAlt">
                {benefit.description.map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-0">
                    {line.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className={item.semibold ? 'font-semibold' : 'font-light'}
                      >
                        {item.text}
                      </span>
                    ))}
                  </p>
                ))}
              </div>

              {/* Inset shadow */}
              <div
                className={`absolute inset-0 pointer-events-none rounded-[4px] ${
                  index === 0
                    ? 'shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.15)]'
                    : 'shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.15)]'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

