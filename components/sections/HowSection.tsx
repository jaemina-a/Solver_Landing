/**
 * HowSection - 와요 채용 방법 소개 섹션
 *
 * 와요를 채용하는 3단계 프로세스를 소개하는 섹션
 * - 상담: 원하는 직무, 업무 프로세스 등 고객사의 니즈에 대해 상담
 * - 도입: 고객사의 업무용 툴, 데이터 소스에 와요 사원을 연결
 * - 사용: 메신저를 통해 질문하거나, 아카이브에 작업물을 올리거나, 직접 자료를 보고 업무 수행
 */
export default function HowSection() {
    const steps = [
        {
            id: 1,
            title: '상담',
            description: [
                '원하는 직무, 업무 프로세스 등',
                '고객사의 니즈에 대해',
                '상담을 진행합니다.',
            ],
            svgWidth: 220,
            position: {
                top: '0px',
                left: 'calc(50% + 29.5px)',
            },
        },
        {
            id: 2,
            title: '도입',
            description: [
                '고객사의 업무용 툴, 데이터 소스에',
                '와요 사원을 연결합니다.',
            ],
            svgWidth: 259,
            position: {
                top: '140px',
                left: 'calc(25% + 82.75px)',
            },
        },
        {
            id: 3,
            title: '사용',
            description: [
                '와요 사원은 메신저를 통해 질문하거나',
                '아카이브에 작업물을 올리거나',
                '직접 자료를 보고 업무를 수행합니다.',
            ],
            svgWidth: 223,
            position: {
                top: '280px',
                left: 'calc(25% + 44.75px)',
            },
        },
    ]

    return (
        <section className="relative bg-gradient-to-b from-white-bone-regular to-white py-10">
            <div className="container mx-auto max-w-7xl relative">
                <div className="flex items-start gap-4">
                    {/* 제목 - 왼쪽 */}
                    <div className="px-[16px]">
                        <h2 className="text-h2 font-bold text-black leading-[1.4] tracking-[-0.64px]">
                            <p className="mb-0">와요는</p>
                            <p className="mb-0">어떻게</p>
                            <p>채용되냐면</p>
                        </h2>
                    </div>

                    {/* 프로세스 카드들 - 오른쪽, 계단식 배치 */}
                    <div className="flex-1 relative h-[400px]">
                        {/* SVG 배경 이미지들 */}
                        {/* Step 1 배경 */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 200 120" fill="none" className="absolute right-0 top-0">
                            <g filter="url(#filter0_in_203_159)">
                                <path d="M199.489 120H0L42.4893 0H199.489V120Z" fill="url(#paint0_linear_203_159)" />
                            </g>
                            <defs>
                                <filter id="filter0_in_203_159" x="0" y="0" width="199.489" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_203_159" />
                                    <feTurbulence type="fractalNoise" baseFrequency="0.66666668653488159 0.66666668653488159" stitchTiles="stitch" numOctaves="3" result="noise" seed="2235" />
                                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                                    </feComponentTransfer>
                                    <feComposite operator="in" in2="effect1_innerShadow_203_159" in="coloredNoise1" result="noise1Clipped" />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise2">
                                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                                    </feComponentTransfer>
                                    <feComposite operator="in" in2="effect1_innerShadow_203_159" in="coloredNoise2" result="noise2Clipped" />
                                    <feFlood flood-color="rgba(255, 255, 255, 0.8)" result="color1Flood" />
                                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                                    <feFlood flood-color="rgba(255, 0, 0, 0.3)" result="color2Flood" />
                                    <feComposite operator="in" in2="noise2Clipped" in="color2Flood" result="color2" />
                                    <feMerge result="effect2_noise_203_159">
                                        <feMergeNode in="effect1_innerShadow_203_159" />
                                        <feMergeNode in="color1" />
                                        <feMergeNode in="color2" />
                                    </feMerge>
                                </filter>
                                <linearGradient id="paint0_linear_203_159" x1="8.60405" y1="47.0633" x2="375.17" y2="79.0158" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0047AB" />
                                    <stop offset="0.75" stop-color="#0047AB" stop-opacity="0.7" />
                                    <stop offset="1" stop-color="#0047AB" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="239" height="120" viewBox="0 0 239 120" fill="none" className="absolute right-0 top-[140px]">
                            <g filter="url(#filter0_in_203_162)">
                                <path d="M238.761 120H37.7607V119.423H0L37.7607 0.578125V0H238.761V120Z" fill="url(#paint0_linear_203_162)" />
                            </g>
                            <defs>
                                <filter id="filter0_in_203_162" x="0" y="0" width="238.761" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_203_162" />
                                    <feTurbulence type="fractalNoise" baseFrequency="0.66666668653488159 0.66666668653488159" stitchTiles="stitch" numOctaves="3" result="noise" seed="2235" />
                                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                                    </feComponentTransfer>
                                    <feComposite operator="in" in2="effect1_innerShadow_203_162" in="coloredNoise1" result="noise1Clipped" />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise2">
                                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                                    </feComponentTransfer>
                                    <feComposite operator="in" in2="effect1_innerShadow_203_162" in="coloredNoise2" result="noise2Clipped" />
                                    <feFlood flood-color="rgba(255, 255, 255, 0.8)" result="color1Flood" />
                                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                                    <feFlood flood-color="rgba(255, 0, 0, 0.3)" result="color2Flood" />
                                    <feComposite operator="in" in2="noise2Clipped" in="color2Flood" result="color2" />
                                    <feMerge result="effect2_noise_203_162">
                                        <feMergeNode in="effect1_innerShadow_203_162" />
                                        <feMergeNode in="color1" />
                                        <feMergeNode in="color2" />
                                    </feMerge>
                                </filter>
                                <linearGradient id="paint0_linear_203_162" x1="8.65143" y1="47.1836" x2="369.545" y2="78.5104" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#002F71" />
                                    <stop offset="0.798077" stop-color="#002F71" stop-opacity="0.7" />
                                    <stop offset="1" stop-color="#002F71" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="283" height="120" viewBox="0 0 283 120" fill="none" className="absolute right-0 top-[280px]">
                            <g filter="url(#filter0_in_203_165)">
                                <path d="M282.629 0V120H0L42.3145 0H282.629Z" fill="url(#paint0_linear_203_165)" />
                            </g>
                            <defs>
                                <filter id="filter0_in_203_165" x="0" y="0" width="282.629" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_203_165" />
                                    <feTurbulence type="fractalNoise" baseFrequency="0.66666668653488159 0.66666668653488159" stitchTiles="stitch" numOctaves="3" result="noise" seed="2235" />
                                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                                    </feComponentTransfer>
                                    <feComposite operator="in" in2="effect1_innerShadow_203_165" in="coloredNoise1" result="noise1Clipped" />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise2">
                                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                                    </feComponentTransfer>
                                    <feComposite operator="in" in2="effect1_innerShadow_203_165" in="coloredNoise2" result="noise2Clipped" />
                                    <feFlood flood-color="rgba(255, 255, 255, 0.8)" result="color1Flood" />
                                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                                    <feFlood flood-color="rgba(255, 0, 0, 0.3)" result="color2Flood" />
                                    <feComposite operator="in" in2="noise2Clipped" in="color2Flood" result="color2" />
                                    <feMerge result="effect2_noise_203_165">
                                        <feMergeNode in="effect1_innerShadow_203_165" />
                                        <feMergeNode in="color1" />
                                        <feMergeNode in="color2" />
                                    </feMerge>
                                </filter>
                                <linearGradient id="paint0_linear_203_165" x1="8.60145" y1="47.0546" x2="411.416" y2="73.9891" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#001533" />
                                    <stop offset="0.769231" stop-color="#001533" stop-opacity="0.7" />
                                    <stop offset="1" stop-color="#001533" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Step 카드들 */}
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="absolute flex flex-col gap-[10px] items-end justify-center text-[12px] h-[120px] text-white text-right"
                                style={{
                                    top: step.position.top,
                                    right: 0,
                                    maxWidth: step.svgWidth ? `${step.svgWidth}px` : '260px',
                                    paddingRight: '16px',
                                }}
                            >
                                {/* 번호와 제목 */}
                                <div className="font-semibold font-pretendard text-[18px] leading-[1.4]">
                                    <ol className="list-decimal" start={step.id}>
                                        <li className="ml-[18px]">
                                            <span className="leading-[1.4] whitespace-nowrap">{step.title}</span>
                                        </li>
                                    </ol>
                                </div>

                                {/* 설명: description 배열의 각 요소를 한 줄씩 표시 (우측 정렬) */}
                                <div className="font-regular leading-[1.4] whitespace-nowrap text-right">
                                    {step.description.map((line, index) => (
                                        <p key={index} className="mb-0 whitespace-nowrap">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

