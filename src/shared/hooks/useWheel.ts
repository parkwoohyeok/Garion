import { useEffect, useRef } from 'react'

type CallbackFunction = (
  ref: React.RefObject<HTMLDivElement>,
  deltaY: number,
  scrollTop: number,
) => void

const useWheel = (
  callback: CallbackFunction,
): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)

  const handleMouseWheel = (event: WheelEvent) => {
    event.preventDefault()
    if (!timeoutRef.current) {
      callback(ref, event.deltaY, ref.current?.scrollTop!)
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null
      }, 1500)
    }
  }

  const handleTouchStart = (event: TouchEvent) => {
    event.preventDefault()
    if (timeoutRef.current) return
    const touchStartY = event.touches[0].clientY

    const handleTouchMove = (event: TouchEvent) => {
      const touchCurrentY = event.touches[0].clientY
      const deltaY = touchStartY - touchCurrentY

      if (Math.abs(deltaY) > 50) {
        callback(ref, deltaY, ref.current?.scrollTop!)
        window.removeEventListener('touchmove', handleTouchMove)
      }
    }

    window.addEventListener('touchmove', handleTouchMove)
    const handleTouchEnd = () => {
      window.removeEventListener('touchmove', handleTouchMove)
      timeoutRef.current = null
    }

    window.addEventListener('touchend', handleTouchEnd)
  }

  useEffect(() => {
    const currentRef = ref.current
    if (currentRef) {
      currentRef.addEventListener('wheel', handleMouseWheel)
      currentRef.addEventListener('touchstart', handleTouchStart)
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleMouseWheel)
        currentRef.removeEventListener('touchstart', handleTouchStart)
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [ref, callback])

  return ref
}

export default useWheel
