import superagent from 'superagent'
import { NextApiRequest } from 'next'

const GUMROAD_TOKEN = process.env.GUMROAD_TOKEN ?? ''
const GUMROAD_SELLER_ID = process.env.GUMROAD_SELLER_ID ?? ''

const EBOOK_GUMROAD_ID = process.env.EBOOK_GUMROAD_ID ?? ''
const EBOOK_CUSTOM_DELIVERY_ID = process.env.EBOOK_CUSTOM_DELIVERY_ID ?? ''
const STUDYKIT_GUMROAD_ID = process.env.STUDYKIT_GUMROAD_ID ?? ''

const EBOOK_MAILING_LIST_ID = process.env.EBOOK_MAILING_LIST_ID ?? ''
const STUDYKIT_MAILING_LIST_ID = process.env.STUDYKIT_MAILING_LIST_ID ?? ''
const MAILING_LIST_DOMAIN = process.env.MAILING_LIST_DOMAIN ?? ''

const getMailingListId = (productId: string) => {
  switch (productId) {
    case EBOOK_GUMROAD_ID:
    case EBOOK_CUSTOM_DELIVERY_ID:
      return EBOOK_MAILING_LIST_ID

    case STUDYKIT_GUMROAD_ID:
      return STUDYKIT_MAILING_LIST_ID

    default:
      return undefined
  }
}

const handleGumroadPing = async (req: NextApiRequest) => {
  const { token } = req.query
  const { seller_id, product_id, email } = req.body

  // Verify the ping actually comes from Gumroad by validating both
  // the seller id and secret token
  if (token !== GUMROAD_TOKEN) {
    throw new Error('Token mismatch')
  }
  if (seller_id !== GUMROAD_SELLER_ID) {
    throw new Error('Seller id mismatch')
  }

  const mailingListId = getMailingListId(product_id)

  // If adding succeds, get all emails for this event
  await superagent.post(`${MAILING_LIST_DOMAIN}/${mailingListId}/subscriber`).send({ email })

  return { status: 'OK' }
}

export default handleGumroadPing
