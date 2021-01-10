import * as React from 'react'

type InputSize = 'lg' | 'md'

interface Props {
  type: string
  name: string
  placeholder?: string
  errorMsg?: string
  className?: string
  size: InputSize
}

const InputSizeToClasses: Record<InputSize, string> = {
  lg: 'w-60 py-2 text-lg',
  md: 'w-48 py-2 text-base',
}

const InputSizeToErrorMessageClasses: Record<InputSize, string> = {
  lg: 'text-base',
  md: 'text-base',
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ type, name, size, placeholder = '', errorMsg = '', className = '' }, ref) => {
    const errorClass = errorMsg ? 'border-red-500' : ''
    const sizeClasses = InputSizeToClasses[size]
    const errorMessageClasses = InputSizeToErrorMessageClasses[size]

    return (
      <>
        {errorMsg && <div className={`text-red-500 mb-1 ${errorMessageClasses}`}>{errorMsg}</div>}
        <input
          className={`${sizeClasses} px-3 rounded-md border border-gray-300 outline-none text-gray-600 ${errorClass} ${className}`}
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
        />
      </>
    )
  }
)
Input.displayName = 'Input'

export default Input
