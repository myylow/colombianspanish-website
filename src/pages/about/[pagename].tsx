import { GetStaticPaths, GetStaticProps } from 'next'
import * as React from 'react'
import Header from '../../shared-components/header'
import fetchPage from '../../http/fetch-page'
import PageTitle from '../../shared-components/page-title'

interface Props {
  title: string
  content: string
}

const AboutPage = ({ title, content }: Props) => {
  return (
    <>
      <Header buttonColor="red" />
      <PageTitle title={title} />
      <section className="container">
        <div className="py-4 text-xl text-gray-600" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: 'blocking', paths: [] }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = `about-${ctx.params?.pagename as string}`
  const data = await fetchPage(slug)
  return {
    props: { ...data },
  }
}

export default AboutPage
