import { Config } from '@/common/config'
import BaseLayout from '@/common/layouts/base'
import About from '@/modules/about/about'
import Home from '@/modules/home/home'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `About ${Config.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const AboutPage = () => {
  return (
    <BaseLayout>
      <About />
    </BaseLayout>
  )
}

export default AboutPage