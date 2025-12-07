import React from 'react';
import { scroller } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo, UpArrowFour } from '@/components/svg';
import { IPortfolio } from '@/data/portfolio-data';

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

type Props = {
  portfolio: IPortfolio;
}

export default function PortfolioDetailsThreeArea({ portfolio }: Props) {
  const {
    detail_title,
    detail_desc_1,
    detail_desc_2,
    detail_images,
    slider_images
  } = portfolio;

  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      {/* details are */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-title-box">
                <h2 className="tp-section-title-160 mb-50 tp-char-animation">{detail_title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-scroll smooth">
                <a onClick={scrollTo} className="pointer">
                  <span>
                    <ScrollDownTwo />
                  </span>
                  Scroll to Explore
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                <a href="#">
                  Visit  Website
                  <span>
                    <UpArrowFour />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details are */}

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
        {detail_images && detail_images[0] && (
          <Image data-speed=".8" src={detail_images[0]} alt="port-img" style={{ height: 'auto' }} />
        )}
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">{detail_title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">{detail_desc_1}</p>
                <p>{detail_desc_2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/*details thumb */}
      <div id="xyz" className="tp-project-details-3-thumb mb-120">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-thumb-box">
                {detail_images && detail_images[1] && (
                  <Image data-speed=".8" src={detail_images[1]} alt="port-img" style={{ height: 'auto' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">{detail_desc_1}</p>
                <p>{detail_desc_2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details thumb */}
      <div className="tp-project-details-3-thumb mb-90">
        <div className="container">
          <div className="row">
            {detail_images && detail_images[2] && (
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                  <Image className="w-100" src={detail_images[2]} alt="port-img" style={{ height: 'auto' }} />
                </div>
              </div>
            )}
            {detail_images && detail_images[3] && (
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                  <Image className="w-100" src={detail_images[3]} alt="port-img" style={{ height: 'auto' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">{detail_desc_1}</p>
                <p>{detail_desc_2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* slider images area */}
      <div className="pd-visual-slider-wrap pb-40">
        <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
          {slider_images && slider_images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="pd-visual-slider-thumb fix">
                <Image src={imgSrc} alt="port-img" style={{ height: "auto" }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slider images area */}
    </>
  )
}
