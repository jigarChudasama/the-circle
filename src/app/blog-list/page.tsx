import React from "react";
import { Metadata } from "next";
import BlogListMain from "@/views/blog/blog-list";

export const metadata: Metadata = {
  title: "Liko - Blog List page",
};

const BlogListPage = () => {
  return (
    <BlogListMain />
  );
};

export default BlogListPage;
