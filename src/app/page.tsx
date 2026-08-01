"use client";
import BottomNav from "@/components/bottomNav";
import InfoCard from "@/components/infoCard";
import Card from "@/components/card";
import MyCard from "@/components/myCard";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [devToolsOpen, setDevToolsOpen] = useState(true);
  const debuggerTrapRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Helpers ──────────────────────────────────────────────────────────────

  const open = useCallback(() => setDevToolsOpen(true), []);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 667 || window.innerHeight <= 375);
  }, []);

  // ── Detection methods ─────────────────────────────────────────────────────

  /** 1. Window size difference (works for docked devtools) */
  const detectBySize = useCallback(() => {
    if (isMobile) { setDevToolsOpen(false); return; }
    const threshold = 160;
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) open();
    else setDevToolsOpen(false);
  }, [isMobile, open]);

  /** 2. console.log regex toString trick */
  const detectByConsole = useCallback(() => {
    const probe = /./;
    probe.toString = () => { open(); return ""; };
    console.log("%c", probe);
    console.clear();
  }, [open]);

  /** 3. debugger timing — devtools pauses execution, causing a measurable delay */
  const detectByDebuggerTiming = useCallback(() => {
    const start = performance.now();
    // eslint-disable-next-line no-debugger
    debugger;
    if (performance.now() - start > 100) open();
  }, [open]);

  /** 4. Firebug legacy object check */
  const detectByFirebug = useCallback(() => {
    // @ts-expect-error: legacy Firebug global
    if (window.Firebug?.chrome?.isInitialized) open();
  }, [open]);

  /** 5. console.profile timing (Chrome) */
  const detectByProfile = useCallback(() => {
    const start = performance.now();
    console.profile("dt");
    console.profileEnd("dt");
    if (performance.now() - start > 10) open();
  }, [open]);

  /** 6. Periodic polling — catches detached/undocked devtools */
  const startPolling = useCallback(() => {
    if (debuggerTrapRef.current) clearInterval(debuggerTrapRef.current);
    debuggerTrapRef.current = setInterval(() => {
      detectBySize();
      detectByConsole();
      detectByDebuggerTiming();
    }, 1000);
  }, [detectBySize, detectByConsole, detectByDebuggerTiming]);

  // ── Keyboard / context-menu blocking ────────────────────────────────────

  const blockContextMenu = (e: MouseEvent) => e.preventDefault();

  const blockKeys = (e: KeyboardEvent) => {
    const blocked =
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C", "K", "U"].includes(e.key)) ||
      (e.metaKey && e.altKey && ["I", "J", "C"].includes(e.key)) || // macOS
      (e.ctrlKey && e.key === "U");
    if (blocked) e.preventDefault();
  };

  // ── Effects ───────────────────────────────────────────────────────────────

  useEffect(() => {
    checkMobile();
    detectBySize();
    detectByConsole();
    detectByFirebug();
    detectByProfile();
    detectByDebuggerTiming();
    startPolling();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", detectBySize);
    window.addEventListener("contextmenu", blockContextMenu);
    window.addEventListener("keydown", blockKeys);

    return () => {
      if (debuggerTrapRef.current) clearInterval(debuggerTrapRef.current);
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
