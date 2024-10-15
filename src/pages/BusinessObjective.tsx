import Image from 'next/image'
import desk from '/public/assets/images/desk.jpeg'
import grils from '/public/assets/images/grils.jpeg'
import water from '/public/assets/images/water.jpeg'
import useIntersect from '@shared/hooks/useIntersect'
import { useState } from 'react'

export default function BusinessObjective() {
  const [showTitle, setShowTitle] = useState(false)
  const onIntersect = () => {
    setShowTitle(true)
  }
  const ref = useIntersect(onIntersect)
  return (
    <section ref={ref} className="flex flex-col h-full">
      <div
        className={`px-[300px] py-[20px] text-right transition-all duration-1000 transform ${
          showTitle ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <p className="">Business</p>
        <h2 className="text-[42px] text-[#0058a7]">Objective</h2>
      </div>
      <div className="w-full mt-[40px] ">
        <div className="px-[300px] flex justify-between items-center">
          <div
            className={`p-[40px] border flex flex-col gap-[40px] w-[400px] h-[600px] group transition-all duration-1000 transform 
            }`}
          >
            <div
              className={`relative w-[300px] h-[300px] overflow-hidden duration-500
              }`}
            >
              <Image
                fill
                src={water}
                alt="정화시설 사진"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <h2 className="text-[30px]">산업용수 재사용</h2>
            <p className="text-black-30 leading-7">
              전기 화학적 처리장치 개발을 통해 용수와 유기화합물을 분리함으로써,
              용수의 재사용성을 높이고 제품 생산성 및 품질을 향상시킵니다.
            </p>
          </div>

          <div className="p-[40px] border flex flex-col gap-[40px] w-[400px] h-[600px] group animate-borderGrow">
            <div className="relative w-[300px] h-[300px] overflow-hidden">
              <Image
                fill
                src={grils}
                alt="공장 그릴 선반 사진"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <h2 className="text-[30px]">산학협력 연구개발</h2>
            <p className="text-black-30 leading-7">
              고객사가 요구하는 자동차 외장 컬러가 다변화 됨에 따라, 트렌드에
              맞는 독자적이고 고품질의 컬러를 사용하기 위해 산학협력을 통한
              다방면적 연구를 진행합니다.
            </p>
          </div>

          <div className="p-[40px] border flex flex-col gap-[40px] w-[400px] h-[600px] group animate-borderGrow">
            <div className="relative w-[300px] h-[300px] overflow-hidden">
              <Image
                fill
                src={desk}
                alt="계약 컨셉 사진"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <h2 className="text-[30px]">공정한 인재채용</h2>
            <p className="text-black-30 leading-7">
              신용보증기금, 기업은행, 중소기업 진흥 공단 등과 협업하여 내일
              채움공채를 비롯한 다양한 인센티브 등을 제공하며, 공정한
              인재채용과정으로 일자리를 창출합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
