# Colombian Spanish website

This is the code of the colombianspanish.co website, a combination blog and marketing site for our Colombian Spanish course. It's written using Next.js v10, React 17 and Typescript. The blog content is hosted on WordPress.com, and we include it here using the WordPress REST API. 

## Performance

We've focused heavily on performance and making the site run as fast as possible. 

 - Uses the static site generation features of next.js to pull the blog content and create static HTML pages from it. These then have a very fast server reponse time. 
 - Styling and responsive design is done using Tailwind CSS, with a build-step to purge unused CSS. This results in a runtime CSS file of around 10KB being generated, and no effect to the JS bundle size. 
 - Using the Next.js Image component to optimize and resize images based on user's device type and capabilities, for instance serving WebP instead of jpg where possible. 
 - Hosting on Vercel and utilising the CDN edge caching of the static assets and server-rendered HTML.
 - IE is not supported and unncessary polyfills and prefixes can be removed.
 - Removing unecessary libraries in order to keep the bundle size small. 