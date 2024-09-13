"use client";
import BottomNav from "@/components/bottomNav";
import InfoCard from "@/components/infoCard";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 1023 || window.innerHeight <= 579) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-base-100 min-h-screen">
      {isMobile ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 select-none">
          <div className="flex flex-col bg-transparent p-6 rounded shadow-lg text-center gap-4">
            <h2 className="text-lg">Sorry</h2>
            <p>Website not supported on mobile right now</p>
            <p className="text-sm  text-gray-500">( Available at 1024x580 screen resolution )</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col bg-base-100 w-full lg:w-3/4 px-14 lg:px-14 justify-center items-center overflow-y-scroll pb-24 lg:pb-0">
            <InfoCard />
          </div>

          <div className="fixed toast toast-end toast-bottom select-none">
            <BottomNav />
          </div>
        </>
      )}

      <footer className="fixed bottom-0 text-center text-xs text-gray-500 p-4 select-none">
        <p>&copy; {new Date().getFullYear()} TTP-WNNC. All rights reserved.</p>
      </footer>
    </div>
  );
}