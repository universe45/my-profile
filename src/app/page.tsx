"use client";
import StepNav from "@/components/stepNav";
import InfoCard from "@/components/infoCard";
import React from "react";


export default function Home() {
  return (
    <div className="flex flex-row bg-base-100 h-screen">
      <div className=" flex-col bg-base-100 h-screen w-1/4 hidden lg:flex">
        <StepNav />
      </div>
      <div className="flex flex-col bg-base-100 h-screen w-full lg:w-3/8  px-4 justify-center overflow-y-scroll">
          <InfoCard />
      </div>
    </div>
  );
}