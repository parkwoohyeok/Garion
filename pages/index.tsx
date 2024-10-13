import useWheel from '@shared/hooks/useWheel'
import SECTIONS from '@shared/ui/section/Sections'
import { useCallback, useState } from 'react'

export default function index() {
  const [curSection, setCurSection] = useState(0)
  const wheelHandler = useCallback(
    (
      ref: React.RefObject<HTMLDivElement>,
      deltaY: number,
      scrollTop: number,
    ) => {
      const pageHeight = window.innerHeight
      const DIVIDER_HEIGHT = 0
      if (deltaY > 0) {
        const dest = Math.floor(scrollTop / pageHeight) + 1
        setCurSection(dest)
        ref.current?.scrollTo({
          top: pageHeight * dest + DIVIDER_HEIGHT * dest,
          left: 0,
          behavior: 'smooth',
        })
      } else {
        const dest = Math.floor(scrollTop / pageHeight) - 1
        setCurSection(dest)
        ref.current?.scrollTo({
          top: pageHeight * dest + DIVIDER_HEIGHT * dest,
          left: 0,
          behavior: 'smooth',
        })
      }
    },
    [],
  )

  const containerRef = useWheel(wheelHandler)

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden" ref={containerRef}>
      {SECTIONS.map((SECTION, idx) => (
        <SECTION key={`${idx + 1}-section`} curSection={curSection} />
      ))}
    </div>
  )
}
