import * as React from 'react'
import NextImage from 'next/image'
import Input from '../../../ui-library/input/input'
import Button from '../../../ui-library/button/button'
import { useForm } from 'react-hook-form'
import useMailingListSignup, { FormValues } from '../../../shared-hooks/use-mailing-list-signup'

interface Props {
  title: string
  imageSrc: string
  description: React.ReactNode
}

const EmailSignupAd = ({ title, description, imageSrc }: Props) => {
  const { handleFormSubmit, subscribeResult, buttonStatus } = useMailingListSignup()

  const { register, errors, handleSubmit } = useForm<FormValues>()

  return (
    <section className="flex flex-col-reverse md:flex-row items-center bg-gray-100 border-gray-500 py-6 md:py-8 px-6 md:px-8 text-md my-8 rounded-md">
      <div className="flex flex-col w-72">
        <NextImage src={imageSrc} width="140" height="140" />

        <form className="mt-2 text-center" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="my-4">
            <Input
              name="firstName"
              type="text"
              size="md"
              placeholder="Your first name"
              aria-invalid={errors.firstName ? 'true' : 'false'}
              errorMsg={errors.firstName && 'Please enter your first name.'}
              ref={register({
                required: true,
                validate: (v: string) => v.trim() !== '',
                setValueAs: (v: string) => v.trim(),
              })}
            />
          </div>
          <div className="my-4">
            <Input
              name="email"
              type="email"
              size="md"
              placeholder="Your email"
              aria-invalid={errors.email ? 'true' : 'false'}
              errorMsg={errors.email && 'Please enter a valid email address.'}
              ref={register({
                required: true,
                validate: (v: string) => v.trim() !== '',
                setValueAs: (v: string) => v.trim(),
              })}
            />
          </div>

          <Button
            bgColor="turquoise"
            size="sm"
            disabled={buttonStatus === 'sending' || buttonStatus === 'sent'}
            className={'mt-4'}
          >
            {buttonStatus === 'ready' && <span>Send me the course</span>}
            {buttonStatus === 'sending' && <span>Sending...</span>}
            {buttonStatus === 'sent' && <span>✓ Email sent</span>}
          </Button>
        </form>

        {subscribeResult === 'success' && (
          <div className="mt-8 text-center text-base text-green-600">
            Thanks! You've subscribed successfully. <br />
            Please check your email to find out more.
          </div>
        )}
        {subscribeResult === 'already-signedup' && (
          <div className="mt-8 text-center text-base text-red-600">
            Sorry, your email address has already signed up.
          </div>
        )}
        {subscribeResult === 'general-error' && (
          <div className="mt-8 text-center text-base text-red-600">
            We're sorry, an error occured. Please try again later.
          </div>
        )}
      </div>
      <div className="mb-6 md:mb-0 md:ml-12 flex-1">
        <h2 className="text-green-600 font-bold text-2xl"> {title}</h2>
        <div className="text-lg">{description}</div>
      </div>
    </section>
  )
}

export default EmailSignupAd
