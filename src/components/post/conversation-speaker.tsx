import * as React from 'react'

export type ConversationPerson =
  | 'man1'
  | 'man2'
  | 'man3'
  | 'man4'
  | 'man5'
  | 'woman1'
  | 'woman2'
  | 'woman3'
  | 'woman4'
  | 'woman5'
interface Props {
  text: string
  side: string
  color: string
  person: ConversationPerson
  tts: string
  audio: string
}

const Conversation = ({ color, side, person, text }: Props) => {
  return (
    <span
      className={`relative inline-block my-2 text-lg conversation px-6 py-4 rounded-lg italic ${color} ${side} ${person}`}
    >
      <span className="person absolute inline-block " />

      {text}

      <style jsx>{`
        .person {
          background-size: 70px 70px;
          height: 70px;
          width: 70px;
          top: -10px;
        }

        .conversation::after,
        .conversation::before {
          top: 22px;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        .conversation.left {
          margin-left: 90px;
        }

        .conversation.left::after,
        .conversation.left::before {
          right: 100%;
        }
        .conversation.left::after {
          border-width: 10px;
          margin-top: -10px;
        }
        .conversation.left::before {
          border-width: 11px;
          margin-top: -11px;
        }

        .conversation.left .person {
          left: -80px;
        }

        .conversation.right {
          margin-right: 90px;
          margin-left: 20px;
          text-align: left;
        }
        .conversation.right::after,
        .conversation.right::before {
          left: 100%;
        }
        .conversation.right::after {
          border-width: 10px;
          margin-top: -10px;
        }
        .conversation.right::before {
          border-width: 11px;
          margin-top: -11px;
        }
        .conversation.right .person {
          right: -80px;
        }

        .conversation.green {
          background: #e1f9de;
          border: 1px solid #9aeb90;
          color: #113e0b;
        }

        .conversation.left.green::after {
          border-right-color: #e1f9de;
        }
        .conversation.left.green::before {
          border-right-color: #9aeb90;
        }
        .conversation.right.green::after {
          border-left-color: #e1f9de;
        }
        .conversation.right.green::before {
          border-left-color: #9aeb90;
        }

        .conversation.green .material-icons {
          color: rgba(40, 163, 28, 0.8);
        }

        .conversation.blue {
          background: #e8f4ff;
          border: 1px solid #8cc8ff;
          color: #002f59;
        }

        .conversation.left.blue::after {
          border-right-color: #e8f4ff;
        }
        .conversation.left.blue::before {
          border-right-color: #8cc8ff;
        }
        .conversation.right.blue::after {
          border-left-color: #e8f4ff;
        }
        .conversation.right.blue::before {
          border-left-color: #8cc8ff;
        }

        .conversation.blue .material-icons {
          color: rgba(0, 102, 207, 0.8);
        }

        .conversation.grey,
        .conversation.gray {
          background: #eee;
          border: 1px solid #ccc;
          color: #272727;
        }

        .conversation.left.gray::after,
        .conversation.left.grey::after {
          border-right-color: #eee;
        }
        .conversation.left.gray::before,
        .conversation.left.grey::before {
          border-right-color: #ccc;
        }
        .conversation.right.gray::after,
        .conversation.right.grey::after {
          border-left-color: #eee;
        }
        .conversation.right.gray::before,
        .conversation.right.grey::before {
          border-left-color: #ccc;
        }

        .conversation.grey .material-icons,
        .conversation.gray .material-icons {
          color: rgba(98, 98, 98, 0.8);
        }
      `}</style>
    </span>
  )
}

export default Conversation
