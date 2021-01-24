import * as React from 'react'
import EbookThankYouMdx from '../page-components/thank-you-pages/ebook-thank-you.mdx'
import Header from '../shared-components/header'
import PageTitle from '../shared-components/page-title'

const EbookThankYou = () => {
  return (
    <div>
      <Header buttonColor="red" />
      <PageTitle title={'Thanks for buying the Colombian Spanish eBook!'} />
      <section className="container text-xl text-gray-600">
        <EbookThankYouMdx />
      </section>
    </div>
  )
}

export default EbookThankYou
