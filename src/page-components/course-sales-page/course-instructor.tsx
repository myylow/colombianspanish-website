import * as React from 'react'
import LanguageTeacherCard from './language-teacher-card'

const CourseInstructor = () => {
  return (
    <>
      {/* about peter */}
      <section className="relative overflow-visible text-center">
        <div
          className="stripe absolute"
          style={{
            backgroundColor: '#f6f6f6',
            left: '-5%',
            width: '115%',
            height: '460px',
            transform: 'rotate(-6deg)',
            top: '125px',
          }}
        />
        <h2 className="max-w-3xl text-center mx-auto mt-8 mb-24">Course Instructor</h2>
        <div className="overlay-box relative bg-white mx-auto max-w-xl mb-12 md:mb-24 rounded-md border border-gray-300 shadow-md px-12 md:px-20 py-8">
          <img src="/components/course/pete-photo.png" className="mx-auto mb-4 -mt-24" />
          <div className="author text-2xl text-center text-gray-600">Peter Low</div>
          <p className="text-xl text-gray-500 leading-relaxed relative">
            <span className="absolute text-gray-600 font-black text-7xl -left-8 -top-4">“</span>
            Hi there! I first arrived in Colombia in 2007, speaking next to no Spanish. Years of
            (painful) study later, and I now work as a professional Spanish translator, journalist
            and online language teacher. I’ll be your guide through the tips and tricks that I wish
            had been available to me earlier in my Spanish-learning journey.
            <span className="absolute text-gray-600 font-black text-7xl -right-8 -bottom-12">
              ”
            </span>
          </p>
        </div>
      </section>

      {/* interviews with teachers */}
      <section className="relative">
        <h2 className="text-center md:my-12">Expert help</h2>
        <p className="container text-center max-w-3xl px-12 text-xl text-gray-600 leading-normal">
          During the course, you’ll also learn from exclusive interviews and video contributions by
          teachers from Colombia’s top language schools in Bogota, Medellin, Cartagena and more.
        </p>
        <ul className="flex mx-auto flex-wrap justify-center mt-20 max-w-3xl">
          <LanguageTeacherCard
            name="Andrea"
            schoolName="Colombia Immersion"
            imgSrc="/components/course/teachers/masked-andrea@2x.png"
          />
          <LanguageTeacherCard
            name="Andres"
            schoolName="Centro Catalina"
            imgSrc="/components/course/teachers/masked-andres@2x.png"
          />
          <LanguageTeacherCard
            name="Eduardo"
            schoolName="Centro Catalina"
            imgSrc="/components/course/teachers/masked-eduardo@2x.png"
          />
          <LanguageTeacherCard
            name="Jesus"
            schoolName="Nueva Lengua"
            imgSrc="/components/course/teachers/masked-jesus@2x.png"
          />
          <LanguageTeacherCard
            name="Lucia"
            schoolName="Nueva Lengua"
            imgSrc="/components/course/teachers/masked-lucia@2x.png"
          />
          <LanguageTeacherCard
            name="Merly"
            schoolName="Colombia Immersion"
            imgSrc="/components/course/teachers/masked-merly@2x.png"
          />
          <LanguageTeacherCard
            name="Violet"
            schoolName="Social Spanish"
            imgSrc="/components/course/teachers/masked-violet@2x.png"
          />
        </ul>
      </section>

      {/* language schools logo */}
      <div className="bg-gray-100 mb-12">
        <ul className="flex flex-col md:flex-row items-center justify-between mx-auto py-4 md:py-8 max-w-4xl">
          <li className="m-0 w-auto my-6 md:my-0">
            <img
              className="max-h-12 filter-grayscale"
              src="/components/course/school-centro-catalina.png"
            />
          </li>
          <li className="m-0 w-auto my-6 md:my-0">
            <img
              className="max-h-12 filter-grayscale"
              src="/components/course/school-colombia-immersion.png"
            />
          </li>
          <li className="m-0 w-auto my-6 md:my-0">
            <img
              className="max-h-12 filter-grayscale"
              src="/components/course/school-nueva-lengua.png"
            />
          </li>
          <li className="m-0 w-auto my-6 md:my-0">
            <img
              className="max-h-12 filter-grayscale"
              src="/components/course/school-social-spanish.png"
            />
          </li>
        </ul>
      </div>
    </>
  )
}

export default CourseInstructor
