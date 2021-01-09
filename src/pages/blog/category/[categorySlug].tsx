import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as React from 'react'
import fetchPosts, { PostSummary } from '../../../api/fetch-posts'
import PostCard from '../../../components/shared/post-card'
import Header from '../../../components/layout/header'
import fetchCategory, { Category } from '../../../api/fetch-category'

interface Props {
  posts: PostSummary[]
  category: Category
}

const CategoryListing: NextPage<Props> = ({ posts, category }: Props) => {
  return (
    <>
      <Header buttonColor="red" />

      <section className="bg-gray-100 border border-l-0 border-r-0 border-gray-200">
        <div className="container">
          <h1 className="py-16 text-5xl font-light">{category.name}</h1>
        </div>
      </section>
      <div className="flex flex-wrap justify-center my-8">
        {posts.map((post) => {
          return <PostCard post={post} key={post.slug} />
        })}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: 'blocking', paths: [] }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categorySlug = ctx.params?.categorySlug as string | undefined
  if (!categorySlug) {
    return { notFound: true }
  }

  const category = await fetchCategory(categorySlug)
  const posts = await fetchPosts([category.id])
  return { props: { category, posts } }
}

export default CategoryListing
