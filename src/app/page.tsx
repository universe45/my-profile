"use client";
import BottomNav from "@/components/bottomNav";
import InfoCard from "@/components/infoCard";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-base-100 min-h-screen">
      <div className="flex flex-col bg-base-100 w-full lg:w-3/4 px-14 lg:px-14 justify-center items-center overflow-y-scroll pb-24 lg:pb-0">
        <InfoCard />
      </div>

      <div className="toast toast-end toast-bottom">
          <BottomNav />
      </div>
    </div>
  );
}