import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../css/tailwind-base.css'
import '../css/tailwind-utilities.css'
import '../css/tailwind-components.css'
import '../css/legacy/reviews.css'
import '../css/legacy/readers-faq.css'
import '../css/legacy/article-inline-images.css'
import { useEffect } from 'react'
import Link from 'next/link'

const ColombianSpanishApp = ({ Component, pageProps }: AppProps) => {
  // Add Google Tag Manager
  useEffect(() => {
    ;(function (w, d, s, l, i) {
      w[l] = w[l] || []
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s) as HTMLScriptElement,
        dl = l != 'dataLayer' ? '&l=' + l : ''
      j.async = true
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
      f.parentNode!.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', process.env.NEXT_PUBLIC_GTM_ID)
  }, [])

  return (
    <>
      <Head>
        {/* favicon  */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="apple-touch-icon-114x114.png"
        />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="apple-touch-icon-144x144.png"
        />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="apple-touch-icon-120x120.png"
        />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="apple-touch-icon-152x152.png"
        />
        <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* facebook app id */}
        <meta property="fb:app_id" content="1811401369083538" />

        {/* preload fonts */}
        <link
          rel="preload"
          href="/fonts/sourcesanspro/SourceSans3VF-Roman.otf.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/sourcesanspro/SourceSans3VF-Italic.otf.woff2"
          as="font"
          crossOrigin="anonymous"
        />

        {/* send the referrer  */}
        <meta name="referrer" content="unsafe-url" />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CZX7NJQ20G"></script>
        <script></script>
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          {/* content of child page */}
          <Component {...pageProps} />
        </div>

        {/* site footer  */}
        <footer className="container flex flex-col lg:flex-row lg:items-center justify-between py-8 text-gray-600">
          <span className="text-center mb-8 lg:mb-0">© Colombian Spanish, 2021</span>
          <div className="flex items-end lg:items-center justify-between">
            <div className="flex flex-col lg:flex-row">
              <a
                className="lg:mx-4"
                href="https://secretsofspanish.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SecretsOfSpanish.com
              </a>
              <Link href="/about/[pagename]" as="/about/terms-of-use">
                <a className="lg:mx-4">Terms of Use</a>
              </Link>
              <Link href="/about/[pagename]" as="/about/advertise-with-us">
                <a className="lg:mx-4">Advertise with us</a>
              </Link>
              <Link href="/about/[pagename]" as="mailto:admin@colombianspanish.co">
                <a className="lg:mx-4">Contact Us</a>
              </Link>
            </div>
            <ul className="flex lg:ml-8">
              <li className="mx-1">
                <a target="_blank " href="http://facebook.com/colombianspanish">
                  <i className="icon-social w-10 h-10 lg:w-8 lg:h-8 mx-2 icon-facebook" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank " href="http://twitter.com/colombianspan">
                  <i className="icon-social w-10 h-10 lg:w-8 lg:h-8 mx-2 icon-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ColombianSpanishApp
