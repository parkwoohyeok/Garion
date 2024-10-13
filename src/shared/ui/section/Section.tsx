import React, { Children, ReactNode } from 'react'

interface SectionProps {
  curSection: number
  index: number
  children?: ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <div
      className={`w-[100vw] h-[100vh]
      }`}
    >
      {children}
    </div>
  )
}

export default Section
