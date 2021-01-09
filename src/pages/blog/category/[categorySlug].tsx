import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as React from 'react'
import fetchPosts, { PostSummary } from '../../../api/fetch-posts'
import PostCard from '../../../components/shared/post-card'
import Header from '../../../components/shared/header'
import fetchCategory, { Category } from '../../../api/fetch-category'
import PageTitle from '../../../components/shared/page-title'

interface Props {
  posts: PostSummary[]
  category: Category
}

const CategoryListing: NextPage<Props> = ({ posts, category }: Props) => {
  return (
    <>
      <Header buttonColor="red" />
      <PageTitle title={category.name} />
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
  const posts = await fetchPosts({ categories: [category.id] })
  return { props: { category, posts } }
}

export default CategoryListing
