import { Config } from '@/common/config'
import BaseLayout from '@/common/layouts/base'
import Course from '@/modules/course/course'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Course ${Config.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const CoursePage = () => {
  return (
    <BaseLayout>
      <Course />
    </BaseLayout>
  )
}

export default CoursePage