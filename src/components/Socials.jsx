import { Button } from "./ui/button";
import { Github, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Socials() {
  return (
    <div className="flex gap-6 items-center">
      <a
        href="https://github.com/OsamaAbdul"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white transition-all duration-300 hover:scale-125 hover:text-gray-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
      >
        <Github className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/osama-abdullahi-ibrahim-51361a23a"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white transition-all duration-300 hover:scale-125 hover:text-[#0077b5] hover:drop-shadow-[0_0_15px_rgba(0,119,181,0.6)]"
      >
        <Linkedin className="h-8 w-8" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61567242651004"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-white transition-all duration-300 hover:scale-125 hover:text-[#1877F2] hover:drop-shadow-[0_0_15px_rgba(24,119,242,0.6)]"
      >
        <Facebook className="h-8 w-8" />
      </a>
      <a
        href="https://www.x.com/osamaabduljnr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="text-white transition-all duration-300 hover:scale-125 hover:text-[#1877F2] hover:drop-shadow-[0_0_15px_rgba(24,119,242,0.6)]"
      >
        <Twitter className="h-8 w-8" />
      </a>
    </div>
  );
}