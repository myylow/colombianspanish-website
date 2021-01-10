import * as React from 'react'

interface Props {
  name: string
  quote: string
  email?: string
  website?: string
  facebook?: string
}

const SchoolCard = ({ name, quote, email, website, facebook }: Props) => {
  return (
    <div>
      <h3 className="text-2xl mt-12 mb-8">{name}</h3>
      <p className="school-quote">
        <i className="relative block rounded-3xl bg-gray-100 px-12 py-8 mt-2 text-gray-600">
          {quote}
        </i>
      </p>

      <ul className="mb-12">
        {email && (
          <li className="pl-12 py-1 contact-icon contact-email">
            <a href={'mailto:' + email}>{email}</a>
          </li>
        )}

        {/* website link */}
        {website && (
          <li className="pl-12 py-1 contact-icon contact-link">
            <a href={website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </li>
        )}

        {/* facebook page */}
        {facebook && (
          <li className="pl-12 py-1 contact-icon contact-facebook">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
        )}
      </ul>
      <style jsx>{`
        .school-quote::before {
          content: 'What they say:';
          font-size: 18px;
        }

        .school-quote > i::before,
        .school-quote > i::after {
          position: absolute;
          height: 45px;
          line-height: 70px;
          width: 45px;
          text-align: center;
          font-size: 65px;
          font-weight: bold;
        }
        .school-quote > i:before {
          content: '“';
          top: 0px;
          left: -5px;
        }
        .school-quote > i::after {
          content: '”';
          bottom: 0px;
          right: 10px;
        }
      `}</style>
    </div>
  )
}

export default SchoolCard
