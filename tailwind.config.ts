import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
        chosun: [
          'ChosunCentennial',
          'serif',
        ],
      },
      fontSize: {
        // 타이포그래피 시스템
        'hero': ['56px', { lineHeight: '1', fontWeight: '900' }], // Hero 64pt Pretendard Black
        'h2': ['32px', { lineHeight: '1.2', fontWeight: '700' }], // H2 32pt Pretendard Bold
        'title-medium': ['28px', { lineHeight: '1.3', fontWeight: '500' }], // TitleMedium 28pt Pretendard Medium
        'body-semibold': ['16px', { lineHeight: '1.5', fontWeight: '600' }], // BodySemibold 16pt Pretendard Semibold
        'body-light': ['16px', { lineHeight: '1.5', fontWeight: '300' }], // BodyLight 16pt Pretendard Light
      },
      colors: {
        // White Colors
        white: {
          DEFAULT: '#FFFFFF',
          bone: {
            regular: '#FAF9F6',
            regularAlt: '#F9F6EE',
          },
        },
        // Gray Scale
        gray: {
          scale: {
            white: '#FFFFFF',
          },
        },
        // Navy Colors
        navy: {
          black: '#2D4373',
          dark: '#36486E',
          regular: '#FAFBFC', // Note: Hex code may not match visual appearance
          light: '#FAF7F6', // Note: Hex code may not match visual appearance
        },
        // Black & White
        black: {
          DEFAULT: '#0A0A0A',
          low: '#141414',
          low2: '#141414',
        },
      },
    },
  },
  plugins: [],
}
export default config
