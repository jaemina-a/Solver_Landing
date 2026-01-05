/**
 * HeroSection - 랜딩 페이지의 첫 번째 섹션
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black-low">
      <div className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl w-full">
          <div className="text-center w-full flex gap-1 items-center justify-center">
            <h1 className="text-hero text-white-bone-regularAlt">
              어서와요!
            </h1>
            <h1 
              className="text-hero bg-gradient-to-b from-white-bone-regularAlt to-[#46DDFF] bg-clip-text text-transparent"
            >
              와요
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
