import * as React from 'react'
import Button from '../../ui-library/button/button'
import Price from '../../ui-library/typography/price'

const paymentUrl =
  'https://sso.teachable.com/secure/150268/checkout/541775/conversational-spanish-for-colombia-self-study'

const whatsIncluded = [
  'Unlimited access to all the learning materials.',
  '20+ exclusive video lessons.',
  'Personalized assignment feedback.',
  'The 230-page <i>Colombian Spanish</i> eBook.',
  '850+ Colombian Spanish flashcards.',
  'Online flashcard learning environment.',
  'Interviews with Colombian teachers.',
  'Daily study tasks and exercises.',
  'Colombian Spanish resource library.',
  'Student-only Facebook group.',
  'Email and community support.',
  'Free updates when new lessons are added.',
]

const GetStartedNow = () => {
  return (
    <section className="relative">
      <div
        className="arrow-left absolute w-1/2 h-96 -top-16"
        style={{
          background: 'linear-gradient(to top right, #fff 0%, #fff 50%, #f5f5f5 50%, #f5f5f5 100%)',
        }}
      />
      <div
        className="arrow-right absolute w-1/2 left-1/2 h-96 -top-16"
        style={{
          background: 'linear-gradient(to top left, #fff 0%, #fff 50%, #f5f5f5 50%, #f5f5f5 100%)',
        }}
      />
      <h2 className="text-center font-light text-4xl relative mb-16">Get started now</h2>
      <div className="mx-auto flex z-10 relative justify-center">
        <div
          className="bg-white border-4 flex flex-col rounded-md border-blue-400 max-w-lg px-8 md:px-12 py-8"
          style={{ boxShadow: '0px 3px 15px 6px rgba(155, 155, 155, 0.35)' }}
          id="full-course-payment-box"
        >
          <h4 className="text-blue-400 uppercase text-center mb-8 font-semibold text-xl border-b pb-6 border-gray-300">
            Conversational Spanish for Colombia Full video course
          </h4>
          <div className="text-blue-500 text-lg"> What&apos;s included?</div>
          <ul className="list-disc">
            {whatsIncluded.map((it, index) => (
              <li key={index} className="text-gray-700 my-2 text-base ml-4">
                <span dangerouslySetInnerHTML={{ __html: it }} />
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-8">
            <Price price={99} />
            <Button bgColor="blue" size="lg" onClick={() => (window.location.href = paymentUrl)}>
              Enroll Now
            </Button>
          </div>
        </div>
      </div>

      {/* Starter kit */}
      <aside className="bg-gray-50 max-w-5xl mx-auto my-16 p-8 md:p-12 rounded-xl border text-gray-600 text-lg">
        <h5 className="uppercase font-semibold text-xl text-gray-700">
          Colombian Spanish Starter Kit
        </h5>
        <p>
          Not quite ready for the full video course yet? The Colombian Spanish Starter Kit includes
          everything you need to get familiar with the Spanish you&apos;ll need to make friends in
          Colombia.
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h6 className="text-xl text-black mb-4">What&apos;s included?</h6>
            <ul className="list-disc pl-8 leading-relaxed">
              <li>
                The 230-page <i>Colombian Spanish</i> eBook.
              </li>
              <li> 850+ Colombian Spanish flashcards.</li>
              <li> Online flashcard learning environment.</li>
              <li> Colombian Spanish resource library.</li>
            </ul>
          </div>
          <div className="flex items-end justify-center mt-8 md:mt-0">
            <Price price={39} />
            <a
              href="https://gum.co/colombianspanishstudykit2?wanted=true"
              className="no-gumroad ml-8"
              data-gumroad-single-product="true"
            >
              <Button bgColor="blue" size="md">
                Buy now
              </Button>
            </a>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default GetStartedNow
