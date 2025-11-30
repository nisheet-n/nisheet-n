import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-background/80 backdrop-blur-sm"
      data-testid="button-scroll-to-top"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
