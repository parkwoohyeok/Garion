import KakaoMap from '@app/api/kakaoMaps/KakaoMap'
import Image from 'next/image'
import logo from '/public/assets/images/logo.png'

export default function RoadToCome() {
  return (
    <section className="flex flex-col h-full relative">
      <div className="text-[42px] px-[400px] py-[10px]">
        <h2>회사정보</h2>
      </div>
      <div className="mt-[30px]">
        <div className="flex flex-col gap-[70px] w-full h-[2/3vw] px-[400px]">
          <KakaoMap location="광주 광산구 빛중앙12로 4" />
          <div className="border-t  flex flex-col justify-between gap-[20px] py-[20px] text-[20px] text-center">
            <h2>회사명 : (주)가리온</h2>
            <h2>설립연도 : 2021. 03. 03</h2>
            <h2>사업분야 : 자동차부품 내·외장제 도장</h2>
            <h2>주소 : 광주 광산구 빛중앙12로 4</h2>
            <h2>tel : 062-716-2021</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[150px] border-t flex flex-col items-center absolute px-[130px] gap-[30px] py-[20px] bottom-0">
        <div className="flex items-center gap-[20px]">
          <div className="flex">
            <Image src={logo} width={50} height={32} alt="회사로고" />
            <h1 className="text-[30px] font-HSBombaram ">GARION</h1>
          </div>
          <h2>광주 광산구 빛중앙12로 4</h2>
          <h2>062-716-2021</h2>
        </div>
        <h2>made by wluck</h2>
      </div>
    </section>
  )
}
