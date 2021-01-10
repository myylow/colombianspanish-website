import * as React from 'react'
import CourseModule from './course-module'

const CourseLessons = () => {
  return (
    <div
      className="background-gradient"
      style={{ backgroundImage: 'linear-gradient(-178deg, #ffffff 0%, #f5f5f5 88%)' }}
    >
      <h2 className="text-center">
        Learn the Spanish your textbook <i>didn&apos;t</i> teach you
      </h2>
      <p className="max-w-2xl mx-auto text-xl leading-8 text-gray-600 text-center mt-12 mb-16">
        In six wide-ranging study modules, you&apos;ll learn the essential Spanish that you’ll need
        when interacting with Colombians in a wide variety of common situations. After completing
        the course, you’ll be able to speak in a more natural and entertaining way, and participate
        much more easily in local conversations. As an added bonus, you’ll also gain a much better
        understanding of Colombian culture and society - hugely important for truly becoming fluent.
      </p>
      <ul>
        <li className="my-16">
          <CourseModule
            moduleNumber={1}
            title="An introduction to Colombian Spanish"
            intro="Here, I’ll introduce you to the Colombian accent and to some of the most quintessentially Colombian words and phrases you’ll hear within minutes of talking to Colombians. I’ll also talk you through some excellent free resources and proven study techniques to boost your language skills rapidly."
            accentColor="#BF3976"
            lessons={[
              { type: 'lesson-video', name: 'Bienvenidos al curso!' },
              { type: 'lesson-video', name: 'Colombian Spanish survival guide' },
              { type: 'lesson-video', name: 'Where to go for (free) help' },
              { type: 'lesson-quiz', name: 'Essentials of Colombian slang' },
              { type: 'lesson-text', name: 'Accents from across Colombia' },
              { type: 'lesson-text', name: 'Study techniques that got me to fluency' },
            ]}
          />
        </li>
        <li className="my-16">
          <CourseModule
            moduleNumber={2}
            title="The art of Colombian small talk"
            intro={
              <>
                To get conversations really going you’ll know need to a whole load more phrases than{' '}
                <i>hola, ¿cómo estás?</i>. Avoid those awkward silences, and impress the locals,
                with the expressions to start, maintain and wind down Spanish small talk
                interactions.
              </>
            }
            accentColor="#B336B3"
            lessons={[
              { type: 'lesson-video', name: 'Top ways to greet strangers' },
              { type: 'lesson-video', name: "Fun ways to say 'hi' to your friends" },
              { type: 'lesson-text', name: 'Further Colombianising your greetings' },
              { type: 'lesson-video', name: 'How to avoid awkward silences' },
              { type: 'lesson-text', name: 'The culture of excessive greetings' },
              { type: 'lesson-quiz', name: 'Starting and sustaining conversation' },
              { type: 'lesson-video', name: 'The perfect Colombian goodbye' },
              { type: 'lesson-quiz', name: 'Small talk conversation' },
            ]}
          />
        </li>
        <li className="my-16">
          <CourseModule
            moduleNumber={3}
            title="Killing off gringo-isms"
            intro="Iron out the errors that you don’t know you’re making; replace clunky, foreign-sounding literal translations of English expressions with smoother and more streamlined local equivalents."
            accentColor="#7436B3"
            lessons={[
              {
                type: 'lesson-video',
                name: "Using 'llevar' when talking about time",
              },
              {
                type: 'lesson-video',
                name: 'Colombianising your shopping phrases',
              },
              { type: 'lesson-video', name: 'How to get discounts - Colombia style' },
              { type: 'lesson-video', name: "Colombian alternatives for 'OK' and 'sure'" },
              { type: 'lesson-text', name: "Say goodbye to '¿es posible...?' questions" },
              { type: 'lesson-video', name: 'Effortless sentence starters and connectors' },
              { type: 'lesson-quiz', name: 'Killing off gringo-isms' },
            ]}
          />
        </li>
        <li className="my-16">
          <CourseModule
            moduleNumber={4}
            title="AT YOUR LEISURE..."
            intro="Discover what Colombians get up to in their free time and how best to get yourself involved in local social life. You'll master the Spanish to make fun things happen, to chat about mixing with friends and family, dancing and going out on the town."
            accentColor="#3636B3"
            lessons={[
              { type: 'lesson-video', name: "What's different about Colombians' social lives?" },
              { type: 'lesson-video', name: 'How much do you really like your friends?' },
              { type: 'lesson-quiz', name: 'Talking about your social life in Spanish' },
              { type: 'lesson-video', name: 'The Spanish for making fun things happen' },
              { type: 'lesson-video', name: "What is a 'parche'?" },
              { type: 'lesson-video', name: 'The drunkenness scale' },
              { type: 'lesson-quiz', name: 'Social life and partying in Colombia' },
            ]}
            sampleLesson={{
              name: "What's different about Colombians' social lives?",
              url: 'https://fast.wistia.net/embed/iframe/qim2bekobz',
            }}
          />
        </li>
        <li className="my-16">
          <CourseModule
            moduleNumber={5}
            title="The crazy world of Colombian dating"
            intro="Learn to navigate the culturally alien world of the Colombian dating scene. Discover what Colombians say when being flirtatious or charming, and how to talk about attractive people and other aspects of your private life with friends. "
            accentColor="#3687B3"
            lessons={[
              { type: 'lesson-video', name: 'Compliments and terms of endearment' },
              { type: 'lesson-text', name: 'Relationship types in Colombia' },
              { type: 'lesson-video', name: 'Colombian seduction 101' },
              { type: 'lesson-text', name: 'A trip to the motel...' },
              { type: 'lesson-text', name: 'A local jokes about dating culture' },
              { type: 'lesson-video', name: 'Levels of love in Colombia' },
              { type: 'lesson-quiz', name: 'A Colombian love story' },
            ]}
          />
        </li>
        <li className="my-16">
          <CourseModule
            moduleNumber={6}
            title="Taking it to the next level"
            intro="Sound like you’ve lived among Colombians for years by nailing the trickiest parts of language: making/understanding the local sense of humor, using popular expressions and proverbs perfectly, exaggerating and cursing naturally."
            accentColor="#36B3B3"
            lessons={[
              { type: 'lesson-video', name: "When does 'now' actually mean 'now'?" },
              { type: 'lesson-text', name: 'Juicy local idioms and proverbs' },
              { type: 'lesson-video', name: 'Using diminutives like a pro' },
              { type: 'lesson-video', name: 'Exaggerating with ease' },
            ]}
            hasTimeline={false}
          />
        </li>
      </ul>
    </div>
  )
}

export default CourseLessons
