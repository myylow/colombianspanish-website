export interface PostResponse {
  id: number
  date: string
  guid: { rendered: string }
  modified: string
  slug: string
  status: string
  type: string
  link: string
  title: { rendered: string }
  content: {
    rendered: string
    protected: false
  }
  excerpt: {
    rendered: string
    protected: false
  }
  author: number
  jetpack_featured_media_url: string
}

interface EmbeddedAuthorResponse {
  name: string
}
interface EmbeddedTermResponse {
  id: number
  taxonomy: string
  name: string
  slug: string
}

export interface PostWithEmbeddedDataResponse extends PostResponse {
  _embedded: {
    'wp:term': EmbeddedTermResponse[][]
    author: EmbeddedAuthorResponse[]
  }
}
