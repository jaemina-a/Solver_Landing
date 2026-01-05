import { ReactNode, forwardRef } from 'react'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  id?: string
  background?: 'white' | 'gray' | 'primary' // className에 bg-* 클래스가 있으면 무시됨
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary-50',
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', containerSize = 'lg', id, background }, ref) => {
    // className에 bg-* 클래스가 있으면 background prop을 무시
    const hasCustomBg = className.includes('bg-')
    const bgClass = !hasCustomBg && background ? backgroundClasses[background] : ''

    return (
      <section
        ref={ref}
        id={id}
        className={`py-12 md:py-16 lg:py-24 ${bgClass} ${className}`}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section

