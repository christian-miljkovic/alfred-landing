import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import HeroIllustration from '../components/hero/HeroIllustration'

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        title="Your personal assistant for literally anything"
        content="From scheduling dentist appointments to getting reservations for dinner and more... just text Alfred."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}
