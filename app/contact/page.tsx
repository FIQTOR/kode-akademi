import { Config } from '@/common/config'
import BaseLayout from '@/common/layouts/base'
import Contact from '@/modules/contact/contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Contact ${Config.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const ContactPage = () => {
  return (
    <BaseLayout>
      <Contact />
    </BaseLayout>
  )
}

export default ContactPage