# 랜딩 페이지 개발 가이드

## 프로젝트 구조

```
components/
├── sections/          # 섹션별 컴포넌트
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   └── ...
├── ui/               # 재사용 가능한 UI 컴포넌트
│   ├── Container.tsx
│   ├── Section.tsx
│   └── Button.tsx
└── layout/           # 레이아웃 컴포넌트
    ├── Header.tsx
    └── Footer.tsx
```

## 개발 워크플로우

### 1. 피그마 분석
- [ ] 섹션 목록 정리
- [ ] 색상 팔레트 추출
- [ ] 폰트 스타일 확인
- [ ] 공통 컴포넌트 식별

### 2. 기본 설정
- [ ] Tailwind 디자인 토큰 설정
- [ ] 폰트 설정
- [ ] 공통 UI 컴포넌트 제작

### 3. 섹션별 개발
- [ ] Hero Section
- [ ] Features Section
- [ ] Benefits Section
- [ ] CTA Section

### 4. 최적화
- [ ] 반응형 점검
- [ ] 성능 최적화
- [ ] 접근성 점검

## 개발 원칙

1. **섹션별 독립성**: 각 섹션은 독립적으로 동작해야 함
2. **재사용성**: 공통 컴포넌트는 재사용 가능하게 설계
3. **타입 안정성**: TypeScript 타입 정의 활용
4. **반응형 우선**: Mobile-first 접근
5. **성능 고려**: 이미지 최적화, 코드 스플리팅

## 네이밍 컨벤션

- 컴포넌트: PascalCase (예: `HeroSection.tsx`)
- 파일명: 컴포넌트명과 동일
- 폴더명: kebab-case 또는 camelCase
