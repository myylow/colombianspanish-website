import * as React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { PostSummary } from '../http/fetch-posts'

export type CardSpacing = 'md' | 'none'
type CardSize = 'md' | 'sm'

const sizeToClasses: Record<CardSize, string> = {
  md: 'w-96 px-5 text-lg',
  sm: 'w-68 px-4 text-lg',
}
const spacingToClasses: Record<CardSpacing, string> = {
  md: 'mx-6 my-4',
  none: '',
}

interface Props {
  post: PostSummary
  spacing: CardSpacing
  size: CardSize
  className?: string
}

const PostCard = ({ post, size, spacing, className = '' }: Props) => {
  const { slug, image, excerpt, title } = post
  const sizeClasses = sizeToClasses[size]
  const spaceClasses = spacingToClasses[spacing]

  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <a className={`${sizeClasses} ${spaceClasses} hover:bg-gray-100 py-5 ${className}`}>
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
