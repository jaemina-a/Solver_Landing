# 스크롤 기반 애니메이션 원리 설명

## 현재 구현 방식 (Framer Motion useScroll)

### 1. 기본 원리

```typescript
// 1단계: 섹션을 기준으로 스크롤 진행도 계산
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start end', 'end start']
})
```

**동작 방식:**
- `useScroll`은 Framer Motion이 내부적으로 스크롤 이벤트를 감지
- `target`: 애니메이션의 기준이 될 요소 (sectionRef)
- `offset`: 스크롤 진행도를 계산할 구간
  - `'start end'`: 섹션의 시작점이 화면 하단에 닿을 때 = progress 0
  - `'end start'`: 섹션의 끝점이 화면 상단을 벗어날 때 = progress 1

**스크롤 진행도 계산:**
```
섹션이 화면 하단에 닿기 시작 → progress = 0
    ↓ (스크롤 다운)
섹션이 화면 중앙을 지나감 → progress = 0.5
    ↓ (스크롤 다운)
섹션이 화면 상단을 벗어남 → progress = 1
```

### 2. Transform 매핑

```typescript
// 2단계: 진행도를 실제 값으로 변환
const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
```

**동작 방식:**
- `useTransform`: 입력값(progress)을 출력값(scale)으로 매핑
- `[0, 1]`: 입력 범위 (progress 값)
- `[1, 2]`: 출력 범위 (scale 값)
- **자동 보간**: progress가 0.5면 scale은 1.5 (자동 계산)

### 3. Sticky 포지셔닝

```typescript
<div className="sticky top-0 h-screen">
  {/* 텍스트가 여기에 있음 */}
</div>
```

**동작 방식:**
- `position: sticky`: 요소가 지정된 위치에 도달하면 고정
- `top-0`: 화면 상단에 도달하면 고정 시작
- `h-screen`: 화면 높이만큼 공간 확보
- 섹션이 `min-h-[200vh]`로 충분히 길어서, sticky 요소가 스크롤되는 동안 고정됨

### 4. 실제 렌더링

```typescript
<motion.h1 style={{ scale }}>
  어서와요!
</motion.h1>
```

**동작 방식:**
- `scale` 값이 변경될 때마다 자동으로 리렌더링
- Framer Motion이 최적화된 방식으로 DOM 업데이트
- CSS transform을 사용하여 GPU 가속 활용

## 전체 흐름도

```
사용자가 스크롤
    ↓
Framer Motion이 스크롤 감지 (useScroll)
    ↓
섹션의 위치 계산 → scrollYProgress (0~1)
    ↓
useTransform으로 scale 값 계산 (1~2)
    ↓
motion.h1의 style.scale 업데이트
    ↓
텍스트 크기 변경 (GPU 가속)
```

## 스크롤이 막히지 않는 이유

**현재 코드는 스크롤을 막지 않습니다!**

- `useScroll`은 스크롤을 감지만 하고, 막지는 않음
- 스크롤은 정상적으로 진행됨
- 단지 스크롤 위치에 따라 애니메이션이 연속적으로 변할 뿐

## 스크롤을 막고 싶다면?

만약 텍스트가 최대 크기가 될 때까지 스크롤을 막고 싶다면:

### 방법 1: Wheel 이벤트로 제어 (이전 방식)

```typescript
const handleWheel = (e: WheelEvent) => {
  if (progress < 1) {
    e.preventDefault() // 스크롤 막기
    // 진행도만 증가
  }
}
```

**단점:**
- 모바일에서 동작하지 않음 (터치 이벤트 필요)
- 접근성 문제 (키보드 스크롤 불가)
- 성능 이슈 가능

### 방법 2: CSS로 스크롤 제어 (권장하지 않음)

```css
section {
  overscroll-behavior: contain;
}
```

**단점:**
- 완전한 스크롤 제어 불가
- 사용자 경험 저하

### 방법 3: 현재 방식 유지 (권장)

**장점:**
- 자연스러운 스크롤 경험
- 모든 디바이스에서 동작
- 성능 최적화
- 접근성 유지

## 현재 방식의 장점

1. **자연스러움**: 스크롤이 막히지 않아 자연스러움
2. **성능**: Framer Motion이 최적화된 방식으로 처리
3. **반응형**: 모바일/데스크톱 모두 동작
4. **접근성**: 키보드 스크롤도 정상 작동
5. **되감기**: 위로 스크롤하면 자동으로 반대로 진행

## 시각적 설명

```
[스크롤 위치]
    0% ────────────────────────────── 100%
    │                                  │
    섹션 시작                          섹션 끝
    (scale = 1)                      (scale = 2)
    
스크롤 다운: → → → → → → → → → → → →
텍스트 크기: 1 → 1.2 → 1.5 → 1.8 → 2

스크롤 업:   ← ← ← ← ← ← ← ← ← ← ← ←
텍스트 크기: 2 → 1.8 → 1.5 → 1.2 → 1
```

## 결론

현재 구현은 **스크롤을 막지 않고**, 스크롤 위치에 따라 애니메이션이 연속적으로 변하는 방식입니다. 이는 당근마켓, 토스 같은 모던 랜딩페이지에서 사용하는 방식과 동일합니다.

