import * as React from 'react'
import { useEffect, useState } from 'react'
import { Waypoint } from 'react-waypoint'

declare const bodymovin: {
  loadAnimation: (config: {
    container: HTMLElement | null
    renderer: string
    name: string
    loop: boolean
    autoplay: boolean
    path: string
  }) => {}
}

interface Props {
  isBodymovinLoaded: boolean
}

const CourseFeatures = ({ isBodymovinLoaded }: Props) => {
  const [phoneAnimation, setPhoneAnimation] = useState<any>()

  useEffect(() => {
    if (!isBodymovinLoaded) return
    if (phoneAnimation) return

    let whatsappAnimation = bodymovin.loadAnimation({
      container: document.querySelector('#whatsapp-animation'),
      renderer: 'svg',
      name: 'whatsapp-180108v1',
      loop: false,
      autoplay: false,
      path: '/components/course/whatsapp-animation6/data.json',
    })

    setPhoneAnimation(whatsappAnimation)
  }, [isBodymovinLoaded, phoneAnimation])

  const waypointEntered = () => {
    phoneAnimation.play()
  }

  const handleOverlayClicked = () => {
    var video = (window as any).Wistia.api('sample-lesson-popover')
    video.popover.show()
    video.volume(1)
    video.play()
  }

  return (
    <>
      <div className="course-headline container text-3xl text-gray-600 font-light text-center py-12 px-80 leading-normal">
        A unique course that teaches you the Spanish you&apos;ll need to make friends, have fun,
        date and get the most out of your time in Colombia.
      </div>
      <section className="bg-gray-100 border-t border-b border-gray-300 mb-12">
        <ul className="course-facts flex container px-96 py-4 justify-between">
          <li>
            <div className="data-key">Enrollment status</div>
            <div className="data-value">Enrollment now open</div>
          </li>
          <li>
            <div className="data-key">Prerequisites</div>
            <div className="data-value">Basic beginners Spanish</div>
          </li>
          <li>
            <div className="data-key">Course Preview</div>
            <div className="data-value">
              <span className="cursor-pointer text-red-600" onClick={handleOverlayClicked}>
                View sample lesson
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section className="max-w-3xl mx-auto">
        <h2 className="text-center">The Spanish that’ll win the locals over</h2>
        <div className="flex mt-4 mb-12">
          <div id="whatsapp-animation" className="flex-none w-64" />
          <div className="text-xl text-gray-700 ml-8">
            <p>
              To start understanding and speaking the Spanish that Colombians actually use in their
              everyday conversations, you&apos;ll need to look beyond just your Spanish textbook.
            </p>
            <p>
              On this course, you&apos;ll learn hundreds of the most useful words, phrases and
              expressions commonly heard in Colombia, together with cultural and contextual
              explanations to allow you to understand when exactly to use them. We&apos;ll cover:
            </p>
            {isBodymovinLoaded && (
              <Waypoint onEnter={waypointEntered}>
                <span />
              </Waypoint>
            )}
            <ul className="list-disc ml-4">
              <li className="my-4">
                <b>Sparking up conversation, socializing</b> and keeping awkward silences at bay.
              </li>
              <li className="my-4">
                <b>Going out with friends</b> and chatting on social media.
              </li>
              <li className="my-4">
                <b>Dating and relationships</b> with Colombians.
              </li>
              <li className="my-4">
                <b>Spicing up your speech</b> with popular local sayings, curse words, funny
                expressions and jokes.
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto text-xl text-gray-700">
          <div className="flex">
            <img
              src="/components/course/community.png"
              className="flex-none -top-4 -left-6 relative"
              style={{ width: '68px', height: '68px' }}
            />
            <div>
              <h2>Spanish you can really use</h2>
              <p>
                You&apos;ll learn how to interact confidently in Spanish conversations from an
                engaging and entertaining mix of video lessons, teacher interviews, quizzes and
                study tasks. Focused exclusively on the phrases and expressions that you&apos;ll
                hear when chatting, making friends and going out with Colombians, it&apos;s Spanish
                you can use in conversations straightaway.
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              src="/components/course/calendar.png"
              className="flex-none -top-4 -left-6 relative"
              style={{ width: '68px', height: '68px' }}
            />
            <div>
              <h2>Language success - on your own terms</h2>
              <p>
                You&apos;ll get immediate, unlimited access to all the course materials and bonuses
                to work through entirely at your own pace. You can choose to follow our suggested
                six-week daily study program or set your own schedule - either way, the materials,
                support and instructor interaction you&apos;ll receive will be exactly the same.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseFeatures
