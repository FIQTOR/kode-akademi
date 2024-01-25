import { Config } from '@/common/config'
import BaseLayout from '@/common/layouts/base'
import Blog from '@/modules/blog/blog'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: `Blog ${Config.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const BlogPage = () => {
  return (
    <BaseLayout>
      <Blog />
    </BaseLayout>
  )
}

export default BlogPage