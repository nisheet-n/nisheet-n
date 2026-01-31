 "use client";

import { useEffect, useState } from "react";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import { navLinks } from "@/constants/navLinks";
import { initTheme, toggleTheme, type ThemeMode } from "@/lib/theme.action";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    setTheme(initTheme());
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-foreground"
          data-testid="link-logo"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Nisheet
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <button
              key={item.href}
              type="button"
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              onClick={() => scrollToSection(item.href)}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition hover:bg-muted"
            onClick={() => setTheme((current) => toggleTheme(current))}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition hover:bg-muted"
            onClick={() => setTheme((current) => toggleTheme(current))}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition hover:bg-muted"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiXMark className="h-5 w-5" />
            ) : (
              <HiBars3 className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <button
                key={item.href}
                type="button"
                className="rounded-md px-3 py-2 text-left text-sm text-muted-foreground transition hover:text-foreground"
                onClick={() => scrollToSection(item.href)}
                data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
