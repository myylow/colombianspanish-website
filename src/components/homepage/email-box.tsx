import * as React from 'react'
import NextImage from 'next/image'
import Button from '../design-system/button/button'
import { useState } from 'react'
import postMailingListSignup from '../../api/post-mailing-list-signup'

interface Props {
  accentColor: string
}

const EmailBox = ({ accentColor }: Props) => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [subscribeResult, setSubscribeResult] = useState('ready')
  const [buttonStatus, setButtonStatus] = useState('ready')

  const handleNameChange = (event) => {
    setFirstName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleButtonClick = async (event: React.MouseEvent) => {
    event.preventDefault()

    if (email.trim() === '') {
      setSubscribeResult('no-email')
      return
    }

    if (firstName.trim() === '') {
      setSubscribeResult('no-first-name')
      return
    }

    // Proceed with request

    setButtonStatus('sending')
    setSubscribeResult('ready')

    try {
      await postMailingListSignup(email, firstName)
      setButtonStatus('sent')
      setSubscribeResult('success')
    } catch (error) {
      setButtonStatus('ready')
      try {
        var code = JSON.parse(error.response.text).code
        if (code == 214) {
          setSubscribeResult('already-signedup')
        } else if (code == -100) {
          setSubscribeResult('no-email')
        } else {
          setSubscribeResult('general-error')
        }
      } catch (e) {
        setSubscribeResult('general-error')
      }
    }
  }

  return (
    <aside className="border border-gray-300 rounded-sm text-center relative shadow-lg pt-16 px-8">
      <h4 className="text-xl uppercase font-semibold mb-4" style={{ color: accentColor }}>
        7 day transformation
      </h4>
      <div className="bg-white left-0 right-0 mx-auto flex items-center justify-center absolute h-28 w-28 -top-14">
        <NextImage src="/components/homepage/emailbox-icon@2x.png" width="65" height="65" />
      </div>
      <div className="text-gray-600 text-lg px-4 text-left mb-8">
        Fast track from dull ‘textbook Spanish’ to sounding like a local with the free{' '}
        <b>Colombian Spanish Language Hacks</b> email course.
      </div>
      <form className="text-left mx-auto inline-block">
        <div className="mb-2" style={{ color: accentColor }}>
          Your first name
        </div>
        <input
          className="w-60"
          type="text"
          required
          onChange={handleNameChange}
          name="firstName"
          value={firstName}
        />
        <div className="mt-4 mb-2" style={{ color: accentColor }}>
          Your email
        </div>
        <input
          className="w-60"
          type="email"
          required
          onChange={handleEmailChange}
          name="email"
          value={email}
        />
        <Button
          bgColor="turquoise"
          size="md"
          onClick={handleButtonClick}
          disabled={buttonStatus == 'sending' || buttonStatus == 'sent'}
          className={'block mt-8 ' + buttonStatus}
        >
          {buttonStatus == 'ready' && <span>Send me the course</span>}
          {buttonStatus == 'sending' && <span>Sending...</span>}
          {buttonStatus == 'sent' && <span>✓ Email sent</span>}
        </Button>
        <div
          className={
            'subscribe-result cs-chapter-promo__confirmation ' +
            (subscribeResult == 'success' ? '' : 'hidden')
          }
        >
          Thanks! You&apos;ve subscribed succesfully. Please check your email to find our more.
        </div>
        <div
          className={
            'subscribe-result js-error-already-signedup ' +
            (subscribeResult == 'already-signedup' ? 'fail' : 'hidden')
          }
        >
          Sorry, your email address has already signed up.
        </div>
        <div
          className={
            'subscribe-result js-error-no-email ' +
            (subscribeResult == 'no-email' ? 'fail' : 'hidden')
          }
        >
          Please enter a valid email address.
        </div>
        <div
          className={
            'subscribe-result js-error-no-first-name ' +
            (subscribeResult == 'no-first-name' ? 'fail' : 'hidden')
          }
        >
          Please enter your first name.
        </div>
        <div
          className={
            'subscribe-result js-general-error ' +
            (subscribeResult == 'general-error' ? 'fail' : 'hidden')
          }
        >
          We&apos;re sorry, an error occured. Please try again later.
        </div>
      </form>
    </aside>
  )
}

export default EmailBox
