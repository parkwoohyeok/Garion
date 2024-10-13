import Image from 'next/image'
import logo from '/public/assets/logo.png'
import { useState, useEffect } from 'react'

export default function Header() {
  const [showHeader, setShowHeader] = useState(false)
  const LIST_DEFAULT_STYLE = `hover:cursor-pointer`

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true)
    })

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`transition-all duration-1000 transform fixed top-0 h-[80px] z-dropdown flex items-center justify-between w-[100vw] bg-[#ffffff] px-[130px] ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center gap-[5px]">
        <Image src={logo} width={50} height={32} alt="회사로고" />
        <h1 className="text-[30px]">Garion</h1>
      </div>
      <ul className="flex text-[18px] gap-[30px]">
        <li className={`${LIST_DEFAULT_STYLE}`}>기업소개</li>
        <li className={`${LIST_DEFAULT_STYLE}`}>최근소식</li>
        <li className={`${LIST_DEFAULT_STYLE}`}>오시는길</li>
      </ul>
    </div>
  )
}
