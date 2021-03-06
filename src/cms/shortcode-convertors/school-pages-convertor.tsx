import * as React from 'react'
import PostCard from '../../shared-components/post-card'

const convertSchoolsPagesShortcode = () => {
  var schoolsPosts = [
    {
      title: 'Your Options for Studying Spanish in Bogota',
      slug: '/options-for-studying-spanish-bogota',
      image:
        'https://colombianspanishblog.files.wordpress.com/2017/09/bogota-appearances-can-be-deceptive-bogota-attractions-colonial-cities-46.jpg?w=335',
      categories: [
        {
          name: 'Where To Study',
        },
      ],
      excerpt: `<p>Colombia’s capital doesn't have the greatest weather, but some like studying here because it has all the trappings you’d expect of a big urban centre: plenty of places to eat, shop, drink and dance.</p><p>
            It is also home to the country’s largest concentration of expat staff, English teachers, volunteers, and long-term backpackers. There's high demand for Spanish tuition and plenty of establishments have sprung up to meet it.</p>`,
    },
    {
      title: 'Studying Spanish in Medellin: the City’s Best Schools',
      slug: '/studying-spanish-in-medellin-best-schools',
      image:
        'https://colombianspanishblog.files.wordpress.com/2017/09/medellin-the-captivating-city-of-the-eternal-spring-medellin-68.jpg?w=335',
      categories: [
        {
          name: 'Where To Study',
        },
      ],
      excerpt: `<p>Colombia’s second largest city is smaller, more laid back and warmer than Bogota. Fewer expats live in Medellin, as there aren’t as many commercial opportunities than in the capital. </p><p>However, a steady stream of international students, digital nomads and the gringo party crowd means that there is still a decent selection of Spanish schools and courses out there.</p>`,
    },
  ]
  return (
    <div className="grid grid-cols-2 gap-2">
      {schoolsPosts.map((post) => {
        return <PostCard spacing="none" size="sm" post={post} key={post.slug} />
      })}
    </div>
  )
}

export default convertSchoolsPagesShortcode
