import Header from "@/sections/Header/Header";
import Experience from "@/sections/Experience/Experience";
import Testimonials from "@/sections/Experience/Testimonials";
import Projects from "@/sections/Projects/Projects";
import Skills from "@/sections/Skills/Skills";
import Certifications from "@/sections/Certifications/Certifications";
import Education from "@/sections/Education/Education";
import Leadership from "@/sections/Education/Leadership";
import Recognition from "@/sections/Education/Recognition";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Header />
      <Experience />
      <Testimonials />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Leadership />
      <Recognition />
    </main>
  );
}
