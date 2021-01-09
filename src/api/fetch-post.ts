import { PostWithEmbeddedDataResponse } from './responses/post-response'
import * as he from 'he'
import sampleSize from 'lodash/sampleSize'
import fetchPosts, { PostSummary } from './fetch-posts'

interface PostImage {
  url: string
  width: number
  height: number
}

interface PostCategory {
  id: number
  name: string
  slug: string
}
export interface Post {
  slug: string
  title: string
  images: Record<string, PostImage>
  content: string
  pageUrl: string
  subtitle: string
  date: string
  relatedPosts: PostSummary[]
  author: string
  datePublished: string
  dateModified: string
  categories: PostCategory[]
}

const makeImagesFromFeaturedMediaUrl = (featuredMediaUrl) => {
  var images = {
    facebook: { url: featuredMediaUrl + '?w=1024&h=512&crop=1', width: 1024, height: 512 },
    twitter: { url: featuredMediaUrl + '?w=1024&h=576&crop=1', width: 1024, height: 576 },
    pinterest: { url: featuredMediaUrl + '?w=600&h=900&crop=1', width: 600, height: 900 },
    featured: { url: featuredMediaUrl + '?w=335', width: 335, height: 335 },
    large_thumbnail: { url: featuredMediaUrl + '?w=400', width: 315, height: 315 },
    small_thumbnail: { url: featuredMediaUrl + '?w=125', width: 125, height: 125 },
  }

  return images
}

const fetchPost = async (slug: string): Promise<Post> => {
  const response = await fetch(`${process.env.WORDPRESS_ENDPOINT}/posts?slug=${slug}&_embed=true`)
  const rawPosts = (await response.json()) as PostWithEmbeddedDataResponse[]
  const rawPost = rawPosts[0]

  // Make subtitle from content
  let subtitle = ''
  const subtitleRegex = /^<(?:p|summary)>(.*)<\/(?:p|summary)>/i
  let content = rawPost.content.rendered.replace(subtitleRegex, (__: any, contents: string) => {
    subtitle = he.decode(contents)
    return ''
  })

  // get categories from terms
  const categories: PostCategory[] = rawPost._embedded['wp:term'][0].filter(
    (term) => term.taxonomy == 'category'
  )

  // Get related posts
  const categoryIds = categories.map((c) => c.id)
  const allRelatedPosts = await fetchPosts(categoryIds)
  const relatedPosts = sampleSize(allRelatedPosts, 2)

  const post: Post = {
    slug: rawPost.slug,
    title: he.decode(rawPost.title.rendered),
    images: makeImagesFromFeaturedMediaUrl(rawPost.jetpack_featured_media_url),
    categories,
    content,
    subtitle,
    dateModified: rawPost.modified,
    datePublished: rawPost.date,
    relatedPosts,
    date: rawPost.date,
    author: 'Peter',
    pageUrl: `${process.env.PRODUCTION_DOMAIN}/blog/${slug}`,
  }

  return post
}

export default fetchPost
