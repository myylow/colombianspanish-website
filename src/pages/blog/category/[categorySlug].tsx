import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as React from 'react'
import fetchPosts, { PostSummary } from '../../../http/fetch-posts'
import Header from '../../../shared-components/header'
import fetchCategory, { Category } from '../../../http/fetch-category'
import PageTitle from '../../../shared-components/page-title'
import PostCardList from '../../../shared-components/post-card-list'

interface Props {
  posts: PostSummary[]
  category: Category
}

const CategoryListing: NextPage<Props> = ({ posts, category }: Props) => {
  return (
    <>
      <Header buttonColor="red" />
      <PageTitle title={category.name} />
      <div className="my-8">
        <PostCardList spacing="md" posts={posts} />
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
