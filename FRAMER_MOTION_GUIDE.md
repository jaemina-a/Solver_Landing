# Framer Motion 스크롤 애니메이션 가이드

## 기본 구조

### 1. useScroll - 스크롤 진행도 계산

```typescript
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start end', 'end start']
})
```

**역할:**
- 특정 섹션을 기준으로 스크롤 진행도를 0~1로 계산
- 스크롤할 때마다 자동으로 업데이트됨

### 2. useTransform - 값 변환

```typescript
const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
```

**역할:**
- 입력값(progress)을 출력값(scale)으로 매핑
- `[0, 1]`: 입력 범위 (progress 값)
- `[1, 2]`: 출력 범위 (scale 값)
- 중간 값은 자동으로 보간됨

### 3. motion 태그 - 애니메이션 적용

```typescript
<motion.h1 style={{ scale }}>
  어서와요!
</motion.h1>
```

**역할:**
- `style` prop에 `useTransform`으로 만든 값을 전달
- 값이 변경될 때마다 자동으로 애니메이션 적용
- CSS transform을 사용하여 GPU 가속 활용

## 새로운 애니메이션 추가하기

### 예시 1: Opacity (투명도)

```typescript
// 1단계: useTransform으로 opacity 값 계산
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8])
// progress 0 → opacity 0 (투명)
// progress 0.5 → opacity 1 (불투명)
// progress 1 → opacity 0.8 (약간 투명)

// 2단계: motion 태그의 style에 추가
<motion.h1 style={{ scale, opacity }}>
  어서와요!
</motion.h1>
```

### 예시 2: Y 위치 이동

```typescript
// 1단계: useTransform으로 Y 위치 계산
const y = useTransform(scrollYProgress, [0, 1], [0, -100])
// progress 0 → y = 0 (원래 위치)
// progress 1 → y = -100 (위로 100px 이동)

// 2단계: motion 태그의 style에 추가
<motion.h1 style={{ scale, y }}>
  어서와요!
</motion.h1>
```

### 예시 3: X 위치 이동

```typescript
const x = useTransform(scrollYProgress, [0, 1], [0, 50])
// progress 0 → x = 0 (원래 위치)
// progress 1 → x = 50 (오른쪽으로 50px 이동)

<motion.h1 style={{ scale, x }}>
  어서와요!
</motion.h1>
```

### 예시 4: 회전 (rotate)

```typescript
const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
// progress 0 → rotate = 0도
// progress 1 → rotate = 360도 (한 바퀴 회전)

<motion.h1 style={{ scale, rotate }}>
  어서와요!
</motion.h1>
```

### 예시 5: 복합 애니메이션

```typescript
// 여러 속성을 동시에 사용
const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8])
const y = useTransform(scrollYProgress, [0, 1], [0, -50])
const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

<motion.h1 style={{ scale, opacity, y, rotate }}>
  어서와요!
</motion.h1>
```

## useTransform의 고급 사용법

### 여러 구간으로 나누기

```typescript
// 3개 이상의 구간 설정 가능
const opacity = useTransform(
  scrollYProgress,
  [0, 0.3, 0.7, 1],  // 입력 구간
  [0, 1, 1, 0.5]     // 출력 값
)
// progress 0 → opacity 0
// progress 0.3 → opacity 1
// progress 0.7 → opacity 1 (유지)
// progress 1 → opacity 0.5
```

### 다른 progress를 기준으로 사용

```typescript
// scale이 1.5가 될 때 opacity가 1이 되도록
const opacity = useTransform(scale, [1, 1.5, 2], [0, 1, 0.8])
```

## motion 태그의 다른 속성들

### transition (일반 애니메이션용)

```typescript
// 스크롤 기반이 아닌 일반 애니메이션
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  어서와요!
</motion.h1>
```

**주의:** 스크롤 기반 애니메이션에서는 `style` prop을 사용하고, `animate`는 사용하지 않습니다!

### whileInView (뷰포트 진입 시)

```typescript
<motion.h1
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  어서와요!
</motion.h1>
```

## 실제 적용 예시

```typescript
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // 여러 애니메이션 동시 적용
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <section ref={sectionRef} className="min-h-[200vh] bg-black-low">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.h1
          style={{ scale, opacity, y, rotate }}
          className="text-hero text-white"
        >
          어서와요!
        </motion.h1>
      </div>
    </section>
  )
}
```

## 주의사항

1. **`style` prop 사용**: 스크롤 기반 애니메이션은 `style`에 `useTransform` 값을 전달
2. **`animate` 사용 금지**: `animate`는 일반 애니메이션용, 스크롤 기반에서는 사용하지 않음
3. **단위 주의**: `y`, `x`는 픽셀 단위, `rotate`는 도(degree) 단위
4. **성능**: 여러 애니메이션을 동시에 사용해도 Framer Motion이 최적화함

