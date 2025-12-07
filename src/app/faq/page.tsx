import React from "react";
import { Metadata } from "next";
import FaqMain from "@/views/faq/faq";

export const metadata: Metadata = {
  title: "Liko - Faq page",
};

const FaqPage = () => {
  return (
    <FaqMain />
  );
};

export default FaqPage;
