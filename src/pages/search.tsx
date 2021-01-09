import { GetServerSideProps } from 'next'
import * as React from 'react'
import fetchPosts, { PostSummary } from '../api/fetch-posts'
import Header from '../components/layout/header'
import PageTitle from '../components/shared/page-title'
import PostCard from '../components/shared/post-card'

interface Props {
  posts: PostSummary[]
  searchTerm: string
}

const Search = ({ posts, searchTerm }: Props) => {
  return (
    <>
      <Header buttonColor="red" />

      <PageTitle title={`Search results for "${searchTerm}"...`} />

      {Boolean(posts.length) && (
        <div className="flex flex-wrap justify-center my-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
      )}

      {!posts.length && (
        <div className="container py-16 text-2xl text-gray-600">
          Sorry, we could not find any good matches.
        </div>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const searchTerm = ctx.query.q as string
  const posts = await fetchPosts({ searchTerm })
  return { props: { posts, searchTerm } }
}

export default Search
