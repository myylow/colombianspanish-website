import * as React from 'react'
import Conversation, {
  ConversationPerson,
} from '../../page-components/blog-post-page/conversation-speaker'

const convertConversationShortcode = (shortcode: string) => {
  // [conversation]
  const shortcodeData = shortcode.match(/\[conversation (.*?)\]/)
  if (!shortcodeData) return null

  var parameters = shortcodeData[1].split('|')
  var side = ''
  var color = ''
  var person = ''
  var tts = ''
  var text = ''
  parameters.forEach((it) => {
    var data = it.split('=')
    var key = data[0].trim()
    var value = data[1].trim()
    if (key === 'side') side = value
    if (key === 'color') color = value
    if (key === 'person') person = value
    if (key === 'tts') tts = value
    if (key === 'text') text = value
  })
  var audio = tts.length ? `https://s3.amazonaws.com/audio.colombianspanish.co/${tts}` : ''

  return (
    <Conversation
      color={color}
      person={person as ConversationPerson}
      side={side}
      text={text}
      tts={tts}
      audio={audio}
    />
  )
}

export default convertConversationShortcode
