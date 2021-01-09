import * as React from 'react'
import NextImage from 'next/image'

const FacebookBox = () => {
  return (
    <a
      href="https://www.facebook.com/groups/learnspanishcolombia/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <aside>
        <h4>Join our community</h4>
        <div className="img-container">
          <NextImage src="/components/homepage/facebookbox-icon@2x.png" width="65" height="65" />
        </div>
        <div className="description">
          <p>
            Everything’s easier with friends. Get help with your learning by joining the 750+ other
            Colombian Spanish enthusiasts in our Facebook community.
          </p>
          <p>
            It&apos;s a great place to get quick answers to your Colombian Spanish questions, to get
            a range of opinions and ideas about where best to study, and to share your favorite tips
            and tricks for learning Colombian Spanish. We look forward to welcoming you!
          </p>
        </div>
      </aside>
      <style jsx>{`
        a {
          display: block;
        }
        aside {
          background: #ffffff;
          border: 1px solid #cccccc;
          box-shadow: 2px 3px 4px 0 rgba(155, 155, 155, 0.5);
          border-radius: 5px;
          padding: 60px 25px 30px;
          text-align: center;
          position: relative;
          min-height: 518px;
        }
        .img-container {
          background-color: white;
          height: 100px;
          width: 100px;
          position: absolute;
          top: -60px;
          left: 0;
          right: 0;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        h4 {
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 600;
          margin: 0 0 10px;

          color: #3b5998;
        }
        .description {
          font-size: 18px;
          color: #5f5f5f;
          text-align: left;
          max-width: 350px;
          margin: auto;
        }
        @media screen and (min-width: 320px) {
          .description {
            font-size: 16px;
          }
        }
        @media screen and (min-width: 768px) {
          .description {
            font-size: 18px;
          }
        }
      `}</style>
    </a>
  )
}

export default FacebookBox
