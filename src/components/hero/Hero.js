import React, { useEffect } from 'react'
import { setupScrollReveal } from '../../assets/js/main.js'

import NewsletterForm from '../forms/NewsletterForm'

const Hero = ({ title, content, illustration: Illustration }) => {
  useEffect(() => {
    setupScrollReveal()
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="container-sm">
              <h1 className="hero-title h2-mobile mt-0 is-revealing">{title}</h1>
              <p className="hero-paragraph is-revealing">{content}</p>
            </div>
            <NewsletterForm className="hero-form" submitText="Beta Sign up" />
          </div>

          <div className="hero-illustration">
            <Illustration />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
