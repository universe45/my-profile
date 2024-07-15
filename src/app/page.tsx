"use client";
import StepNav from "@/components/stepNav";
import Navbar from "@/components/navbar";
import InfoCard from "@/components/infoCard";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col bg-base-100 min-h-screen select-none">
      <div className="flex-grow">
        <div className="flex flex-row">
          <div className="flex-col bg-base-100 h-screen w-1/4 hidden lg:flex px-16">
            <StepNav />
          </div>

          <div className="flex flex-col bg-base-100 w-full lg:w-3/4 px-14 lg:px-14 justify-center overflow-y-scroll pb-24 lg:pb-0">
            <InfoCard />
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 w-screen">
        <Navbar />
      </div>
    </div>
  );
}