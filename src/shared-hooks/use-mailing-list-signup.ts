import { useState } from 'react'
import postMailingListSignup from '../http/post-mailing-list-signup'

type SubscribeResult = 'ready' | 'success' | 'already-signedup' | 'general-error'

export interface FormValues {
  email: string
  firstName: string
}

const useMailingListSignup = () => {
  const [subscribeResult, setSubscribeResult] = useState<SubscribeResult>('ready')
  const [buttonStatus, setButtonStatus] = useState('ready')

  const handleFormSubmit = async (formValues: FormValues) => {
    const { email, firstName } = formValues

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
        if (code === 214) {
          setSubscribeResult('already-signedup')
        } else {
          setSubscribeResult('general-error')
        }
      } catch (e) {
        setSubscribeResult('general-error')
      }
    }
  }

  return { handleFormSubmit, subscribeResult, buttonStatus }
}

export default useMailingListSignup
