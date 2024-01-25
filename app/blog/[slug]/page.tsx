
type Props = {
  params: { slug: string }
}

import { Blogs } from '@/common/blogs'
import { Config } from '@/common/config'
import BaseLayout from '@/common/layouts/base'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Blog | ${Config.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const SlugBlogPage = ({ params }: Props) => {
  const blog = getBlog(params.slug)
  return (
    <BaseLayout>
      {blog?.SourceHtml}
    </BaseLayout>
  )
}

function getBlog(key: string) {
  return Blogs.find(blog => blog.titleSlug === key);
}

export default SlugBlogPage
