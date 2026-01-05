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
                top: '34px',
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
                top: '138px',
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
                top: '228px',
                left: 'calc(25% + 44.75px)',
            },
        },
    ]

    return (
        <section className="relative bg-gradient-to-b from-white-bone-regular to-white py-5">
            <div className="container mx-auto max-w-7xl relative">
                <div className="flex items-start gap-4">
                    {/* 제목 - 왼쪽 */}
                    <div className="pt-[23px] px-[16px]">
                        <h2 className="text-h2 font-bold text-black leading-[1.4] tracking-[-0.64px]">
                            <p className="mb-0">와요는</p>
                            <p className="mb-0">어떻게</p>
                            <p>채용하냐면</p>
                        </h2>
                    </div>

                    {/* 프로세스 카드들 - 오른쪽, 계단식 배치 */}
                    <div className="flex-1 relative" style={{ height: '320px' }}>
                        {/* SVG 배경 이미지들 */}
                        {/* Step 1 배경 */}
                        <svg
                            width="190"
                            height="105"
                            viewBox="0 0 190 105"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-[23px]"
                        >
                            <g filter="url(#filter0_in_203_159)">
                                <path
                                    d="M219.489 94H42.4893V94.085H0L42.4893 0H219.489V94Z"
                                    fill="url(#paint0_linear_203_159)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_in_203_159"
                                    x="0"
                                    y="0"
                                    width="219.489"
                                    height="94.085"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_203_159"
                                    />
                                    <feTurbulence
                                        type="fractalNoise"
                                        baseFrequency="0.66666668653488159 0.66666668653488159"
                                        stitchTiles="stitch"
                                        numOctaves="3"
                                        result="noise"
                                        seed="2235"
                                    />
                                    <feColorMatrix
                                        in="noise"
                                        type="luminanceToAlpha"
                                        result="alphaNoise"
                                    />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                                        <feFuncA
                                            type="discrete"
                                            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                                        />
                                    </feComponentTransfer>
                                    <feComposite
                                        operator="in"
                                        in2="effect1_innerShadow_203_159"
                                        in="coloredNoise1"
                                        result="noise1Clipped"
                                    />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise2">
                                        <feFuncA
                                            type="discrete"
                                            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                                        />
                                    </feComponentTransfer>
                                    <feFlood
                                        floodColor="rgba(255, 255, 255, 0.8)"
                                        result="color1Flood"
                                    />
                                    <feComposite
                                        operator="in"
                                        in2="noise1Clipped"
                                        in="color1Flood"
                                        result="color1"
                                    />
                                    <feFlood
                                        floodColor="rgba(255, 255, 255, 0.3)"
                                        result="color2Flood"
                                    />
                                    <feComposite
                                        operator="in"
                                        in2="noise2Clipped"
                                        in="color2Flood"
                                        result="color2"
                                    />
                                    <feMerge result="effect2_noise_203_159">
                                        <feMergeNode in="effect1_innerShadow_203_159" />
                                        <feMergeNode in="color1" />
                                        <feMergeNode in="color2" />
                                    </feMerge>
                                </filter>
                                <linearGradient
                                    id="paint0_linear_203_159"
                                    x1="8.60405"
                                    y1="36.8996"
                                    x2="373.446"
                                    y2="77.4614"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#0047AB" />
                                    <stop offset="0.75" stopColor="#0047AB" stopOpacity="0.7" />
                                    <stop offset="1" stopColor="#0047AB" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Step 2 배경 */}
                        <svg
                            width="229"
                            height="95"
                            viewBox="0 0 229 95"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-[121px]"
                        >
                            <g filter="url(#filter0_in_203_162)">
                                <path
                                    d="M258.761 95H37.7607V94.543H0L37.7607 0.457031V0H258.761V95Z"
                                    fill="url(#paint0_linear_203_162)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_in_203_162"
                                    x="0"
                                    y="0"
                                    width="258.761"
                                    height="95"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_203_162"
                                    />
                                    <feTurbulence
                                        type="fractalNoise"
                                        baseFrequency="0.66666668653488159 0.66666668653488159"
                                        stitchTiles="stitch"
                                        numOctaves="3"
                                        result="noise"
                                        seed="2235"
                                    />
                                    <feColorMatrix
                                        in="noise"
                                        type="luminanceToAlpha"
                                        result="alphaNoise"
                                    />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                                        <feFuncA
                                            type="discrete"
                                            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                                        />
                                    </feComponentTransfer>
                                    <feComposite
                                        operator="in"
                                        in2="effect1_innerShadow_203_162"
                                        in="coloredNoise1"
                                        result="noise1Clipped"
                                    />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise2">
                                        <feFuncA
                                            type="discrete"
                                            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                                        />
                                    </feComponentTransfer>
                                    <feFlood
                                        floodColor="rgba(255, 255, 255, 0.8)"
                                        result="color1Flood"
                                    />
                                    <feComposite
                                        operator="in"
                                        in2="noise1Clipped"
                                        in="color1Flood"
                                        result="color1"
                                    />
                                    <feFlood
                                        floodColor="rgba(255, 255, 255, 0.3)"
                                        result="color2Flood"
                                    />
                                    <feComposite
                                        operator="in"
                                        in2="noise2Clipped"
                                        in="color2Flood"
                                        result="color2"
                                    />
                                    <feMerge result="effect2_noise_203_162">
                                        <feMergeNode in="effect1_innerShadow_203_162" />
                                        <feMergeNode in="color1" />
                                        <feMergeNode in="color2" />
                                    </feMerge>
                                </filter>
                                <linearGradient
                                    id="paint0_linear_203_162"
                                    x1="8.65143"
                                    y1="37.3537"
                                    x2="367.945"
                                    y2="76.7489"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#002F71" />
                                    <stop offset="0.798077" stopColor="#002F71" stopOpacity="0.7" />
                                    <stop offset="1" stopColor="#002F71" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Step 3 배경 */}
                        <svg
                            width="273"
                            height="95"
                            viewBox="0 0 273 95"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-[219.92px]"
                        >
                            <g filter="url(#filter0_in_203_165)">
                                <path
                                    d="M84.6289 0.0849609H302.629V94.085H0L42.3145 0H84.6289V0.0849609Z"
                                    fill="url(#paint0_linear_203_165)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_in_203_165"
                                    x="0"
                                    y="0"
                                    width="302.629"
                                    height="94.085"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_203_165"
                                    />
                                    <feTurbulence
                                        type="fractalNoise"
                                        baseFrequency="0.66666668653488159 0.66666668653488159"
                                        stitchTiles="stitch"
                                        numOctaves="3"
                                        result="noise"
                                        seed="2235"
                                    />
                                    <feColorMatrix
                                        in="noise"
                                        type="luminanceToAlpha"
                                        result="alphaNoise"
                                    />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                                        <feFuncA
                                            type="discrete"
                                            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                                        />
                                    </feComponentTransfer>
                                    <feComposite
                                        operator="in"
                                        in2="effect1_innerShadow_203_165"
                                        in="coloredNoise1"
                                        result="noise1Clipped"
                                    />
                                    <feComponentTransfer in="alphaNoise" result="coloredNoise2">
                                        <feFuncA
                                            type="discrete"
                                            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                                        />
                                    </feComponentTransfer>
                                    <feFlood
                                        floodColor="rgba(255, 255, 255, 0.8)"
                                        result="color1Flood"
                                    />
                                    <feComposite
                                        operator="in"
                                        in2="noise1Clipped"
                                        in="color1Flood"
                                        result="color1"
                                    />
                                    <feFlood
                                        floodColor="rgba(255, 255, 255, 0.3)"
                                        result="color2Flood"
                                    />
                                    <feComposite
                                        operator="in"
                                        in2="noise2Clipped"
                                        in="color2Flood"
                                        result="color2"
                                    />
                                    <feMerge result="effect2_noise_203_165">
                                        <feMergeNode in="effect1_innerShadow_203_165" />
                                        <feMergeNode in="color1" />
                                        <feMergeNode in="color2" />
                                    </feMerge>
                                </filter>
                                <linearGradient
                                    id="paint0_linear_203_165"
                                    x1="8.60145"
                                    y1="36.8927"
                                    x2="410.295"
                                    y2="71.1506"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#001533" />
                                    <stop offset="0.769231" stopColor="#001533" stopOpacity="0.7" />
                                    <stop offset="1" stopColor="#001533" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Step 카드들 */}
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="absolute flex flex-col gap-[10px] items-end text-[12px] text-white text-right"
                                style={{
                                    top: step.position.top,
                                    right: 0,
                                    maxWidth: step.svgWidth ? `${step.svgWidth}px` : '260px',
                                    paddingRight: '16px',
                                }}
                            >
                                {/* 번호와 제목 */}
                                <div className="font-semibold leading-[1.4]">
                                    <ol className="list-decimal" start={step.id}>
                                        <li className="ml-[18px]">
                                            <span className="leading-[1.4] whitespace-nowrap">{step.title}</span>
                                        </li>
                                    </ol>
                                </div>

                                {/* 설명: description 배열의 각 요소를 한 줄씩 표시 (우측 정렬) */}
                                <div className="font-light leading-[1.4] whitespace-nowrap text-right">
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

