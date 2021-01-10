import * as React from 'react'

interface Props {
  price: number
  className?: string
}

const Price = ({ price, className = '' }: Props) => {
  return (
    <div className={`text-blue-500 relative font-black text-5xl ${className}`}>
      <span className="absolute text-2xl -left-4 top-0">$</span>
      {price}
    </div>
  )
}

export default Price
