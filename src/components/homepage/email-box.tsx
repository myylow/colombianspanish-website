import * as React from 'react'
import superagent from 'superagent'
import NextImage from 'next/image'

interface Props {
  mailingListUrl: string
}
interface State {
  firstName: string
  email: string
  subscribeResult: string
  buttonStatus: string
}

class EmailBox extends React.Component<Props, State> {
  state = {
    firstName: '',
    email: '',
    subscribeResult: 'ready',
    buttonStatus: 'ready',
  }

  handleNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handleButtonClick = async (event) => {
    event.preventDefault()

    var requestData = {
      email: this.state.email,
      firstName: this.state.firstName,
    }

    if (this.state.email.trim() === '') {
      this.setState({
        subscribeResult: 'no-email',
      })
      return
    }

    if (this.state.firstName.trim() === '') {
      this.setState({
        subscribeResult: 'no-first-name',
      })
      return
    }

    // Proceed with request

    this.setState({
      buttonStatus: 'sending',
      subscribeResult: 'ready',
    })

    try {
      await superagent.post(this.props.mailingListUrl).send(requestData).timeout({
        response: 3500,
        deadline: 3500,
      })
      this.setState({
        buttonStatus: 'sent',
      })
      this.setState({
        subscribeResult: 'success',
      })
      //  this.setMailingListCookie();
    } catch (error) {
      this.setState({
        buttonStatus: 'ready',
      })
      try {
        var code = JSON.parse(error.response.text).code
        if (code == 214) {
          this.setState({
            subscribeResult: 'already-signedup',
          })
        } else if (code == -100) {
          this.setState({
            subscribeResult: 'no-email',
          })
        } else {
          this.setState({
            subscribeResult: 'general-error',
          })
        }
      } catch (e) {
        this.setState({
          subscribeResult: 'general-error',
        })
      }
    }
  }

  render() {
    return (
      <aside>
        <h4>7 day transformation</h4>
        <div className="img-container">
          <NextImage src="/components/homepage/emailbox-icon@2x.png" width="65" height="65" />
        </div>
        <div className="description">
          Fast track from dull ‘textbook Spanish’ to sounding like a local with the free{' '}
          <b>Colombian Spanish Language Hacks</b> email course.
        </div>
        <form className="form">
          <div className="label">Your first name</div>
          <input
            type="text"
            required
            onChange={this.handleNameChange}
            name="firstName"
            value={this.state.firstName}
          />
          <div className="label">Your email</div>
          <input
            type="email"
            required
            onChange={this.handleEmailChange}
            name="email"
            value={this.state.email}
          />
          <button
            onClick={this.handleButtonClick}
            disabled={this.state.buttonStatus == 'sending' || this.state.buttonStatus == 'sent'}
            className={'g-turquoise-button ' + this.state.buttonStatus}
          >
            {this.state.buttonStatus == 'ready' && <span>Send me the course</span>}
            {this.state.buttonStatus == 'sending' && <span>Sending...</span>}
            {this.state.buttonStatus == 'sent' && <span>✓ Email sent</span>}
          </button>
          <div
            className={
              'subscribe-result cs-chapter-promo__confirmation ' +
              (this.state.subscribeResult == 'success' ? '' : 'hidden')
            }
          >
            Thanks! You&apos;ve subscribed succesfully. Please check your email to find our more.
          </div>
          <div
            className={
              'subscribe-result js-error-already-signedup ' +
              (this.state.subscribeResult == 'already-signedup' ? 'fail' : 'hidden')
            }
          >
            Sorry, your email address has already signed up.
          </div>
          <div
            className={
              'subscribe-result js-error-no-email ' +
              (this.state.subscribeResult == 'no-email' ? 'fail' : 'hidden')
            }
          >
            Please enter a valid email address.
          </div>
          <div
            className={
              'subscribe-result js-error-no-first-name ' +
              (this.state.subscribeResult == 'no-first-name' ? 'fail' : 'hidden')
            }
          >
            Please enter your first name.
          </div>
          <div
            className={
              'subscribe-result js-general-error ' +
              (this.state.subscribeResult == 'general-error' ? 'fail' : 'hidden')
            }
          >
            We&apos;re sorry, an error occured. Please try again later.
          </div>
        </form>
        <style jsx>{`
          aside {
            background: #ffffff;
            border: 1px solid #cccccc;
            box-shadow: 2px 20px 4px 0 rgba(155, 155, 155, 0.5);
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
            color: #36b3b3;
            text-transform: uppercase;
            font-weight: 600;
            margin: 0 0 10px;
          }
          .description {
            margin-bottom: 30px;
            font-size: 18px;
          }
          .form {
            text-align: left;
            display: inline-block;
            margin: auto;
            max-width: 100%;
          }
          .label {
            color: #36b3b3;
            text-align: left;
            display: block;
          }
          input {
            text-align: left;
            padding: 10px 10px;
            max-width: 100%;
            margin: 0 0 25px;
            font-size: 18px;
            border: 1px solid #999;
            display: block;
            width: 220px;
          }
          input:last-of-type {
            margin-bottom: 35px;
          }
          button {
            display: block;
            padding: 14px 60px;
            box-shadow: none;
            margin: 0 auto 0;
          }
          button:disabled,
          button[disabled] {
            background-color: #cccccc;
            color: #666666;
            box-shadow: none;
            cursor: auto;
          }
          .subscribe-result {
            padding: 20px 0 0;
            color: blue;
            max-width: 250px;
            margin: auto;
            text-align: center;
          }
          .subscribe-result.fail {
            color: red;
          }
          @media screen and (min-width: 320px) {
            aside {
              box-shadow: none;
            }
            button {
              padding: 14px 30px;
            }
            .description {
              font-size: 16px;
            }
            input {
              width: 220px;
            }
          }
          @media screen and (min-width: 360px) {
            input {
              width: 250px;
            }
          }
          @media screen and (min-width: 768px) {
            aside {
              box-shadow: 2px 3px 4px 0 rgba(155, 155, 155, 0.5);
            }
            button {
              padding: 14px 50px;
            }
            .description {
              font-size: 18px;
            }
            input {
              width: 250px;
            }
          }
          @media screen and (min-width: 1024px) {
            input {
              width: 300px;
            }
            button {
              padding: 14px 60px;
            }
          }
        `}</style>
      </aside>
    )
  }
}

export default EmailBox

/*

        .g-turquoise-button {
          background: #36b3b3;
          border-radius: 10px;
          font-family: 'Source Sans Pro';
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          text-transform: uppercase;
          border: none;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
          transition: background-color 0.3s;
          cursor: pointer;
          border: 0;
        }
        .g-turquoise-button:focus,
        .g-turquoise-button:active {
          outline: 0;
        }
        .g-turquoise-button:hover {
          background: #2e9999;
        }
        .g-turquoise-button:active {
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
        }

        */
