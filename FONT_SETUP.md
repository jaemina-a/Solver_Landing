# 폰트 파일 설정 가이드

## 폰트 파일 저장 위치

Pretendard 폰트 파일들을 다음 위치에 저장하세요:

```
YO_LandingPage/
└── public/
    └── fonts/
        ├── Pretendard-Light.otf
        ├── Pretendard-Regular.otf
        ├── Pretendard-Medium.otf
        ├── Pretendard-SemiBold.otf
        ├── Pretendard-Bold.otf
        └── Pretendard-Black.otf
```

## 폰트 파일 준비

필요한 Pretendard 폰트 파일들:
- ✅ Pretendard-Light.otf (font-weight: 300)
- ✅ Pretendard-Regular.otf (font-weight: 400)
- ✅ Pretendard-Medium.otf (font-weight: 500)
- ✅ Pretendard-SemiBold.otf (font-weight: 600)
- ✅ Pretendard-Bold.otf (font-weight: 700)
- ✅ Pretendard-Black.otf (font-weight: 900)

## 폴더 생성 방법

터미널에서 실행:

```bash
mkdir -p public/fonts
```

그 다음 폰트 파일들을 `public/fonts/` 폴더에 복사하세요.

## 타이포그래피 사용 방법

설정이 완료되면 다음과 같이 사용할 수 있습니다:

```tsx
// Hero 텍스트 (64pt, Black)
<h1 className="text-hero">메인 헤드라인</h1>

// H2 텍스트 (32pt, Bold)
<h2 className="text-h2">섹션 제목</h2>

// Title Medium (28pt, Medium)
<h3 className="text-title-medium">중간 제목</h3>

// Body Semibold (16pt, Semibold)
<p className="text-body-semibold">강조된 본문</p>

// Body Light (16pt, Light)
<p className="text-body-light">일반 본문</p>
```

## 확인 방법

폰트 파일을 저장한 후 개발 서버를 재시작하세요:

```bash
npm run dev
```

브라우저 개발자 도구에서 폰트가 올바르게 로드되었는지 확인할 수 있습니다.

