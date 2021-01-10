import he from 'he'
import { PostWithEmbeddedDataResponse } from './responses/post-response'

const fetchPage = async (slug: string): Promise<any> => {
  const response = await fetch(`${process.env.WORDPRESS_ENDPOINT}/pages?slug=${slug}&_embed=true`)
  const rawPages = (await response.json()) as PostWithEmbeddedDataResponse[]
  const rawPage = rawPages[0]

  var pageUrl = `${process.env.PRODUCTION_DOMAIN}/${slug}`
  var title = he.decode(rawPage.title.rendered)
  var content = rawPage.content.rendered

  var page = {
    pageUrl,
    title,
    content,
  }
  return page
}

export default fetchPage
