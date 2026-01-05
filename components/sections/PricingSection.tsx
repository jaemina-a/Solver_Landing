import Section from '../ui/Section'

/**
 * PricingSection - 가격 플랜 섹션
 * 
 * 개발 가이드:
 * 1. 피그마 디자인을 참고하여 구조 작성
 * 2. 반응형을 고려한 Tailwind 클래스 사용
 * 3. 필요시 props로 데이터 받기
 */
export default function PricingSection() {
  return (
    <Section id="pricing" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          가격 플랜
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          당신에게 맞는 플랜을 선택하세요
        </p>
      </div>
      
      {/* 가격 카드들이 여기에 들어갑니다 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 가격 카드 컴포넌트 추가 예정 */}
      </div>
    </Section>
  )
}

