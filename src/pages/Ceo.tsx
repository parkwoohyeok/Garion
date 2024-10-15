import Image from 'next/image'
import ceo from '/public/assets/images/ceo.jpg'
import { useState } from 'react'
import useIntersect from '@shared/hooks/useIntersect'

export default function Ceo() {
  return (
    <section className="flex flex-col py-[90px] ">
      <div
        className={` px-[400px] py-[10px] 
        }`}
      >
        <p className="text-[#0058a7]">CEO's</p>
        <h2 className="text-[42px] ">Greeting</h2>
      </div>
      <div className="border-t">
        <div className="flex w-full justify-between items-center px-[400px]">
          <div className="text-center w-full">
            <Image src={ceo} width={400} height={400} alt="대표사진" />
          </div>
          <div className="p-[20px] text-[18px] pt-[70px] border h-[690px] border-t-0 border-b-0 flex ">
            <p>
              안녕하십니까, 대표이사 박준성입니다.
              <br />
              저희 주식회사 가리온은 투명한 경영을 바탕으로 최상의 품질을
              제공하기 위해 끊임없이 노력하고 있습니다. 이를 통해 고객 여러분께
              신뢰받는 기업으로 자리매김하고자 하며, 모든 과정에서 윤리적 경영과
              투명성을 최우선으로 하고 있습니다.
              <br />
              <br /> 또한, 다양한 인재 채용을 통해 글로벌 경쟁력을 강화하고,
              창의적이고 혁신적인 공동체 문화를 구축하고 있습니다. 우리는 각기
              다른 배경과 역량을 가진 인재들이 모여 함께 성장하고, 이를 통해 더
              나은 서비스를 제공할 수 있다고 믿습니다.
              <br />
              <br /> 저희 주식회사 가리온은 기업의 성공이 개인의 발전을 넘어,
              지역사회에 이바지하는 기업으로 발전할 때 진정한 의미를 가진다고
              생각합니다. 그래서 다양한 사회적 활동과 기여를 통해 지역사회의
              성장을 지원하고, 함께 나아가고자 합니다.
              <br />
              <br /> 앞으로도 주식회사 가리온은 모든 이해관계자들과 함께 지속
              가능한 성장을 추구하며, 고객과 지역사회를 위한 긍정적인 변화를
              만들어가는 기업으로 나아가겠습니다.
              <br />
              <br /> 감사합니다.
              <br />
              <br />
              <br />
              <span className="font-bold text-[20px]">
                (주)가리온 대표이사 박준성
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
