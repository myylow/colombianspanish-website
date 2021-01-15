import * as React from 'react'
import NextImage from 'next/image'
import Button from '../../ui-library/button/button'
import { useForm } from 'react-hook-form'
import Input from '../../ui-library/input/input'
import useMailingListSignup, { FormValues } from '../../shared-hooks/use-mailing-list-signup'

interface Props {
  accentColor: string
}

const EmailBox = ({ accentColor }: Props) => {
  const { register, errors, handleSubmit } = useForm<FormValues>()
  const { handleFormSubmit, subscribeResult, buttonStatus } = useMailingListSignup()

  return (
    <aside className="border border-gray-300 rounded-sm text-center relative shadow-lg pt-16 px-4 lg:px-8">
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
      <form className="text-left mx-auto inline-block" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-2" style={{ color: accentColor }}>
          Your first name
        </div>
        <Input
          size="lg"
          type="text"
          name="firstName"
          aria-invalid={errors.firstName ? 'true' : 'false'}
          errorMsg={errors.firstName && 'Please enter your first name.'}
          ref={register({
            required: true,
            validate: (v: string) => v.trim() !== '',
            setValueAs: (v: string) => v.trim(),
          })}
        />
        <div className="mt-4 mb-2" style={{ color: accentColor }}>
          Your email
        </div>
        <Input
          size="lg"
          type="email"
          name="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          errorMsg={errors.email && 'Please enter a valid email address.'}
          ref={register({
            required: true,
            validate: (v: string) => v.trim() !== '',
            setValueAs: (v: string) => v.trim(),
          })}
        />

        <div className="text-center">
          <Button
            bgColor="turquoise"
            size="md"
            disabled={buttonStatus === 'sending' || buttonStatus === 'sent'}
            className={'my-8'}
          >
            {buttonStatus === 'ready' && <span>Send me the course</span>}
            {buttonStatus === 'sending' && <span>Sending...</span>}
            {buttonStatus === 'sent' && <span>✓ Email sent</span>}
          </Button>
        </div>
      </form>
      {subscribeResult === 'success' && (
        <div className="mb-8 text-green-600">
          Thanks! You've subscribed succesfully. <br />
          Please check your email to find out more.
        </div>
      )}
      {subscribeResult === 'already-signedup' && (
        <div className="mb-8 text-red-600">Sorry, your email address has already signed up.</div>
      )}
      {subscribeResult === 'general-error' && (
        <div className="mb-8 text-red-600">
          We're sorry, an error occured. Please try again later.
        </div>
      )}
    </aside>
  )
}

export default EmailBox
