import * as React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'

const CourseSuperheroAd = () => {
  return (
    <div className="bg-gray-100 px-6 md:px-8 py-8 rounded-lg">
      <h2 className="text-center text-2xl font-bold">Become a Colombian Spanish Superhero!</h2>

      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
        <Link href="/course">
          <a className="flex-none max-w-xs">
            <NextImage
              src="https://colombianspanishblog.files.wordpress.com/2016/11/colombian-spanish-from-zero-to-hero-study-aids-speak-naturally-integrating-245.jpg"
              width="384"
              height="292"
            />
          </a>
        </Link>
        <div className="md:ml-8">
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
