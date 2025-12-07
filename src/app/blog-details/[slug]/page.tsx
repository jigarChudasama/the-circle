import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailsTwoMain from "@/views/blog/blog-details";
import { blog_data } from "@/data/blog-data";

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
    const blog = blog_data.find((item) => item.slug === params.slug);
    return {
        title: blog ? `Liko - ${blog.title}` : "Liko - Blog Details",
    };
};

export function generateStaticParams() {
    return blog_data
        .filter((blog) => blog.slug)
        .map((blog) => ({
            slug: blog.slug,
        }));
}

const BlogDetailsDynamicPage = ({ params }: { params: { slug: string } }) => {
    const blog = blog_data.find((item) => item.slug === params.slug);

    if (!blog) {
        return notFound();
    }

    return (
        <BlogDetailsTwoMain blog={blog} />
    );
};

export default BlogDetailsDynamicPage;
