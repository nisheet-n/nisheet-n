import Header from "@/components/(sections)/Header";
import Education from "@/components/(sections)/Education";
import Experience from "@/components/(sections)/Experience";
import Projects from "@/components/(sections)/Projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen py-8 sm:py-12 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 space-y-8 sm:space-y-12 transition-all duration-300">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <p className="bg-white rounded-lg p-4 pl-4 shadow-md font-comicNue">
            Hardworking developer with expertise in React.js, Next.js, and TypeScript, complemented by professional experience in Python. Demonstrated ability to build responsive web applications and optimize performance through modern development practices. Seeking web development opportunities to leverage strong frontend skills.
            </p>
            <div className="">
              <Experience />
            </div>
            <div className="">
              <Projects />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
