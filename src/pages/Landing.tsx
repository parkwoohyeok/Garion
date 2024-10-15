import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import landing from '/public/assets/images/landing.jpg'

export default function Landing() {
  const [showDiv, setShowDiv] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowDiv(true)
    }, 1000)

    setTimeout(() => {
      setShowText(true)
    }, 2000)
  }, [])

  return (
    <section>
      <div className="relative">
        <div
          className={`absolute right-0 h-[100vh] bg-black-90 px-[20px] opacity-80 transition-all duration-1000 transform ${
            showDiv ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <h1
            className={`text-[50px] font-bold text-white pt-[110%] bottom-10 transition-all duration-1000 transform ${
              showText
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            광주지역 유일 only 수출용 부품, <br />
            가리온이 선도하겠습니다.
          </h1>
        </div>
        <Image
          className="max-h-[100vh]"
          src={landing}
          alt="랜딩이미지"
          priority
        />
      </div>
    </section>
  )
}
