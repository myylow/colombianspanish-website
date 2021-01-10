import { CategoryResponse } from './responses/category-response'

export interface Category {
  id: number
  name: string
  slug: string
}

const fetchCategory = async (slug: string): Promise<Category> => {
  const response = await fetch(`${process.env.WORDPRESS_ENDPOINT}/categories?slug=${slug}`)
  const rawCategories = (await response.json()) as CategoryResponse[]
  const category = rawCategories[0]
  return category
}

export default fetchCategory
