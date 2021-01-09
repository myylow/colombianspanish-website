import * as React from 'react'

export type ButtonColor = 'red' | 'blue' | 'turquoise' | 'transparent' | 'outline'
type ButtonSize = 'xl' | 'lg' | 'md'

const buttonColorStyles: Record<ButtonColor, string> = {
  red: 'bg-red-600 hover:bg-red-700 border-none text-white',
  blue: 'bg-blue-500 hover:bg-blue-400 border-none text-white',
  turquoise: 'bg-green-500 hover:bg-green-400 border-none text-white',
  transparent: 'bg-black bg-opacity-20 hover:bg-opacity-30 border border-white text-white',
  outline: 'border hover:border-red-700',
}
const buttonSizeStyles: Record<ButtonSize, string> = {
  xl: 'py-4 px-24 text-lg',
  lg: 'py-4 px-16 text-md',
  md: 'py-2 px-12 text-base',
}

interface Props {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  bgColor: ButtonColor
  size: ButtonSize
  className?: string
  disabled?: boolean
}

const Button = ({ children, onClick, bgColor, size, className = '', disabled = false }: Props) => {
  const bgClasses = buttonColorStyles[bgColor]
  const sizeClasses = buttonSizeStyles[size]

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${bgClasses} ${sizeClasses} uppercase rounded-xl outline-none cursor-pointer font-bold 
      focus:outline-none disabled:cursor-auto disabled:opacity-50 transition-background duration-100 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
