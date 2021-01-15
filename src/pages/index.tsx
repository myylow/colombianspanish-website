import * as React from 'react'
import Head from 'next/head'
import Header from '../shared-components/header'
import EmailBox from '../page-components/home-page/email-box'
import FacebookBox from '../page-components/home-page/facebook-box'
import { GetStaticProps, NextPage } from 'next'
import PostCardList from '../shared-components/post-card-list'
import fetchPosts, { PostSummary } from '../http/fetch-posts'
import Overline from '../ui-library/typography/overline'
import Button from '../ui-library/button/button'

interface Props {
  posts: PostSummary[]
}

const Index: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Learn how to speak Spanish like a Colombian</title>
        <meta property="og:title" content="Colombian Spanish" />
        <meta property="og:description" content="Learn how to speak Spanish like a Colombian" />
      </Head>
      <main>
        <Header buttonColor="outline" />

        {/* hero image */}
        <section className="text-center">
          <div
            className="h-60 lg:h-96 lg:py-72 bg-no-repeat bg-cover bg-center block relative"
            style={{
              backgroundImage: "url('/components/homepage/heroimage-cartagena-2000.jpg')",
            }}
          />
          <div className="bg-white rounded-3xl lg:-mt-44 max-w-4xl mx-auto py-8 lg:py-10 px-10 lg:px-24 relative z-10">
            <Overline className="mb-1">Video Course</Overline>
            <h1 className="font-black text-2xl lg:text-4xl mb-5 max-w-lg mx-auto">
              Learn how to speak Spanish like a Colombian
            </h1>

            <div className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              Our unique “<i>Conversational Spanish for Colombia</i>” course teaches you the Spanish
              you need to know to get the most out of your time in Colombia.
            </div>
            <a href="/course">
              <Button size="xl" bgColor="red">
                Learn More
              </Button>
            </a>
          </div>
        </section>

        {/* post list  */}
        <PostCardList posts={posts} spacing="md" />

        <div className="container mx-auto my-4 lg:my-12 grid lg:grid-cols-2 gap-16">
          <EmailBox accentColor="#0fb981" />
          <FacebookBox accentColor="#3b5998" />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts()
  return { props: { posts } }
}

export default Index
