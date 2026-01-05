import Section from '../ui/Section'

/**
 * CTASection - 행동 유도 섹션 (Call To Action)
 * 
 * 개발 가이드:
 * 1. 피그마 디자인을 참고하여 구조 작성
 * 2. 반응형을 고려한 Tailwind 클래스 사용
 * 3. 필요시 props로 데이터 받기
 */
export default function CTASection() {
  return (
    <Section id="cta" background="primary">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          지금 시작하세요
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          지금 바로 시작하고 변화를 경험해보세요
        </p>
        <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition">
          무료로 시작하기
        </button>
      </div>
    </Section>
  )
}

