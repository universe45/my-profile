"use client";
import BottomNav from "@/components/bottomNav";
import InfoCard from "@/components/infoCard";
import Card from "@/components/card";
import MyCard from "@/components/myCard";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [devToolsOpen, setDevToolsOpen] = useState(true);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 667 || window.innerHeight <= 375);
  };

  const detectDevTools = React.useCallback(() => {
    if (!isMobile) {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      setDevToolsOpen(widthThreshold || heightThreshold);
    } else {
      setDevToolsOpen(false);
    }
  }, [isMobile]);

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

  const detectDevToolsAdvanced = () => {
    const devtools = /./;
    devtools.toString = () => {
      setDevToolsOpen(true);
      return '';
    };
    console.log(devtools);
  };

  useEffect(() => {
    checkMobile();
    detectDevTools();
    detectDevToolsAdvanced();

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
  }, [detectDevTools, isMobile]);

  const devToolsBypass = process.env.NEXT_PUBLIC_DEVTOOLS_BYPASS === "true";

  if (devToolsOpen && !devToolsBypass) {
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
      <MyCard />
      <footer className="fixed bottom-0 text-center text-xs text-gray-500 p-4 select-none">
        <p>&copy; {new Date().getFullYear()} TITIPONG W. All rights reserved.</p>
      </footer>
    </div>
  );
}