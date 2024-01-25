
type Props = {
  params: { slug: string }
}

import { Blogs } from '@/common/blogs'
import BaseLayout from '@/common/layouts/base'
import React from 'react'

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
