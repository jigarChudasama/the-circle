import React from "react";
import Image from "next/image";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";
import { IBlogDT } from "@/types/blog-d-t";

type Props = {
  blog: IBlogDT;
};

export default function BlogDetailsAreaTwo({ blog }: Props) {
  const { detail_desc, detail_images, author, date, category } = blog;

  // Helper to get description part (string or array)
  const getDesc = (index: number) => {
    if (Array.isArray(detail_desc)) {
      return detail_desc[index] || "";
    }
    return index === 0 ? detail_desc : "";
  };

  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="postbox__wrapper">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="blog-details-top-text tp_fade_bottom">
                    <p>{getDesc(0)}</p>
                  </div>
                  <div className="blog-details-left-content tp_fade_bottom">
                    <p className="pb-40">{getDesc(1)}</p>
                    <h4 className="blog-details-left-title">
                      Overview
                    </h4>
                    <p className="mb-20">
                      This is a dynamic overview of the project or article.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-details-thumb-box tp_fade_bottom">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      {detail_images && detail_images[0] && (
                        <Image
                          className="mb-20"
                          src={detail_images[0]}
                          alt="details-thumb"
                          style={{ height: "auto" }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      {detail_images && detail_images[1] && (
                        <Image
                          className="mb-20"
                          src={detail_images[1]}
                          alt="details-thumb"
                          style={{ height: "auto" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="blog-details-left-content tp_fade_bottom">
                    <p>{getDesc(2)}</p>
                  </div>
                  <div className="blog-details-blockquote tp_fade_bottom">
                    <blockquote>
                      <span className="quote-icon">
                        <QuoteThree />
                      </span>
                      <p>
                        {"Don't"} watch the clock; do what it does. keep going.
                      </p>
                      <span className="blockquote-info">Sam Levenson</span>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="blog-details-thumb">
                      {detail_images && detail_images[2] && (
                        <Image
                          className="w-100"
                          src={detail_images[2]}
                          alt="details-thumb"
                          style={{ height: "auto" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  {/* blog details navigation */}
                  <BlogDetailsNavigation />
                  {/* blog details navigation */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
