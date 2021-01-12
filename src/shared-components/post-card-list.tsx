import * as React from 'react'
import { PostSummary } from '../http/fetch-posts'
import PostCard, { CardSpacing } from './post-card'

interface Props {
  posts: PostSummary[]
  spacing: CardSpacing
}

const PostCardList = ({ posts, spacing }: Props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post) => {
        return <PostCard spacing={spacing} size="md" post={post} key={post.slug} />
      })}
    </div>
  )
}

export default PostCardList
