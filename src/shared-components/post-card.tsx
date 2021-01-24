import * as React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { PostSummary } from '../http/fetch-posts'

export type CardSpacing = 'md' | 'none'
type CardSize = 'md' | 'sm'

const sizeToClasses: Record<CardSize, string> = {
  md: 'w-full md:w-72 lg:w-96 px-5 text-lg',
  sm: 'w-68 px-4 text-lg',
}
const spacingToClasses: Record<CardSpacing, string> = {
  md: 'md:mx-4 lg:mx-6 lg:my-4',
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
      <a
        className={`${sizeClasses} ${spaceClasses} hover:bg-gray-100 pb-8 pt-10 lg:py-5 border-t md:border-t-0 ${className}`}
      >
        <div className="bg-center bg-cover h-40 rounded-md relative">
          {/* The images display differently enough on different sizes that we can't handle it 
          with next.js image component alone, we need media queries too. */}
          <div className="block md:hidden">
            <NextImage src={image} layout="fill" className="object-cover object-center" />
          </div>
          <div className="hidden md:block lg:hidden">
            <NextImage
              src={image}
              layout="responsive"
              width="248"
              height="160"
              className="object-cover object-center"
            />
          </div>
          <div className="hidden lg:block">
            <NextImage
              src={image}
              layout="fixed"
              width="344"
              height="160"
              className="object-cover object-center"
            />
          </div>
        </div>
        <h3 className="font-bold pt-6 pb-4 text-xl text-gray-800">{title}</h3>
        <div className="text-gray-600 excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      </a>
    </Link>
  )
}

export default PostCard
