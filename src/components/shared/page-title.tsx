import * as React from 'react'
interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <section className="bg-gray-100 border border-l-0 border-r-0 border-gray-200">
      <div className="container">
        <h1 className="py-12 text-5xl font-light">{title}</h1>
      </div>
    </section>
  )
}

export default PageTitle
