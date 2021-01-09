import { GetStaticPaths, GetStaticProps } from 'next'
import * as React from 'react'
import Header from '../../components/layout/header'
import fetchPage from '../../api/fetch-page'

interface Props {
  title: string
  content: string
}

const AboutPage = ({ title, content }: Props) => {
  return (
    <>
      <Header buttonColor="red" />
      <section className="container">
        <article className="" itemProp="mainEntityOfPage">
          <div className="post-padding">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </article>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: 'blocking', paths: [] }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = `${ctx.params?.pagename as string}`
  const data = await fetchPage(slug)
  return {
    props: { ...data },
  }
}

export default AboutPage
