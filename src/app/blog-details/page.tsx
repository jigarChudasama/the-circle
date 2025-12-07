import React from "react";
import { Metadata } from "next";
import BlogDetailsTwoMain from "@/views/blog/blog-details";

export const metadata: Metadata = {
  title: "Liko - Blog Details 2 page",
};

import { blog_data } from "@/data/blog-data";

const BlogDetailsTwoPage = () => {
  const blog = blog_data[0];
  return (
    <BlogDetailsTwoMain blog={blog} />
  );
};

export default BlogDetailsTwoPage;
