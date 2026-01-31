 "use client";

import { useEffect, useState } from "react";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { SiLinkedin } from "react-icons/si";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalReal = testimonials.length;
  const extendedTestimonials = [
    testimonials[totalReal - 1],
    ...testimonials,
    testimonials[0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === totalReal + 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
      const timeout2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }
    if (currentSlide === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalReal);
      }, 500);
      const timeout2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }
  }, [currentSlide, totalReal]);

  return (
    <section id="testimonials" className="relative pb-16" data-testid="section-testimonials">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute left-12 top-6 h-24 w-24 text-purple-500/5 dark:text-purple-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 9h10M7 13h7" strokeLinecap="round" />
          <path d="M5 19l2-2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
        </svg>
        <svg className="absolute bottom-10 right-14 h-20 w-20 text-sky-500/5 dark:text-sky-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12a8 8 0 0 1 8-8h8v8a8 8 0 0 1-8 8H4v-8z" />
        </svg>
        <svg className="absolute top-20 right-24 h-20 w-20 text-indigo-500/5 dark:text-indigo-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h12M4 18h8" strokeLinecap="round" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="testimonial-carousel">
          <div className="overflow-hidden rounded-xl">
            <div
              className={`flex gap-4 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={
                {
                  "--slide-index": currentSlide,
                } as React.CSSProperties
              }
            >
              {extendedTestimonials.map((testimonial, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={index}
                    className={`testimonial-slide flex-shrink-0 transition-all duration-300 ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-40"
                    }`}
                    data-testid={`testimonial-slide-${index}`}
                  >
                    <div
                      className={`relative flex h-full flex-col justify-center overflow-hidden rounded-xl p-6 transition-all duration-300 ${
                        isActive
                          ? "border-2 border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl"
                          : "border border-border/50 bg-card"
                      }`}
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 dark:bg-primary/20" />
                      <div className="absolute bottom-0 left-0 h-16 w-16 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 dark:bg-primary/20" />
                      <HiChatBubbleLeft className="absolute bottom-4 right-4 h-12 w-12 text-primary/15 dark:text-primary/30" />

                      <div className="relative z-10">
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/20 to-primary/10 font-bold text-primary">
                              {testimonial.from
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{testimonial.from}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.position} at Deloitte</p>
                            </div>
                          </div>
                          <a
                            href={testimonial.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
                            data-testid={`linkedin-${testimonial.from.split(" ")[0].toLowerCase()}`}
                          >
                            <SiLinkedin className="h-4 w-4" />
                          </a>
                        </div>

                        <p className="mb-2 text-sm leading-relaxed text-foreground/85">
                          {testimonial.message}
                        </p>
                        <p className="text-right text-xs text-muted-foreground/70">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index + 1);
                }}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === (currentSlide - 1 + totalReal) % totalReal
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
