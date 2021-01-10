import * as React from 'react'
import NextImage from 'next/image'

interface Props {
  accentColor: string
}

const FacebookBox = ({ accentColor }: Props) => {
  return (
    <a
      href="https://www.facebook.com/groups/learnspanishcolombia/"
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-300 rounded-md text-center relative shadow-lg py-16 px-8"
    >
      <h4 className="text-xl uppercase font-semibold mb-8" style={{ color: accentColor }}>
        Join our community
      </h4>
      <div className="bg-white left-0 right-0 mx-auto flex items-center justify-center absolute h-28 w-28 -top-14">
        <NextImage src="/components/homepage/facebookbox-icon@2x.png" width="65" height="65" />
      </div>
      <div className="description text-lg text-left px-4 text-gray-600">
        <p>
          Everything’s easier with friends. Get help with your learning by joining the 750+ other
          Colombian Spanish enthusiasts in our Facebook community.
        </p>
        <p>
          It&apos;s a great place to get quick answers to your Colombian Spanish questions, to get a
          range of opinions and ideas about where best to study, and to share your favorite tips and
          tricks for learning Colombian Spanish. We look forward to welcoming you!
        </p>
      </div>
    </a>
  )
}

export default FacebookBox
