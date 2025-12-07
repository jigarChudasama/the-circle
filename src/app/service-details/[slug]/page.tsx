import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailsMain from "@/views/service/service-details";
import service_data from "@/data/service-data";

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
    const service = service_data.find((item) => item.slug === params.slug);
    return {
        title: service ? `Liko - ${service.title}` : "Liko - Service Details",
    };
};

export function generateStaticParams() {
    return service_data.map((service) => ({
        slug: service.slug,
    }));
}

const ServiceDetailsDynamicPage = ({ params }: { params: { slug: string } }) => {
    const service = service_data.find((item) => item.slug === params.slug);

    if (!service) {
        return notFound();
    }

    return (
        <ServiceDetailsMain service={service} />
    );
};

export default ServiceDetailsDynamicPage;
