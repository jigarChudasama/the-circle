import React from "react";
import { Metadata } from "next";
import HomeMain from "@/views/home/home";

export const metadata: Metadata = {
  title: "The Circle - Home Main",
};


export default function Home() {
  return (
    <HomeMain />
  );
}
