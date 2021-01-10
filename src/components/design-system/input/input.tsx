import * as React from 'react'

interface Props {
  type: string
  name: string
  errorMsg?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ type, name, errorMsg }, ref) => {
  const errorClass = errorMsg ? 'border-red-500' : ''

  return (
    <>
      {errorMsg && <div className="text-red-500 mb-2">{errorMsg}</div>}
      <input
        className={`w-60 py-2 px-3 rounded-sm border border-gray-300 text-gray-600 ${errorClass}`}
        type={type}
        name={name}
        ref={ref}
      />
    </>
  )
})
Input.displayName = 'Input'

export default Input
