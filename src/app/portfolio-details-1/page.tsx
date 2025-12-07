import React from "react";
import { Metadata } from "next";
import PortfolioDetailsThreeMain from "@/views/portfolio/details/portfolio-details-1";


export const metadata: Metadata = {
  title: "Liko - Portfolio Details 3 page",
};

import portfolio_data from "@/data/portfolio-data";

const PortfolioDetailsThreePage = () => {
  const portfolio = portfolio_data[0];
  return (
    <PortfolioDetailsThreeMain portfolio={portfolio} />
  );
};

export default PortfolioDetailsThreePage;
