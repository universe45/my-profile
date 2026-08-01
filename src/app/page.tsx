"use client";
import MyCard from "@/components/myCard";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  // Starts false — only flips to true when a DevTools action is detected
  const [devToolsOpen, setDevToolsOpen] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 667 || window.innerHeight <= 375);
  }, []);

  // ── Detection methods ─────────────────────────────────────────────────────

  /** Checks window size gap — works for docked AND separate-window DevTools */
  const detectBySize = useCallback(() => {
    if (isMobile) return;
    const threshold = 160;
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      setDevToolsOpen(true);
    }
  }, [isMobile]);

  // ── Keyboard / context-menu blocking ────────────────────────────────────

  /** Block F12 / Ctrl+Shift+I / Cmd+Option+I and flag DevTools as open */
  const blockKeys = useCallback((e: KeyboardEvent) => {
    const isDevToolsKey =
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C", "K", "U"].includes(e.key)) ||
      (e.metaKey && e.altKey && ["I", "J", "C"].includes(e.key)) || // macOS
      (e.ctrlKey && e.key === "U");
    if (isDevToolsKey) {
      e.preventDefault();
      setDevToolsOpen(true);
    }
  }, []);

  /** Block right-click Inspect */
  const blockContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setDevToolsOpen(true);
  }, []);

  // ── Effects ───────────────────────────────────────────────────────────────

  useEffect(() => {
    checkMobile();

    // Poll every 2 s — lightweight size-only check, catches Chrome menu open
    pollRef.current = setInterval(detectBySize, 2000);

    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", detectBySize);
    window.addEventListener("contextmenu", blockContextMenu);
    window.addEventListener("keydown", blockKeys);

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", detectBySize);
      window.removeEventListener("contextmenu", blockContextMenu);
      window.removeEventListener("keydown", blockKeys);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  // ── Render ────────────────────────────────────────────────────────────────

  const devToolsBypass = process.env.NEXT_PUBLIC_DEVTOOLS_BYPASS === "true";

  if (devToolsOpen && !devToolsBypass) {
    return (
      <div className="flex justify-center items-center bg-base-100 min-h-screen select-none">
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center bg-[#393E46]/80 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center gap-4 max-w-xs">
            <span className="text-4xl">🔒</span>
            <h2 className="text-lg font-bold tracking-tight">Access Restricted</h2>
            <p className="text-sm text-base-content/60 leading-relaxed">
              Developer tools are not available on this page.
            </p>
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
