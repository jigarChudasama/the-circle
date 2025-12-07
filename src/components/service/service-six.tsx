import React from "react";
import Image from "next/image";
import Link from "next/link";
import service_data from "@/data/service-data";
import { RightArrow, ShapeTwo } from "../svg";

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  {item.service_six_img && (
                    <Image
                      src={item.service_six_img}
                      alt="service-img"
                      style={{ height: "auto" }}
                    />
                  )}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.detail_subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.desc}</p>
                      </div>
                      {item.features && item.features.length > 0 && (
                        <div className="sv-service-list">
                          <ul>
                            {item.features.map((list, i) => (
                              <li key={i}>{list}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={`/service-details/${item.slug}`}
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
