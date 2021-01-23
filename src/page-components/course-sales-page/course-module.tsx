import * as React from 'react'
import { useEffect } from 'react'

interface Lesson {
  type: 'lesson-video' | 'lesson-quiz' | 'lesson-text'
  name: string
}

interface Props {
  moduleNumber: number
  title: string
  intro: React.ReactNode
  accentColor: string
  lessons: Lesson[]
  sampleLesson?: any
  hasTimeline?: boolean
}

const TIMELINE_LEFT_OFFSET = '-69px'
const TIMELINE_HEIGHT_OFFSET = '50px'

const CourseModule = ({
  moduleNumber,
  title,
  intro,
  accentColor,
  lessons,
  sampleLesson,
  hasTimeline = true,
}: Props) => {
  useEffect(() => {
    ;(window as any)._wq = (window as any)._wq || []
    ;(window as any)._wq.push({
      id: 'sample-lesson-popover',
      options: {
        videoFoam: true,
        popover: true,
        popoverContent: 'html',
        controlsVisibleOnLoad: false,
        qualityMin: 540,
        volume: 1,
      },
    })
  }, [])

  return (
    <section>
      <div className="bg-white border rounded-md shadow relative max-w-3xl mx-auto px-4 md:px-10 py-8 text-gray-700">
        <span
          className="module-number absolute top-0 text-3xl font-black rounded-3xl text-center px-4 bg-white z-10 leading-relaxed"
          style={{ left: '-90px', boxShadow: '0 0 3px 5px ' + accentColor, color: accentColor }}
        >
          {moduleNumber}
        </span>
        {hasTimeline && (
          <span
            className={'absolute top-4 w-2 bg-gray-300 bg-opacity-80 '}
            style={{ left: TIMELINE_LEFT_OFFSET, height: `calc(100% + ${TIMELINE_HEIGHT_OFFSET})` }}
          />
        )}
        <span
          className="px-6 md:px-8 py-2 uppercase text-white font-bold absolute top-0 left-0 w-full md:w-auto md:rounded-br-2xl text-center md:text-left"
          style={{ backgroundColor: accentColor }}
        >
          {title}
        </span>
        <p className="text-lg">{intro}</p>

        <div className="border-t border-gray-300">
          <div className="uppercase my-6 text-gray-400 font-semibold">Module Details</div>
          <ul className="flex flex-col md:flex-row flex-wrap">
            {lessons.map((lesson) => (
              <li key={lesson.name} className="md:w-1/2">
                <div
                  className={`py-2 pl-10 pr-2 text-blue-500 lesson-icon leading-snug ${lesson.type}`}
                >
                  {lesson.name}
                </div>
              </li>
            ))}
          </ul>

          {sampleLesson && (
            <div>
              <div className="uppercase my-6 text-gray-400 font-semibold">Sample lesson</div>
              <div
                id="sample-lesson-popover"
                className="wistia_embed wistia_async_qim2bekobz"
                style={{ display: 'inlineBlock', whiteSpace: 'nowrap' }}
              >
                <button
                  className="text-white uppercase font-bold py-2 px-16"
                  style={{ backgroundColor: accentColor }}
                >
                  Click to watch
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CourseModule
