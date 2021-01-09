import * as React from 'react'
import Head from 'next/head'
import Header from '../components/layout/header'
import EmailBox from '../components/homepage/email-box'
import FacebookBox from '../components/homepage/facebook-box'
import { GetStaticProps, NextPage } from 'next'
import PostCard from '../components/shared/post-card'
import fetchPosts, { PostSummary } from '../api/fetch-posts'
import Overline from '../components/design-system/typography/overline'
import Button from '../components/design-system/button/button'

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
            className="h-96 bg-no-repeat bg-cover bg-center md:hidden relative"
            style={{
              backgroundImage: "url('/components/homepage/heroimage-cartagena-1000.jpg')",
            }}
          />
          <div
            className="h-96 py-72 bg-no-repeat bg-cover bg-center md:block relative"
            style={{
              backgroundImage: "url('/components/homepage/heroimage-cartagena-2000.jpg')",
            }}
          />
          <div className="bg-white rounded-3xl -mt-44 max-w-4xl mx-auto py-10 px-24 relative z-10">
            <Overline className="mb-1">Video Course</Overline>
            <h1 className="font-black text-4xl mb-5 max-w-lg mx-auto">
              Learn how to speak Spanish like a Colombian
            </h1>

            <div className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
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
        <div className="flex flex-wrap justify-center">
          {posts.map((post) => {
            return <PostCard post={post} key={post.slug} />
          })}
        </div>
        <div className="container mx-auto px-64 my-12 flex flex-row">
          <div className="email-box flex-1 mx-8">
            <EmailBox mailingListUrl="https://api.mailaxa.com/mailflow/L1vWbDoSk/subscriber" />
          </div>
          <div className="flex-1 mx-8">
            <FacebookBox />
          </div>
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
