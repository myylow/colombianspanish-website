import { GetServerSideProps } from 'next'
import * as React from 'react'
import fetchPosts, { PostSummary } from '../http/fetch-posts'
import Header from '../shared-components/header'
import PageTitle from '../shared-components/page-title'
import PostCardList from '../shared-components/post-card-list'

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
        <div className="mt-4">
          <PostCardList spacing="md" posts={posts} />
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
