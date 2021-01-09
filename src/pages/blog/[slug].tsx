import * as React from 'react'
import Head from 'next/head'
import { convertWpHtmlToJsx } from '../../lib/wordpress/jsx-converter'
import Header from '../../components/shared/header'
import { GetStaticPaths, GetStaticProps } from 'next'
import fetchPost, { Post } from '../../api/fetch-post'
import { useEffect } from 'react'
import PostCard from '../../components/shared/post-card'

interface Props {
  post: Post
}

const BlogPost = ({ post }: Props) => {
  const content = convertWpHtmlToJsx(post.content)

  useEffect(() => {
    const twitterScript = document.createElement('script')
    twitterScript.src = 'https://platform.twitter.com/widgets.js'
    twitterScript.async = true
    document.body.appendChild(twitterScript)
  }, [])

  return (
    <>
      <section>
        <Header buttonColor="red" />

        <Head>
          <title>{post.title}</title>
          <meta itemProp="url" content={post.pageUrl} />
          <meta name="description" content={post.title} />
          <meta name="keywords" content={post.subtitle} />

          {/*Facebook */}
          <meta property="og:url" content={post.pageUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.subtitle} />
          <meta property="og:site_name" content="Colombian Spanish" />
          <meta property="og:image" content={post.images.facebook.url} />
          <meta property="og:image:secure_url" content={post.images.facebook.url} />
          <meta property="og:image:width" content={post.images.facebook.width.toString()} />
          <meta property="og:image:height" content={post.images.facebook.height.toString()} />

          {/*Twitter */}
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:url" content={post.pageUrl} />
          <meta name="twitter:description" content={post.subtitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:src" content={post.images.twitter.url} />
        </Head>

        <div className="" itemScope itemType="http://schema.org/Article">
          <article className="article" itemProp="mainEntityOfPage">
            {/* schema  */}
            <span>
              <meta itemProp="datePublished" content={post.datePublished} />
              <meta itemProp="dateModified" content={post.dateModified} />
              <meta itemProp="author" content={post.author} />
              <span itemProp="image" itemScope itemType="http://schema.org/ImageObject">
                <meta itemProp="url" content={post.images.featured.url} />
              </span>
              <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content={'Colombian Spanish'} />
                <meta itemProp="logo" content={'/images/mini-header/logo.png'} />
              </span>
            </span>

            <header className="justify-between bg-gray-100">
              <div className="flex flex-row items-center container py-8">
                {/* post image */}
                <div
                  className="bg-cover bg-center mx-auto w-80 h-52 rounded-3xl shadow-xl mr-10"
                  style={{ backgroundImage: `url('${post.images.featured.url}')` }}
                />

                {/* categories */}
                <div className="flex-1">
                  {post.categories.map((it) => {
                    return (
                      <a
                        className="mx-2 mb-4 first:ml-0 bg-white px-2 py-1 text-sm rounded-lg capitalize text-gray-600 inline-block border"
                        href={`/blog/category/${it.slug}`}
                        key={it.slug}
                      >
                        {it.name}
                      </a>
                    )
                  })}

                  {/* title and sub-title */}
                  <h1 className="font-bold text-4xl text-gray-800" itemProp="headline name">
                    {post.title}
                  </h1>
                  <div className="text-gray-600 text-xl mt-2">{post.subtitle}</div>

                  {/* author and social share links  */}
                  <div className="flex items-center text-sm mt-8">
                    <div className="flex items-center border-gray-300">
                      <img
                        className="rounded-full w-12 mr-4  border-gray-400"
                        src="/img/authors/author-peter.jpg"
                      />
                      <span>
                        Written by <b>{post.author}</b>
                      </span>
                    </div>
                    <div className="ml-12">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="icon-social-large mx-2 icon-twitter"
                        href={`https://twitter.com/intent/tweet?text=${post.title}&amp;url=${post.pageUrl}`}
                      />
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="icon-social-large mx-2 icon-facebook"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${post.pageUrl}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="max-w-2xl mx-auto mt-12 text-xl text-gray-600">{content}</div>

            <div className="flex flex-wrap justify-center">
              {post.relatedPosts.map((it) => {
                return <PostCard post={it} key={it.slug} />
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: 'blocking', paths: [] }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string

  if (!slug) {
    return { notFound: true }
  }

  const post = await fetchPost(slug)
  return { props: { post } }
}

export default BlogPost
