import queryString from 'query-string'
import * as he from 'he'
import { PostResponse } from './responses/post-response'

export interface PostSummary {
  slug: string
  image: string
  excerpt: string
  title: string
}

interface Options {
  categories?: number[]
  searchTerm?: string
}

const fetchPosts = async ({ categories = [], searchTerm = '' }: Options = {}): Promise<
  PostSummary[]
> => {
  const categoriesText = categories.join(',')
  const qs = queryString.stringify(
    { categories: categoriesText, search: searchTerm, per_page: 50 },
    { skipEmptyString: true, skipNull: true }
  )
  const url = `${process.env.WORDPRESS_ENDPOINT}/posts?${qs}`
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
