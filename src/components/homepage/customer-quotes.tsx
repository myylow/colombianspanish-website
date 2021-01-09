import * as React from 'react'
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

const CustomerQuotes = () => {
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
    <div>
      <h4 className="text-center uppercase text-gray-500 font-semibold text-lg">
        What customers say about the Colombian Spanish eBook
      </h4>
      <ul className="relative mb-12 h-28">{quotesJsx}</ul>
      <ul className="flex mx-auto items-center justify-between max-w-sm">{dotsJsx}</ul>
    </div>
  )
}
export default CustomerQuotes
