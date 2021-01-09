import * as React from 'react'
import EmailSignupAd from '../../../components/post/ads/email-signup-ad'

const convertEmailSeriesShortcode = () => {
  const variant = Math.random() <= 0.5 ? 'A' : 'B'

  return variant === 'A' ? (
    <EmailSignupAd
      title="Off to Colombia?"
      imageSrc="/img/travel.svg"
      description={
        <>
          <p>
            Well, you better not leave without first signing up for my FREE email course to the best
            of Colombia&apos;s Spanish and slang.
          </p>
          <p className="mb-0">
            Learn all the coolest lingo that you&apos;ll need to have fun with locals, but which the
            textbooks will never teach you.
          </p>
        </>
      }
    />
  ) : (
    <EmailSignupAd
      title="Looking to turbo charge your Colombian Spanish?"
      imageSrc="/img/rocket.svg"
      description={
        <>
          <p>
            Fast track from dull ‘textbook Spanish’ to sounding like a native with my{' '}
            <b>Colombian Spanish Language Hacks</b> email course.
          </p>
          <p className="mb-0">
            Sign up now for <b>7 days of expert tips</b> that will instantly transform your Spanish!
          </p>
        </>
      }
    />
  )
}

export default convertEmailSeriesShortcode
