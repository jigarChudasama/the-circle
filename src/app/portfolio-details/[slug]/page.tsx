import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetailsThreeMain from "@/views/portfolio/details/portfolio-details-1";
import portfolio_data from "@/data/portfolio-data";

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
    const portfolio = portfolio_data.find((item) => item.slug === params.slug);
    return {
        title: portfolio ? `Liko - ${portfolio.title}` : "Liko - Portfolio Details",
    };
};

export function generateStaticParams() {
    return portfolio_data.map((portfolio) => ({
        slug: portfolio.slug,
    }));
}

const PortfolioDetailsDynamicPage = ({ params }: { params: { slug: string } }) => {
    const portfolio = portfolio_data.find((item) => item.slug === params.slug);

    if (!portfolio) {
        return notFound();
    }

    return (
        <PortfolioDetailsThreeMain portfolio={portfolio} />
    );
};

export default PortfolioDetailsDynamicPage;
