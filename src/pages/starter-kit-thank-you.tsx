import * as React from 'react'
import StudyKitThankYouMdx from '../page-components/thank-you-pages/study-kit-thank-you.mdx'
import Header from '../shared-components/header'
import PageTitle from '../shared-components/page-title'

const StarterKitThankYou = () => {
  return (
    <div>
      <Header buttonColor="red" />
      <PageTitle title={'Thanks for buying the Colombian Spanish study kit!'} />
      <section className="container text-xl text-gray-600">
        <StudyKitThankYouMdx />
      </section>
    </div>
  )
}

export default StarterKitThankYou
