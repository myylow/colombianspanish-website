import * as React from 'react'

const convertQuizletShortcode = (shortcode: string) => {
  const shortcodeData = shortcode.match(/\[quizlet (.*?)\]/)
  if (!shortcodeData) return null

  var parameters = shortcodeData[1].split('|')
  var id = ''
  parameters.forEach((it) => {
    var data = it.split('=')
    var key = data[0].trim()
    var value = data[1].trim()
    if (key === 'name') id = value
  })

  return (
    <iframe
      src={`https://quizlet.com/${id}/match/embed`}
      height="500"
      width="100%"
      style={{ border: 0 }}
    />
  )
}

export default convertQuizletShortcode
