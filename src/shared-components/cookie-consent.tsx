import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import nookies from 'nookies'
import Button from '../ui-library/button/button'

const COOKIE_NAME = 'CS_COOKIE_CONSENT'
const MAX_AGE = 31536000

const CookieConsent = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false)

  useEffect(() => {
    const cookies = nookies.get({})
    const cookieConsent = cookies[COOKIE_NAME]

    // If there is no existing cookie, we need to show the consent banner
    if (!cookieConsent) {
      setShowCookieConsent(true)
    }
  }, [])

  const setConsentCookie = () => {
    nookies.set({}, COOKIE_NAME, 'true', { maxAge: MAX_AGE })
    setShowCookieConsent(false)
  }

  return showCookieConsent ? (
    <div className="fixed bg-gray-100 max-w-sm p-4 mx-auto  right-4 bottom-4 flex flex-col shadow-xl border-b border-2 z-10">
      <div>
        By using our site, you understand that we use cookies to improve your experience and collect
        analytics data. Learn more in our{' '}
        <Link href="/about/terms-of-use">
          <a>Privacy Policy</a>
        </Link>
        .
      </div>
      <div className="text-center mt-4">
        <Button size="sm" bgColor="turquoise" onClick={setConsentCookie}>
          Agree
        </Button>
      </div>
    </div>
  ) : null
}

export default CookieConsent
