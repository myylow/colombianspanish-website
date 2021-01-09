import * as React from 'react'

interface Props {
  name: string
  schoolName: string
  imgSrc: string
}

const LanguageTeacherCard = ({ name, schoolName, imgSrc }: Props) => {
  return (
    <li>
      <img src={imgSrc} />
      <div className="name">{name}</div>
      <div className="school-name">{schoolName}</div>
      <style jsx>{`
        li {
          text-align: center;
          background: #ffffff;
          border: 1px solid #cccccc;
          box-shadow: 2px 3px 4px 0 rgba(155, 155, 155, 0.5);
          border-radius: 5px;
          padding: 75px 10px 20px;
          position: relative;
        }
        img {
          position: absolute;
          top: -30px;
          left: 0;
          right: 0;
          margin: auto;
          width: 90px;
          height: 90px;
        }
        .name {
          font-size: 18px;
          color: #000000;
          line-height: normal;
          margin-bottom: 5px;
        }
        .school-name {
          font-weight: 600;
          font-size: 12px;
          color: #9b9b9b;
          text-transform: uppercase;
          line-height: normal;
        }
        @media screen and (min-width: 320px) {
          li {
            width: 140px;
            margin: 0 0 50px 0;
          }
        }
        @media screen and (min-width: 360px) {
          li {
            width: 145px;
            margin: 0 10px 50px 10px;
          }
        }

        @media screen and (min-width: 768px) {
          li {
            width: 150px;
            margin-bottom: 80px;
          }
        }
      `}</style>
    </li>
  )
}

export default LanguageTeacherCard
