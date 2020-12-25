import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import HeroIllustration from '../components/hero/HeroIllustration'

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        title="Your personal assistant for literally anything"
        content="From scheduling dentist appointments to getting you reservations for dinner. Sign up for the beta launch now."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}
