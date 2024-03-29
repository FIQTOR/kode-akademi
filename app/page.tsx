import { Config } from '@/common/config'
import BaseLayout from '@/common/layouts/base'
import Home from '@/modules/home/home'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Homepage ${Config.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const HomePage = () => {
  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  )
}

export default HomePage