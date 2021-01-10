import * as React from 'react'
import SchoolCard from '../../page-components/blog-post-page/school-card'

const convertSchoolShortcode = (shortcode: string) => {
  const shortcodeData = shortcode.match(/\[school (.*?)\]/)
  if (!shortcodeData) return null

  var parameters = shortcodeData[1].split('|')
  var name = ''
  var quote = ''
  var email = ''
  var website = ''
  var facebook = ''
  parameters.forEach((it) => {
    var data = it.split('=')
    var key = data[0].trim()
    var value = data[1].trim()
    if (key === 'name') name = value
    if (key === 'quote') quote = value
    if (key === 'email') email = value
    if (key === 'website') website = value
    if (key === 'facebook') facebook = value
  })

  return (
    <SchoolCard name={name} email={email} website={website} facebook={facebook} quote={quote} />
  )
}

export default convertSchoolShortcode
