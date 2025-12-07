import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IService } from "@/data/service-data";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type Props = {
  service: IService;
};

export default function ServiceDetailsArea({ service }: Props) {
  const {
    detail_subtitle,
    detail_title,
    detail_desc_1,
    detail_desc_2,
    features,
    images,
  } = service;

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                {detail_subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation">{detail_title}</h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">{detail_desc_1}</p>
                {detail_desc_2 && (
                  <p className="tp_title_anim">{detail_desc_2}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                {images && images[0] && (
                  <Image
                    data-speed="0.4"
                    src={images[0]}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">{detail_desc_1}</p>
                {detail_desc_2 && <p>{detail_desc_2}</p>}
              </div>
              {features && features.length > 0 && (
                <div className="service-details__fea-list">
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {images && images[1] && (
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                      <div className="service-details__sm-thumb">
                        <Image
                          src={images[1]}
                          alt="service-img"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  )}
                  {images && images[2] && (
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                      <div className="service-details__sm-thumb">
                        <Image
                          src={images[2]}
                          alt="service-img"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  Great user experience design lets users focus on the task they
                  have to complete & evokes emotion without distracting them.
                  Bonus points for when it also looks & feels aesthetically
                  pleasing!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                <a href="#">Strategy</a>
                <a className="active" href="#">
                  Logo Design
                </a>
                <a href="#">Graphic identity</a>
                <a href="#">Web Design</a>
                <a href="#">Development</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  {detail_title}
                  {/* Logo <br /> Design */}
                </h4>
                <p className="mb-20">{detail_desc_1}</p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
