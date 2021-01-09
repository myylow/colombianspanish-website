import * as he from 'he'
import { PostResponse } from './responses/post-response'

export interface PostSummary {
  slug: string
  image: string
  excerpt: string
  title: string
}

const fetchPosts = async (categories: number[] = []): Promise<PostSummary[]> => {
  const categoriesText = categories.join(',')
  const url = `${process.env.WORDPRESS_ENDPOINT}/posts?per_page=50&categories=${categoriesText}`
  const response = await fetch(url)
  const rawPosts = (await response.json()) as PostResponse[]

  const posts = rawPosts.map((rawPost) => {
    return {
      slug: rawPost.slug,
      title: he.decode(rawPost.title.rendered),
      excerpt: rawPost.excerpt.rendered,
      image: rawPost.jetpack_featured_media_url,
    }
  })

  return posts
}

export default fetchPosts
