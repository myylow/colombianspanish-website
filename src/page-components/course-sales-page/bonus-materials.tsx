import * as React from 'react'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import produce from 'immer'

const quotes = [
  {
    quote:
      "A goldmine of Colombian Spanish…genuinely designed to help you integrate more naturally as a 'gringo'",
    caption: 'Anthony',
    isSelected: false,
  },
  {
    quote: `Fantastic for someone trying to take their Spanish fluency to the next level, and even better for someone hoping to practice Spanish in Colombia or with Colombians`,
    caption: 'Andy',
    isSelected: false,
  },
  {
    quote: `A highly detailed and accurate look at Colombian Spanish...highly recommended for any travelers who want to seamlessly blend in with the locals.`,
    caption: 'SeeColombia.travel',
    isSelected: false,
  },
  {
    quote: `If there was ever a perfect resource for Spanish language learners coming to Colombia, [the Colombian Spanish eBook] is it. `,
    caption: 'colombiaimmersion.com',
    isSelected: false,
  },
  {
    quote: `I highly recommend it. You’ll see immediate significant improvements in your ability to speak with native Colombians`,
    caption: 'Jim',
    isSelected: false,
  },
  {
    quote: `I definitely recommend it to anyone who already has a solid base in Spanish and wants to customize their speaking to be truly Colombian.`,
    caption: 'Nik',
    isSelected: false,
  },
  {
    quote: `Witty and interesting, it is a great tool...that will have you sounding less like a dubbed movie and more like a Colombian.`,
    caption: 'MedellinLiving.com',
    isSelected: false,
  },
  {
    quote: 'It is perfect for anyone who wants to understand the popular language in our country.',
    caption: 'Laura',
    isSelected: false,
  },
]

const BonusMaterials = () => {
  const [rotateQuotes, setRotateQuotes] = useState(true)
  const [displayedQuotes, setDisplayedQuotes] = useState(quotes)

  const selectQuote = (selectedIndex: number) => {
    const newQuotes = produce(quotes, (draft) => {
      draft[selectedIndex].isSelected = true
    })
    setDisplayedQuotes(newQuotes)
  }

  const handleDotClick = (index: number) => {
    setRotateQuotes(false)
    selectQuote(index)
  }

  // select the first quote initially
  useEffect(() => {
    selectQuote(0)
  }, [])

  useEffect(() => {
    let selectedQuoteIndex = 0
    const timerId = setInterval(() => {
      // Has the rotation been cancelled in the meantime?
      if (!rotateQuotes) {
        clearInterval(timerId)
      } else {
        selectedQuoteIndex = (selectedQuoteIndex + 1) % 8
        selectQuote(selectedQuoteIndex)
      }
    }, 3500)
  }, [rotateQuotes])

  const quotesJsx = displayedQuotes.map((it) => {
    const selectedClass = it.isSelected ? 'opacity-100' : ''
    return (
      <li
        key={it.caption}
        className={`flex absolute flex-col items-center opacity-0 mx-auto left-0 right-0 transition-opacity duration-1000 ${selectedClass}`}
      >
        <q className="font-light italic text-2xl text-gray-500 max-w-2xl text-center mt-4 mb-2">
          “{it.quote}”
        </q>
        <span className="uppercase text-gray-500 font-semibold">- {it.caption}</span>
      </li>
    )
  })

  const dotsJsx = displayedQuotes.map((it, index) => {
    const selectedClass = it.isSelected ? 'h-5 w-5 opacity-100 cursor-auto' : ''
    return (
      <li
        key={it.caption}
        onClick={() => handleDotClick(index)}
        className={`bg-gray-500 rounded-full h-4 w-4 cursor-pointer opacity-25 ${selectedClass}`}
      ></li>
    )
  })

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
          <div>
            <h4 className="text-center uppercase text-gray-500 font-semibold text-lg">
              What customers say about the Colombian Spanish eBook
            </h4>
            <ul className="relative mb-12 h-28">{quotesJsx}</ul>
            <ul className="flex mx-auto items-center justify-between max-w-sm">{dotsJsx}</ul>
          </div>
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
