import Image from 'next/image'
import newsHeaderImg from '/public/assets/images/NewsHeader.png'

export default function NewsHeader() {
  return (
    <a
      href="https://www.jnilbo.com/74878917738"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex  justify-between gap-[20px] py-[30px] w-full hover:cursor-pointer group hover:text-[#0058a7] ">
        <div className=" h-[250px] relative w-[250px] overflow-hidden">
          <Image
            fill
            src={newsHeaderImg}
            alt="뉴스헤더 이미지"
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-[15px] w-full max-w-[800px] ">
          <h2 className="text-[26px] ">
            사출도장 전문기업 ㈜가리온, 산업통상자원부 장관 표창 수상
          </h2>
          <div className="flex justify-between text-[14px]">
            <p>전남일보</p>
            <p>2024.09.19</p>
          </div>
          <p className="break-words ">
            자동차 등 다양한 산업분야에서 사출도장 완성도를 자랑하는 전문기업인
            ㈜가리온이 산업통상자원부 장관 표창을 받았다.
            <br /> 광주 광산구 빛그린산단에 위치한 ㈜가리온(대표 박준성)은 최근
            서울 구로 지타워 컨벤션센터에서 열린 ‘대한민국 산업단지 60주년
            기념식’에서 ‘2024년도 지역산업 균형발전 유공자 포상’을 수상하는
            영광을 안았다고 19일 밝혔다.
            <br /> ‘대한민국 산업단지 60주년 기념식’은 국가 경제의 중추적 역할을
            담당해 온 산업단지의 성과를 축하하고 미래 비전을 공유하는 축제의
            장으로 산업통상자원부 주최, 한국산업단지공단 주관으로 개최됐다.
            <br />
            박준성 ㈜가리온 대표는 “가리온은 현재 국내·외 대표 차량 제조업체의
            주요 협력사로서 고품질의 플라스틱제품과 액상도장 제품을 공급하며
            지역경제...
          </p>
        </div>
      </div>
    </a>
  )
}
