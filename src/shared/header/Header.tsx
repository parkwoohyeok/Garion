import Image from 'next/image'
import logo from '/public/assets/images/logo.png'
import { useState, useEffect } from 'react'

export default function Header() {
  const [showHeader, setShowHeader] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const LIST_DEFAULT_STYLE = `h-[2px] bg-[#0058a7] w-0 absolute -top-[25px] transition-all duration-500 group-hover:w-full`

  useEffect(() => {
    // Header가 보이도록 지연 시간 설정
    const timer = setTimeout(() => {
      setShowHeader(true)
    }, 300)

    // GARION 텍스트 애니메이션을 위한 타이머
    const titleTimer = setTimeout(() => {
      setShowTitle(true)
    }, 600)

    return () => {
      clearTimeout(timer)
      clearTimeout(titleTimer)
    }
  }, [])

  return (
    <div
      className={`transition-all duration-1000 transform fixed top-0 h-[80px] z-dropdown flex items-center w-[100vw] bg-[#ffffff] px-[130px] ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center hover:cursor-pointer h-full gap-[5px]">
        <Image src={logo} width={50} height={32} alt="회사로고" />
        {/* GARION 텍스트에 애니메이션 추가 */}
        <h1
          className={`text-[30px] transition-all duration-1000 transform ${
            showTitle
              ? 'translate-x-0 opacity-100'
              : '-translate-x-full opacity-0'
          }`}
        >
          GARION
        </h1>
      </div>
    </div>
  )
}
