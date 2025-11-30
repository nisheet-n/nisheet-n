import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
