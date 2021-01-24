const withMDX = require('@next/mdx')()

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/* email course redirects */
const oldEmailCourseUrls = [
  '/colombian-romance-101',
  '/colombian-fiesta-slang',
  '/ordering-in-spanish',
  '/spanish-conversation-starters',
]
const emailCourseRedirects = oldEmailCourseUrls.map((url) => ({
  source: url,
  destination: `/emailcourse${url}`,
  permanent: true,
}))

/* tag page redirects */
const oldTagPageUrls = ['/where-to-study', '/what-to-study', '/how-to-study']
const tagPageRedirects = oldTagPageUrls.map((url) => ({
  source: url,
  destination: `/blog/category${url}`,
  permanent: true,
}))

/* blog page slugs */
const oldBlogPageSlugs = [
  'writing-spanish-work-emails-like-a-pro',
  'how-to-improve-your-accent-in-spanish',
  'colombian-spanish-learners-dictionary',
  'colombian-expressions-explained-pelar-el-cobre',
  'studying-spanish-in-medellin-best-schools',
  'options-for-studying-spanish-bogota',
  'using-vos-in-colombia-and-beyond',
  'mucha-feria-o-que',
  'practice-spanish-envigado',
  'language-exchanges-colombia',
  'parche-meaning',
  'perplexing-mystery-of-colombian-culture',
  'spanish-schools-colombia',
  'moving-to-medellin-guide',
  'best-online-spanish-courses-apps',
  'bogota-slang-que-oso',
  'funny-sayings-from-colombia',
  'chevere-bacano-meaning',
  'how-to-speak-colombian-spanish',
  'spanish-zero-to-hero',
  'study-spanish-in-colombia',
  'meaning-of-vaina',
  'colombian-accents',
  'parcero-meaning',
  'describing-colombians',
  'narcos-a-guide-to-the-slang',
  'meaning-of-berraco',
  'medellin-social-spanish',
  'english-words-used-in-colombia',
  'best-place-to-study-spanish-in-colombia',
  'colombian-spanish-resources',
  'charting-your-progress-spanish',
  'is-colombian-spanish-best',
  'top-10-colombian-slang-terms',
  'dating-in-colombia',
  'spanish-divine-touch',
  'tips-for-more-natural-spanish',
  'animal-slang',
]
const blogPageRedirects = oldBlogPageSlugs.map((slug) => ({
  source: `/${slug}`,
  destination: `/blog/${slug}`,
  permanent: true,
}))

const CF_DOMAIN = process.env.CF_DOMAIN

module.exports = withMDX(
  withBundleAnalyzer({
    pageExtensions: ['tsx', 'mdx'],

    images: {
      domains: ['colombianspanishblog.files.wordpress.com'],
    },

    redirects: () => [
      ...emailCourseRedirects,
      ...tagPageRedirects,
      ...blogPageRedirects,

      /* tags to categories */
      {
        source: '/tag/:slug',
        destination: '/blog/category/:slug',
        permanent: true,
      },

      /* old product urls */
      {
        source: '/ebook',
        destination: '/course',
        permanent: true,
      },
      {
        source: '/videocourse',
        destination: 'https://course.colombianspanish.co/p/conversational-spanish-for-colombia',
        permanent: true,
      },
      {
        source: '/studykit',
        destination: 'https://gum.co/colombianspanishstudykit',
        permanent: true,
      },

      /* old blog post urls */
      {
        source: '/review-spanish-learning-apps-websites',
        destination: '/blog/best-online-spanish-courses-apps',
        permanent: true,
      },
      {
        source: '/review-online-spanish-courses-apps',
        destination: '/blog/best-online-spanish-courses-apps',
        permanent: true,
      },
      {
        source: '/revealed-the-best-place-to-study-spanish-in-colombia',
        destination: '/blog/best-place-to-study-spanish-in-colombia',
        permanent: true,
      },
      {
        source: '/activities-practice-spanish-envigado',
        destination: '/blog/practice-spanish-envigado',
        permanent: true,
      },
      {
        source: '/colombian-culture',
        destination: '/blog/perplexing-mystery-of-colombian-culture',
        permanent: true,
      },

      /* legacy my purchase urls */
      {
        source: '/mypurchases/:id/colombian-spanish-ebook-kindle',
        destination: `${CF_DOMAIN}/download-ebook-kindle?subscriberId=:id`,
        permanent: false,
      },
      {
        source: '/mypurchases/:id/colombian-spanish-ebook-epub',
        destination: `${CF_DOMAIN}/download-ebook-epub?subscriberId=:id`,
        permanent: false,
      },
      {
        source: '/mypurchases/:id/colombian-spanish-ebook-pdf',
        destination: `${CF_DOMAIN}/download-ebook-pdf?subscriberId=:id`,
        permanent: false,
      },
      {
        source: '/mypurchases/:id/colombian-spanish-flashcards',
        destination: `${CF_DOMAIN}/download-flashcards?subscriberId=:id`,
        permanent: false,
      },
    ],
  })
)
