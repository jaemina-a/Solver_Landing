/**
 * IntroSection - 소개 섹션
 * 
 * 채용 관련 고민을 다루는 섹션
 * - 상단: 사람 정보 카드 (1열, 3개)
 * - 하단: 메인 질문과 서브 텍스트
 */
export default function IntroSection() {
  // 카드 데이터 - 열(column) 단위로 구성
  const columns = [
    // 열 1
    {
      id: 1,
      cards: [
        {
          name: '이소민',
          role: '경리',
          salary: '220만원',
          bgColor: 'rgba(255,205,118,0.2)',
          textOpacity: 0.7,
          IconFillOpacity: 0.7,
        },
        {
          name: '조재민',
          role: '개발자',
          salary: '400만원',
          bgColor: 'rgba(85,255,119,0.2)',
          textOpacity: 0.5,
          empty: true,
        },
      ],
    },
    // 열 2
    {
      id: 2,
      cards: [
        {
          name: '조재민',
          role: '개발자',
          salary: '400만원',
          bgColor: 'rgba(85,255,119,0.2)',
          textOpacity: 0.8,
          hasTopCard: true,
          topCardColor: 'rgba(255, 124, 189, 0.2)',
          IconFillOpacity: 0.5,
        },

        {
          name: '배정원',
          role: 'PM',
          salary: '120만원',
          bgColor: 'rgba(70,221,255,0.2)',
          textOpacity: 0.8,
          empty: true,
        },

      ],
    },
    // 열 3
    {
      id: 3,
      cards: [
        {
          name: '배정원',
          role: 'PM',
          salary: '120만원',
          bgColor: 'rgba(70,221,255,0.2)',
          textOpacity: 0.8,
          IconFillOpacity: 0.8,
        },
        {
          name: '배정원',
          role: 'PM',
          salary: '120만원',
          bgColor: 'rgba(225,118,79,0.2)',
          textOpacity: 0.8,
          empty: true,
        },
      ],
    },
    {
      id: 4,
      cards: [
        {
          name: '배정원',
          role: 'PM',
          salary: '120만원',
          bgColor: 'rgba(225, 205, 118, 0.2)',
          hasTopCard: true,
          topCardColor: 'rgba(85, 255, 119, 0.2)',
          textOpacity: 0.8,
          empty: true,
        },
        {
          name: '정지현',
          role: '서버',
          salary: '430만원',
          bgColor: 'rgba(255, 124, 189, 0.2)',
          textOpacity: 0.8,
          IconFillOpacity: 0.6,
        },
      ],
    },
    {
      id: 5,
      cards: [
        {
          name: '천현주',
          role: '디자이너',
          salary: '320만원',
          bgColor: 'rgba(255, 154, 121, 0.2)',
          textOpacity: 0.8,
          IconFillOpacity: 0.3,
          empty: false,
        },
        {
          name: '배정원',
          role: 'PM',
          salary: '120만원',
          bgColor: 'rgba(70, 221, 255, 0.2)',
          textOpacity: 0.8,
          empty: true,
        },
        {
          name: '이민석',
          role: '사무보조',
          salary: '220만원',
          bgColor: 'rgba(85, 255, 119, 0.2)',
          textOpacity: 0.8,
          IconFillOpacity: 0.2,
          empty: false,
        },
      ],
    },
  ]

  // 카드 컴포넌트
  const Card = ({
    card,
    index,
  }: {
    card: {
      name: string
      role: string
      salary: string
      bgColor: string
      textOpacity: number
      hasTopCard?: boolean
      topCardColor?: string
      bottomCardColor?: string
      isIconBright?: boolean
      isIconDark?: boolean
      empty?: boolean
      IconFillOpacity?: number
    }
    index: number
  }) => (
    <div className="flex flex-col gap-[10px] items-center py-0">
      {/* 상단 빈 카드 (일부 카드에만) */}
      {card.hasTopCard && (
        <div
          className="h-[68.5px] w-[87px] rounded-lg"
          style={{ backgroundColor: card.topCardColor }}
        />
      )}

      {/* 메인 카드 */}
      <div
        className="flex flex-col gap-[10px] items-center justify-center p-5 rounded-lg h-[137px] w-[87px]"
        style={{ backgroundColor: card.bgColor }}
      >
        {!card.empty && (
          <>
            {/* 아이콘 */}
            <div className="h-[26px] w-[21px] relative">
              {/* 실제 아이콘 이미지로 교체 필요 */}
              

                <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: card.isIconBright ? '#F9F6EE' : '#F9F6EE' }}>
                  <path d="M17.8138 7.48503C17.8138 11.6189 14.5717 14.9701 10.5724 14.9701C6.57311 14.9701 3.33103 11.6189 3.33103 7.48503C3.33103 3.35116 6.57311 0 10.5724 0C14.5717 0 17.8138 3.35116 17.8138 7.48503Z" fill="#F9F6EE" fillOpacity={card.IconFillOpacity} />
                  <path d="M10.5 17.0659C16.299 17.0659 21 20.417 21 24.5509C21 24.7017 20.9935 24.8514 20.9812 25H0.0188106C0.00647559 24.8514 0 24.7017 0 24.5509C0 20.417 4.70101 17.0659 10.5 17.0659Z" fill="#F9F6EE" fillOpacity={card.IconFillOpacity} />
                </svg>
              
              

            </div>

            {/* 정보 텍스트 */}
            <div className="flex flex-col gap-[2px] items-start">
              <div
                className="flex gap-[5px] items-start text-[8px] leading-none"
                style={{ color: `rgba(249,246,238,${card.IconFillOpacity ?? card.textOpacity})` }}
              >
                <span className="font-normal">이름</span>
                <span className="font-bold">{card.name}</span>
              </div>
              <div
                className="flex gap-[5px] items-start text-[8px] leading-none"
                style={{ color: `rgba(249,246,238,${card.IconFillOpacity ?? card.textOpacity})` }}
              >
                <span className="font-normal">직무</span>
                <span className="font-bold">{card.role}</span>
              </div>
              <div
                className="flex gap-[5px] items-start text-[8px] leading-none"
                style={{ color: `rgba(249,246,238,${card.IconFillOpacity ?? card.textOpacity})` }}
              >
                <span className="font-normal">급여</span>
                <span className="font-bold">{card.salary}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )

  return (
    <section className="relative overflow-x-hidden max-w-screen min-h-screen pb-[133px] bg-gradient-to-b from-black-low via-black-low to-navy-dark -mt-px">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* 카드 그리드 - 여러 열로 구성 */}
        <div className="w-full mb-[50px]">
          {/* 중앙 정렬을 위한 flex 컨테이너 */}
          <div className="flex justify-center">
            {/* 카드 그리드 - 각 열에 카드들이 세로로 배치 */}
            <div className="flex items-start">
              {columns.map((column) => (
                <div
                  key={column.id}
                  className="flex flex-col gap-[10px] items-center px-[5px] py-0"
                >
                  {column.cards.map((card, cardIndex) => (
                    <Card key={cardIndex} card={card} index={cardIndex} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 텍스트 섹션 */}
        <div className="flex flex-col items-center gap-6">
          {/* 메인 제목 */}
          <h2 className="text-h2 font-bold text-white-bone-regular text-center leading-[1.4] tracking-[-0.64px]">
            <p className="mb-0">사람 뽑는 거,</p>
            <p>힘들지 않으신가요?</p>
          </h2>

          {/* 서브 텍스트 */}
          <div className="flex flex-col items-center p-[10px] rounded-xl">
            <div className="text-body-light text-white-bone-regularAlt text-center leading-[1.6]">
              <p className="mb-0">급여가 너무 높은데...?</p>
              <p className="mb-0">분위기에 잘 적응할까?</p>
              <p>업무보고는 꼬박꼬박 할까?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
