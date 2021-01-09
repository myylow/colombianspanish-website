import * as React from 'react'
import CustomerQuotes from '../homepage/customer-quotes'
import NextImage from 'next/image'

const BonusMaterials = () => {
  return (
    <>
      <section>
        <h2 className="text-center">Bonus materials to boost your learning</h2>
        <div className="flex max-w-3xl mx-auto mt-12 items-center justify-items-center">
          <div>
            <NextImage src="/components/course/ebook.png" width={360} height={227} />
          </div>
          <div className="ml-12 max-w-sm">
            <h3 className="text-xl">
              The 230-page <i>Colombian Spanish</i> eBook
            </h3>
            <p className="text-xl text-gray-700">
              The perfect companion to the video course, this eBook contains everything I&apos;ve
              learnt from years of living in Colombia. It&apos;s ten chapters full of the Spanish
              really spoken there, including extensive notes and explanations to help you make sense
              of it all.
            </p>
            <div className="text-sm text-gray-500">
              Comes in ePub, Amazon Kindle and PDF formats.
            </div>
          </div>
        </div>
        <div className="quote my-12 bg-gray-100 py-8">
          <CustomerQuotes />
        </div>
        <div className="max-w-3xl mx-auto flex flex-row-reverse items-center">
          <img src="/components/course/flashcards.png" className="img" />
          <div className="pr-20">
            <h3 className="text-xl">More than 850 printable flashcards</h3>
            <p className="text-lg text-gray-700">
              These ready-made flashcards will help you commit to memory all the new terms and
              phrases you’ll be learning throughout the course. Print them out at your convenience,
              or use our online flashcard learning environment with games, quizzes and sound files
              all built in.
            </p>
          </div>
        </div>
        <div className="text-center my-16 text-blue-500 text-2xl">
          The eBook and flashcards are provided free to all course students
        </div>
      </section>
      <section
        className="mb-16 bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/components/course/support-background.png')" }}
      >
        <div className="overlay-bodx max-w-2xl text-lg text-gray-700 mx-auto bg-white rounded-sm px-16 py-12 border border-gray-300 shadow-lg">
          <h2 className="text-center">With you every step of the way</h2>
          <p>
            I’m here to help at any time for your questions during the course, whether about
            learning Colombian Spanish or near enough anything about life as a foreigner in
            Colombia.
          </p>
          <ul className="support">
            <li className="pl-20 my-8 support-icon support-email">
              You can always get in touch with me by email, or in the comments section of the course
              lessons.
            </li>
            <li className="pl-20 my-8 support-icon support-feedback">
              I'll give you <b>personalized feedback</b> on quizzes and exercises that you complete
              as part of the course.
            </li>
            <li className="pl-20 mt-8 support-icon support-social">
              You&apos;ll have priority access to expert and community learning support via a closed
              Facebook group.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default BonusMaterials
