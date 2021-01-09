import * as React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const Overline = ({ children, className = '' }: Props) => {
  return (
    <h6 className={`uppercase text-gray-400 font-semibold text-lg tracking-wide ${className}`}>
      {children}
    </h6>
  )
}

export default Overline
