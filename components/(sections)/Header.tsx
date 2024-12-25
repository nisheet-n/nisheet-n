import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <div className="md:col-span-3 flex flex-col md:flex-row items-center gap-8 border-b border-text pb-8">
      <div className="relative w-40 h-40">
        <Image
          src="/assets/images/profile-image.png"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-text"
          priority
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="bg-white/75 backdrop-blur-sm w-fit mx-auto md:mx-0 px-4 py-2 rounded-lg text-4xl font-bold text-text mb-4">
          Nisheet
        </h1>
        <div className="flex items-center gap-2 h-8">
          <a 
            href="https://linkedin.com/in/nisheet2000" 
            target="_blank"
            className="flex justify-center items-center w-10 h-10 hover:w-12 hover:h-12 bg-text text-background transition-all rounded-full"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/nisheet-n" 
            target="_blank"
            className="flex justify-center items-center w-10 h-10 hover:w-12 hover:h-12 bg-text text-background transition-all rounded-full"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a 
            href="mailto:nisheet.dev@gmail.com"
            className="flex justify-center items-center w-10 h-10 hover:w-12 hover:h-12 bg-text text-background transition-all rounded-full"
          >
            <MdEmail className="w-6 h-6" />
          </a>
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 bg-black rounded-lg">
        <a 
          href="/resume.pdf" 
          className="flex items-center gap-2 px-4 py-2 text-white"
          download="Nisheet_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-sm font-medium">Download Resume</span>
        </a>
      </div> */}
    </div>
  );
} 