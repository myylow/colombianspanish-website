# Colombian Spanish website


As a marketing site, we were focused on performance and making it run as fast as possible. It has near-perfect Lighthouse scores and instant transitions from one page to another.

## Performance

 - Runs on the latest version of next.js (10.0.3), and uses the static site generation features to pull content from a Wordpress JSON API at build-time.
 - Next.js has built-in code-splitting, so each page only loads what it needs. On top of that, where possible we defer loading external resources until they are needed.
 - Styling is done using Tailwind CSS, with a build-step to purge unused CSS. This results in a runtime CSS file of around 10KB being generated, and no effect to the JS bundle size. 
 - Using hash-based immutabable URLs for all static assests, and caching them for as long as possible (both on the CDN and in browser). 
 - I also configure the Cloudflare CDN edge server to cache the server-rendered HTML, which makes the initial page load very fast. When a deployment is completed, a webhook clears runs to clear the stale pages from the cache.
 - Images are optimized based on user's device type and capabilities, for instance serving WebP instead of jpg where possible. 
 - No unecessary libraries. As a static marketing, it does not need `redux`, `lodash`, `axios` and so on which helps to keep the bundle size small.
 - IE is not supported and unncessary polyfills and prefixes can be removed.

## Code Quality:

 - Every PR merged into master triggers a run of tests, and automatic production deployment if they pass.
 - It is fully written in Typescript using strict mode and additional ESLint "no-any" plugin.