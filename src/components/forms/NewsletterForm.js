import React, { useState } from 'react'
import classnames from 'classnames'
import { useMailChimp } from '../../utils/hooks'
import { baseConfig } from '../../utils/config'

const NewsletterForm = ({ className, submitText = 'Submit' }) => {
  const { mailChimpUrl } = baseConfig
  const { subscribe, status } = useMailChimp(mailChimpUrl)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    subscribe({
      EMAIL: email,
    })
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    if (value) setEmail(value)
  }
  return (
    <form
      className={classnames('newsletter-form field field-grouped is-revealing', className)}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="control control-expanded">
        <input
          className="input"
          onChange={(e) => handleInputChange(e)}
          type="email"
          name="email"
          placeholder="Your actual email..."
          required
        />
      </div>
      <div className="control">
        <button className="button button-primary button-block button-shadow" type="submit">
          {status === 'SUCCESS' ? 'Done!' : submitText}
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
