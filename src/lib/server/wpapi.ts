import * as WPAPI from 'wpapi'
import * as he from 'he'
import * as _ from 'lodash'

var apiEndpoint = process.env.API_ENDPOINT || 'https://public-api.wordpress.com'

var namespace = 'wp/v2/sites/colombianspanishblog.wordpress.com'

const thisWp = WPAPI({
  endpoint: apiEndpoint,
})

const makeImagesFromFeaturedMediaUrl = (featuredMediaUrl) => {
  var images = {
    facebook: {
      url: featuredMediaUrl + '?w=1024&h=512&crop=1',
      width: 1024,
      height: 512,
    },
    twitter: {
      url: featuredMediaUrl + '?w=1024&h=576&crop=1',
      width: 1024,
      height: 576,
    },
    pinterest: {
      url: featuredMediaUrl + '?w=600&h=900&crop=1',
      width: 600,
      height: 900,
    },
    featured: {
      url: featuredMediaUrl + '?w=335',
      width: 335,
      height: 335,
    },
    large_thumbnail: {
      url: featuredMediaUrl + '?w=400',
      width: 315,
      height: 315,
    },
    small_thumbnail: {
      url: featuredMediaUrl + '?w=125',
      width: 125,
      height: 125,
    },
  }

  return images
}

const makeExtracts = (data) => {
  var extracts = data.map((it) => {
    var slug = it.slug
    var link = `/${it.slug}`
    var title = it.title.rendered
    var categories = it._embedded['wp:term'][0]
      .filter((term) => term.taxonomy == 'category')
      .map((category) => {
        return {
          name: category.name,
          slug: category.slug,
        }
      })

    // WP sometimes adds entites to the title
    title = he.decode(title)

    // Make excerpt

    const excerpt = it.excerpt.rendered

    // Make images
    var images = makeImagesFromFeaturedMediaUrl(it.featured_media_url)

    var postExtract = {
      slug,
      link,
      title,
      categories,
      images,
      excerpt,
    }
    return postExtract
  })

  return extracts
}

export const makePaging = (data) => {
  return {
    totalPages: parseInt(data._paging.totalPages),
  }
}

export const getCategory = async (slug, pageNumber = 1) => {
  try {
    pageNumber = pageNumber || 1

    var categories = await thisWp.categories().namespace(namespace).slug(slug)

    var categoryId = categories[0].id

    var endPoint = thisWp
      .posts()
      .categories(categoryId)
      .namespace(namespace)
      .perPage(12)
      .page(pageNumber)
      .embed()

    var data = await endPoint
    var extracts = makeExtracts(data)
    var paging = makePaging(data)

    return { extracts, paging }
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const transformRawPost = async (post) => {
  const slug = post.slug
  // Process categories from embedded data
  var categories = post._embedded['wp:term'][0]
    .filter((term) => term.taxonomy == 'category')
    .map((category) => {
      let link = '/tag/' + category.slug
      if (category.slug.match(/^(what-to-study|how-to-study|where-to-study)$/)) {
        link = '/' + category.slug
      }

      return {
        id: category.id,
        name: category.name,
        slug: category.slug,
        link,
      }
    })
  if (categories.length > 3) categories = categories.slice(0, 3)

  // Then define the rest of the data
  var postId = post.id
  var pageUrl = `${process.env.PRODUCTION_DOMAIN}/${slug}`
  var fbPageUrl = `${process.env.PRODUCTION_DOMAIN}/${slug}`
  var title = he.decode(post.title.rendered)
  var date = '' //timeago().format(post.modified)
  var datePublished = post.date
  var dateModified = post.modified
  var author = post._embedded['author'][0].name
  var content = post.content.rendered

  // Make images
  var images = makeImagesFromFeaturedMediaUrl(post.featured_media_url)

  // Make subtitle from content
  var subtitle = ''
  content = content.replace(/<summary>(.*)<\/summary>/i, (__: any, contents: string) => {
    subtitle = contents
    return ''
  })

  // Get related posts
  var randomSlug = _.sample(categories).slug
  var { extracts } = (await getCategory(randomSlug)) as any
  var relatedPosts = extracts.filter((it) => it.slug != slug)
  relatedPosts = _.sampleSize(relatedPosts, 2)

  var viewModel = {
    slug,
    postId,
    pageUrl,
    fbPageUrl,
    title,
    content,
    subtitle,
    images,
    categories,
    date,
    datePublished,
    dateModified,
    author,
    relatedPosts,
  }
  return viewModel
}

export const getPost = async (slug) => {
  // Get the post data
  var endPoint = thisWp.posts().namespace(namespace).slug(slug).embed()
  //   log.debug("Getting post for: " + slug, endPoint.toString());
  var posts = await endPoint

  if (!posts || !posts.length) return null

  var post = posts[0]
  //   log.debug("Got post", post, posts);

  return transformRawPost(post)
}

export const getPage = async (slug) => {
  try {
    var endPoint = thisWp.pages().namespace(namespace).slug(slug).embed()
    var pages = await endPoint
    var page = pages[0]

    var pageId = page.id
    var pageUrl = 'https://colombianspanish.co/' + slug
    var title = he.decode(page.title.rendered)
    var content = page.content.rendered
    var date = '' //timeago().format(page.modified)

    var viewModel = {
      apiEndpoint: endPoint.toString(),
      pageId,
      pageUrl,
      title,
      content,
      date,
    }
    return viewModel
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getHomepage = async (pageNumber = 1) => {
  try {
    var notHomepageTagId = 78080022
    pageNumber = pageNumber || 1
    var endPoint = thisWp
      .posts()
      .namespace(namespace)
      .perPage(12)
      .page(pageNumber)
      .excludeTags(notHomepageTagId)
      .embed()
    var data = await endPoint

    var extracts = makeExtracts(data)
    var paging = makePaging(data)

    return { extracts, paging }
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getStudyTagPage = async (slug, pageNumber) => {
  try {
    pageNumber = pageNumber || 1

    const pagePromise = getPage(slug)
    const categoryPromise = getCategory(slug, pageNumber)

    const [page, category]: any = await Promise.all([pagePromise, categoryPromise])

    const imageIndex = category.extracts.length > 2 ? 2 : 0
    const imageUrl = category.extracts[imageIndex].images.large_thumbnail.url

    return { page, imageUrl, extracts: category.extracts, paging: category.paging }
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const searchPosts = async (searchTerm) => {
  var endPoint = thisWp
    .posts()
    .namespace(namespace)
    .search(searchTerm)
    .perPage(12)
    .order('desc')
    .orderby('relevance')
    .embed()
  var data = await endPoint
  console.debug(endPoint.toString())

  var extracts = makeExtracts(data)
  return extracts
}
