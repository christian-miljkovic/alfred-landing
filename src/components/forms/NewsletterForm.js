import React from 'react'
import classnames from 'classnames'

const NewsletterForm = ({ className, submit = 'Submit' }) => {
  return (
    <form className={classnames('newsletter-form field field-grouped is-revealing', className)}>
      <div className="control control-expanded">
        <input className="input" type="email" name="email" placeholder="Your actual email..." />
      </div>
      <div className="control">
        <button className="button button-primary button-block button-shadow" type="submit">
          {submit}
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
