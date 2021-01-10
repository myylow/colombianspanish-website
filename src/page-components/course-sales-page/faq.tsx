import * as React from 'react'

const Faq = () => {
  return (
    <section className="rounded-3xl bg-gray-100 px-28 py-16 text-xl leading-8 container max-w-5xl text-gray-700">
      <h2 className="text-center">Course FAQ</h2>
      <ul>
        <li className="my-12">
          <div className="faq-question">
            I've never studied any Spanish before. Is this course for me?
          </div>
          <div>
            This course is aimed primarily at people who already know at least the basics of Spanish
            and works best as a complement to traditional learning resources, such as textbooks,
            language apps and/or classes. We won't cover Spanish grammar in any depth here, so if
            you know literally no Spanish then you're probably not quite ready to enroll. That said,
            detailed explanations and translations of all the terms covered in the course are
            provided, so you need not know much of the language to benefit from the material. And
            with unlimited access to all the videos, exercises, interviews and quizzes in the
            course, you'll be able to keep revisiting the content to gain a better understanding of
            the language's nuances as your Spanish continues to improve.
          </div>
        </li>
        <li className="my-12">
          <div className="faq-question">
            Why should I learn Spanish from a foreigner? Wouldn’t a native speaker be able to teach
            me better?
          </div>
          <div>
            Local teachers are often fantastic, and that's why I've drafted in a whole bunch to help
            explain many of the terms in this course. Oddly enough, though, native speakers are at a
            bit of a disadvantage when it comes to creating a course of this kind -- which aims to
            bridge the gap between the Spanish taught in the classroom and the sort you’ll actually
            need when talking to Colombians. A foreigner, who has already battled his way through to
            Spanish fluency in Colombia, is probably better placed to advise others on how to do the
            same. Between the Colombians' contributions and my own, my aim is to give you the best
            of both worlds. That is, exposure to the local accent and native speech on the one hand
            and, on the other, guidance from a foreigner about what parts of the language are most
            useful and the most likely to get a positive reaction from the locals.
          </div>
        </li>
        <li className="my-12">
          <div className="faq-question">Is this just a course on Colombian slang?</div>
          <div>
            We cover plenty of slang, but the scope of this course is much wider than that. You'll
            learn many other aspects of becoming conversational in Spanish (such as idioms for
            socialising, conversation filler words, sentence starters and other language tricks)
            which are as applicable to the Spanish spoken both within and beyond Colombia's borders.
            By the end of the course, you’ll be speaking more natural Spanish in general – be that
            in Colombia or anywhere else in the Spanish speaking world
          </div>
        </li>
        <li className="my-12">
          <div className="faq-question">
            Is ‘Colombian Spanish’ really that different from standard Spanish?
          </div>
          <div>
            Colombia’s version of Spanish is, of course, not a separate language from that spoken
            elsewhere in Latin American and Europe. However, it does contain a good deal of local
            variations and quirks that you'll absolutely need to understand if you want to gain
            access into the inner circle of Colombian friendship groups.
          </div>
        </li>
        <li className="my-12">
          <div className="faq-question">What if I am unhappy with the course?</div>
          <div>
            I believe that any Spanish learner who plans on having more than a fleeting interaction
            with Colombians should sign up for the course as there’s loads of great stuff in here
            that will definitely make your conversations much more enjoyable. But if, for whatever
            reason, you later find that the course is not right for you, then never fear. Just write
            to me within 30 days of your purchase and I’ll give you a full refund right there and
            then.
          </div>
        </li>
        <li className="mt-12">
          <div className="faq-question">When does the course start and finish?</div>
          <div>
            When you sign up, you’ll gain immediate access to all the course materials, which you
            can access for as long as you like. During the first six weeks of the course, you’ll
            receive daily study tasks to complete. You can choose to follow the six-week course
            schedule or, if you prefer, work through the content entirely at your own pace. It’s
            totally up to you.
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Faq
