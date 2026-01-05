import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import HowSection from '@/components/sections/HowSection'
import PricingSection from '@/components/sections/PricingSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/sections/ContactSection'

/**
 * 랜딩 페이지 메인 컴포넌트
 * 
 * 개발 순서:
 * 1. 섹션별로 컴포넌트 생성
 * 2. 위에서 아래 순서로 import 및 배치
 * 3. 각 섹션을 독립적으로 완성
 */
export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
