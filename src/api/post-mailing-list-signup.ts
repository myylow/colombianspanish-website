import superagent from 'superagent'

const TIMEOUT_CONFIG = { response: 3500, deadline: 3500 }
const MAILING_LIST_SIGNUP_ENDPOINT = process.env.MAILING_LIST_SIGNUP_ENDPOINT ?? ''

const postMailingListSignup = async (email: string, firstName: string) => {
  const requestData = { email, firstName }

  const result = await superagent
    .post(MAILING_LIST_SIGNUP_ENDPOINT)
    .send(requestData)
    .timeout(TIMEOUT_CONFIG)

  return result
}

export default postMailingListSignup
