import * as React from 'react'

interface Props {
  type: string
  name: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ type, name }, ref) => {
  return <input className="w-60" type={type} name={name} ref={ref} />
})
Input.displayName = 'Input'

export default Input
