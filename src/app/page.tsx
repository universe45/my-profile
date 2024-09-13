"use client";
import BottomNav from "@/components/bottomNav";
import InfoCard from "@/components/infoCard";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [devToolsOpen, setDevToolsOpen] = useState(true);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 1023 || window.innerHeight <= 579);
  };

  const detectDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    setDevToolsOpen(widthThreshold || heightThreshold);
  };

  const disableRightClick = (event: MouseEvent) => {
    event.preventDefault();
  };

  const disableKeyDown = (event: KeyboardEvent) => {
    const keysToDisable = ["F12", "fn"];
    const isCtrlShift = event.ctrlKey && event.shiftKey;
    
    if (keysToDisable.includes(event.key) && (event.key === "F12" || isCtrlShift)) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    checkMobile();
    detectDevTools();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", detectDevTools);
    window.addEventListener("devtoolschange", detectDevTools);
    window.addEventListener("contextmenu", disableRightClick);
    window.addEventListener("keydown", disableKeyDown);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", detectDevTools);
      window.removeEventListener("devtoolschange", detectDevTools);
      window.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("keydown", disableKeyDown);
    };
  }, []);

  if (devToolsOpen) {
    return (
      <div className="flex justify-center items-center bg-base-100 min-h-screen">
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 select-none">
          <div className="flex flex-col bg-transparent p-6 rounded shadow-lg text-center gap-4">
            <h2 className="text-lg">Developer tools not available</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-base-100 min-h-screen">
      {isMobile ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 select-none">
          <div className="flex flex-col bg-transparent p-6 rounded shadow-lg text-center gap-4">
            <h2 className="text-lg">Sorry</h2>
            <p>Website not supported on mobile right now</p>
            <p className="text-sm text-gray-500">( Available at 1024x580 screen resolution )</p>
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