import * as React from 'react'
import * as HtmlToReact from 'html-to-react'
import convertBeforeYouGoShortcode from './shortcode-convertors/before-you-go-convertor'
import convertConversationShortcode from './shortcode-convertors/conversation-convertor'
import convertEmailSeriesShortcode from './shortcode-convertors/email-series-convertor'
import convertQuizletShortcode from './shortcode-convertors/quizlet-convertor'
import convertSchoolShortcode from './shortcode-convertors/school-convertor'
import convertSchoolsPagesShortcode from './shortcode-convertors/school-pages-convertor'

interface HtmlNode {
  type: string
  name: string
  data: string
  attribs: Record<string, string>
  parent: HtmlNode | null
  prev: HtmlNode | null
  next: HtmlNode | null
  startIndex: number | null
  endIndex: number | null
  children: HtmlNode[]
}

const convertShortcodeToComponent = (shortcode: string) => {
  if (shortcode.match(/\[conversation.*?\]/)) return convertConversationShortcode(shortcode)
  if (shortcode.match(/\[before-you-go.*?\]/)) return convertBeforeYouGoShortcode()
  if (shortcode.match(/\[email-series-ad.*?\]/)) return convertEmailSeriesShortcode()
  if (shortcode.match(/\[quizlet .*?\]/)) return convertQuizletShortcode(shortcode)
  if (shortcode.match(/\[schools-pages.*?\]/)) return convertSchoolsPagesShortcode()
  if (shortcode.match(/\[school .*?\]/)) return convertSchoolShortcode(shortcode)

  throw new Error(`${shortcode} could not be converted to JSX`)
}

// Rewrite blog links to the correct URL, and to use next.js routing
const convertATagToComponent = (node: HtmlNode) => {
  // Remove hardcoded domain links that Wordpress can add it
  let href = node.attribs.href
  href = href.replace(/^https:\/\/colombianspanish.co/, '')

  const text = node.children[0].data
  const isBlogLink =
    href !== '/' &&
    href !== '/course' &&
    href.startsWith('/') &&
    !href.startsWith('/blog') &&
    !href.startsWith('/about') &&
    !href.startsWith('/meta')

  if (isBlogLink) {
    const blogHref = `/blog${href}`
    return <a href={blogHref}>{text}</a>
  }

  return <a href={href}>{text}</a>
}

/**
 * Content from Wordpress comes out as a long string of HTML, but we'd also like to be able
 * to use React components inside of it to add richness to the content.
 * To do this, we can hijack Wordpress's shortcode feature which turns text like [video='https://...']
 * into a functional component.
 *
 */
export const convertWpHtmlToJsx = (content: string) => {
  // First we need to convert [shortcode...] tags into <shortcode>...</shortcode>
  // equivalents. This prepares them to be found by the HTML parser.
  content = content.replace(/(\[conversation.*?\])/gi, '<shortcode>$1</shortcode>')
  content = content.replace(/(\[before-you-go.*?\])/gi, '<shortcode>$1</shortcode>')
  content = content.replace(/(\[email-series-ad.*?\])/gi, '<shortcode>$1</shortcode>')
  content = content.replace(/(\[quizlet .*?\])/gi, '<shortcode>$1</shortcode>')
  content = content.replace(/(\[schools-pages.*?\])/gi, '<shortcode>$1</shortcode>')
  content = content.replace(/(\[school .*?\])/gi, '<shortcode>$1</shortcode>')

  // add classes to h2 and h3
  content = content.replace(
    /<q>/g,
    '<q className="block text-red-600 text-right float-right max-w-xs my-8 mx-4 text-3xl font-light first-letter-uppercase">'
  )

  var htmlToReactParser = new HtmlToReact.Parser()
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions()
  var reactElement = htmlToReactParser.parseWithInstructions(content, () => true, [
    {
      replaceChildren: false,
      shouldProcessNode: () => true,
      processNode: (node: HtmlNode, children: JSX.Element, index: number) => {
        if (node.name === 'shortcode') {
          return convertShortcodeToComponent(node.children[0].data)
        } else if (node.name === 'a' && node.attribs.href) {
          return convertATagToComponent(node)
        }
        return processNodeDefinitions.processDefaultNode(node, children, index)
      },
    },
  ])

  return reactElement
}
