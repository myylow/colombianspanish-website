import * as React from 'react'
import NextImage from 'next/image'

interface Props {
  title: string
  imageSrc: string
  description: React.ReactNode
}

const EmailSignupAd = ({ title, description, imageSrc }: Props) => {
  return (
    <section className="flex items-center bg-gray-100 border-gray-500 py-12 px-12 text-md my-8 rounded-sm">
      <div className="flex flex-col">
        <NextImage src={imageSrc} width="140" height="140" className="self-center" />

        <form className="mt-4">
          <input
            className="my-1"
            required
            type="text"
            name="firstname"
            placeholder="Your first name"
          />
          <input className="my-1" required type="email" name="email" placeholder="Your email" />
          <div className="cs-chapter-promo__confirmation hidden">
            Thanks! You&apos;ve subscribed succesfully. Please check your email to find our more.
          </div>
          <div className="hidden">Sorry, your email address has already signed up.</div>
          <div className="js-error-no-email hidden">Please enter your email address.</div>
          <div className="js-general-error hidden">
            We&apos;re sorry, an error occured. Please try again later.
          </div>
        </form>
        <button className="bg-green-600 text-white text-base px-6 py-2 mt-4 rounded-sm self-center">
          Send me the course
        </button>
      </div>
      <div className="ml-12">
        <h2 className="text-green-600 font-bold text-2xl"> {title}</h2>
        {description}
      </div>
    </section>
  )
}

export default EmailSignupAd
