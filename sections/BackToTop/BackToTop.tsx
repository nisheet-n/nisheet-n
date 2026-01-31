 "use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-4 right-3 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-primary text-primary-foreground shadow-lg transition md:bottom-6 md:right-6 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <HiArrowUp className="h-5 w-5" />
    </button>
  );
}
