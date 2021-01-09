import * as React from 'react'
import Head from 'next/head'
import VideoOverlay from '../components/course-sales-page/video-overlay'
import CourseFeatures from '../components/course-sales-page/course-features'
import CourseInstructor from '../components/course-sales-page/course-instructor'
import BonusMaterials from '../components/course-sales-page/bonus-materials'
import CourseSyllabus from '../components/course-sales-page/course-syllabus'
import GetStartedNow from '../components/course-sales-page/get-started-now'
import Faq from '../components/course-sales-page/faq'
import CourseHeader from '../components/layout/header'
import { useEffect, useState } from 'react'
import Button from '../components/design-system/button/button'

const Course = () => {
  const [isBodymovinLoaded, setIsBodymovinLoaded] = useState(false)

  useEffect(() => {
    const tidioScript = document.createElement('script')
    tidioScript.src = '//code.tidio.co/k0iau8pz7wy3r5akusmcyzjrht7uaz6s.js'
    tidioScript.async = true
    document.body.appendChild(tidioScript)
  }, [])

  useEffect(() => {
    // Add gumroad
    const gumroadScript = document.createElement('script')
    gumroadScript.src = 'https://gumroad.com/js/gumroad.js'
    gumroadScript.async = true
    document.body.appendChild(gumroadScript)
  }, [])

  useEffect(() => {
    // Add bodymovin
    const bodymovinScript = document.createElement('script')
    bodymovinScript.src = '/js/bodymovin.min.js'
    bodymovinScript.async = true
    bodymovinScript.onload = () => {
      setIsBodymovinLoaded(true)
    }
    document.body.appendChild(bodymovinScript)
  }, [])

  const scrollToPaymentBox = () => {
    const el = document.querySelector('#full-course-payment-box')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <title>The Spanish that&apos;ll win Colombians over - an exclusive video course</title>

        <meta itemProp="url" content={`${process.env.PRODUCTION_DOMAIN}/course`} />
        <meta
          name="description"
          content="A unique six-week course on the Spanish to make friends, have fun, date and get the most out of your time in Colombia."
        />

        {/*Facebook */}

        <meta property="og:url" content={`${process.env.PRODUCTION_DOMAIN}/course`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Spanish that'll win Colombians over" />
        <meta
          property="og:description"
          content="A unique six-week course on the Spanish to make friends, have fun, date and get the most out of your time in Colombia."
        />
        <meta property="og:site_name" content="Colombian Spanish" />
        <meta
          property="og:image"
          content={`${process.env.PRODUCTION_DOMAIN}/static/components/course/video-placeholder.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`${process.env.PRODUCTION_DOMAIN}/static/components/course/video-placeholder.jpg`}
        />
        <meta property="og:image:width" content="990" />
        <meta property="og:image:height" content="557" />

        {/*Twitter */}

        <meta name="twitter:title" content="The Spanish that'll win Colombians over" />
        <meta name="twitter:url" content={`${process.env.PRODUCTION_DOMAIN}/course`} />
        <meta
          name="twitter:description"
          content="A unique six-week course on the Spanish to make friends, have fun, date and get the most out of your time in Colombia."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:src"
          content={`${process.env.PRODUCTION_DOMAIN}/static/components/course/video-placeholder.jpg`}
        />
      </Head>
      <main className="overflow-hidden">
        <CourseHeader buttonColor="outline" />
        <VideoOverlay scrollToPaymentBox={scrollToPaymentBox} />
        <CourseFeatures isBodymovinLoaded={isBodymovinLoaded} />
        <CourseInstructor />
        <BonusMaterials />
        <CourseSyllabus />
        <GetStartedNow />
        <Faq />

        {/* page footer  */}
        <section className="text-center my-16">
          <h2 className="m-8">Ready to transform your Colombian Spanish?</h2>
          <Button bgColor="red" size="xl" onClick={scrollToPaymentBox}>
            Get started now
          </Button>
        </section>
      </main>
    </>
  )
}

export default Course
