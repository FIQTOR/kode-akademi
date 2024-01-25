import { ReactNode } from "react";
import Blog1, { shortDescription, title, titleSlug } from "./blogsSource/blog1";


type Blog = {
  title: string;
  titleSlug: string;
  shortDescription: string;
  SourceHtml: ReactNode;
};

export const Blogs: Array<Blog> = [
  {
    title: title,
    titleSlug: titleSlug,
    shortDescription: shortDescription,
    SourceHtml: <Blog1 />,
  },
];

const findBlogByTitle = (title: string): Blog | undefined => {
  return Blogs.find(blog => blog.title === title);
};