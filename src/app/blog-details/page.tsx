import React from "react";
import { Metadata } from "next";
import BlogDetailsTwoMain from "@/views/blog/blog-details";

export const metadata: Metadata = {
  title: "Liko - Blog Details 2 page",
};

const BlogDetailsTwoPage = () => {
  return (
    <BlogDetailsTwoMain />
  );
};

export default BlogDetailsTwoPage;
