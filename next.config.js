module.exports = {
  images: {
    domains: ['colombianspanishblog.files.wordpress.com'],
  },

  redirects: () => [
    /* email course */
    {
      source: '/colombian-romance-101',
      destination: '/emailcourse/colombian-romance-101',
      permanent: true,
    },
    {
      source: '/colombian-fiesta-slang',
      destination: '/emailcourse/colombian-fiesta-slang',
      permanent: true,
    },
    {
      source: '/ordering-in-spanish',
      destination: '/emailcourse/ordering-in-spanish',
      permanent: true,
    },
    {
      source: '/spanish-conversation-starters',
      destination: '/emailcourse/spanish-conversation-starters',
      permanent: true,
    },

    /* old urls */
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
  ],
}
