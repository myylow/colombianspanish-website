import * as React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'

const CourseSuperheroAd = () => {
  return (
    <div className="bg-gray-100 py-12 px-8 mb-4 rounded-lg">
      <h2 className="text-center text-2xl mb-8 font-bold">Become a Colombian Spanish Superhero!</h2>

      <div className="flex items-center">
        <Link href="/course">
          <a>
            <NextImage
              src="https://colombianspanishblog.files.wordpress.com/2016/11/colombian-spanish-from-zero-to-hero-study-aids-speak-naturally-integrating-245.jpg"
              width="384"
              height="292"
            />
          </a>
        </Link>
        <div className="flex-1 ml-8">
          <p>
            Gain the superpowers of <b>charm</b> and <b>charisma</b> when speaking Spanish.
          </p>
          <p>
            Sign up for the
            <Link href="/course">
              <a> Colombian Spanish video course </a>
            </Link>
            today to transform your language skills from ordinary to extraordinary.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourseSuperheroAd
