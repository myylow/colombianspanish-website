import superagent from 'superagent'
import Cookies from 'js-cookie'

class MailingListSignup {
  _$form: any
  _$firstName: any
  _$email: any
  _$confirmationMsg: any
  _mailingListUrl: any
  constructor($form, mailingListUrl) {
    if (!$form || !$form.addEventListener) return

    this._$form = $form
    this._$firstName = this._$form.querySelector("input[name='firstname']")
    this._$email = this._$form.querySelector("input[type='email']")
    this._$confirmationMsg = this._$form.querySelector('.cs-chapter-promo__confirmation')
    this._$form.addEventListener('submit', this.submitForm.bind(this))
    this._mailingListUrl = mailingListUrl
  }

  show = () => {
    this._$form.style.display = 'block'
  }

  hide = () => {
    this._$form.style.display = 'none'
  }

  submitForm = async (e) => {
    e.preventDefault()

    var firstName = this._$firstName.value
    var email = this._$email.value
    var $button = this._$form.querySelector('button')
    var originalText = $button.textContent

    var successMessage = '✓ Email sent'

    $button.textContent = 'Sending...'
    $button.setAttribute('disabled', true)

    var $errorMsg = this._$form.querySelector('.js-general-error')
    var $errorAlreadySignedUp = this._$form.querySelector('.js-error-already-signedup')
    var $errorNoEmail = this._$form.querySelector('.js-error-no-email')

    var requestData = {
      email: email,
      firstName: firstName,
    }

    try {
      await superagent
        .post('https://api.mailaxa.com/mailflow/L1vWbDoSk')
        .send(requestData)
        .timeout({
          response: 3500,
          deadline: 3500,
        })
      this._$confirmationMsg.classList.remove('hidden')
      $errorMsg.classList.add('hidden')
      $errorAlreadySignedUp.classList.add('hidden')
      $errorNoEmail.classList.add('hidden')
      $button.textContent = successMessage

      this.setMailingListCookie()
    } catch (error) {
      this._$confirmationMsg.classList.add('hidden')
      $button.removeAttribute('disabled')
      $button.textContent = originalText

      var code = JSON.parse(error.response).code
      if (code == 214) {
        $errorAlreadySignedUp.classList.remove('hidden')
      } else if (code == -100) {
        $errorNoEmail.classList.remove('hidden')
      } else {
        $errorMsg.classList.remove('hidden')
      }
      console.info(error)
    }
  }

  // Set cookie so we know user is on mailing list
  setMailingListCookie = () => {
    Cookies.set('oml', true, {
      expires: 180,
    })
  }
}

export default MailingListSignup
