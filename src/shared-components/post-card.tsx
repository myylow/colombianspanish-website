import * as React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { PostSummary } from '../http/fetch-posts'

interface Props {
  post: PostSummary
}

const PostCard = ({ post }: Props) => {
  const { slug, image, excerpt, title } = post
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <a className="w-96 hover:bg-gray-100 mx-6 my-4 px-5 py-5">
        <div className="bg-center bg-cover h-40 rounded-md relative">
          <NextImage src={image} layout="fill" className="object-cover object-center" />
        </div>
        <h3 className="font-bold py-4 text-xl text-gray-800">{title}</h3>
        <div className="text-gray-600 excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      </a>
    </Link>
  )
}

export default PostCard
