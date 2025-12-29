import { ArrowDown } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm pt-6 px-8 md:px-16">
      <div className="flex items-center justify-between">
        {/* Logo Area */}
        <div className="border border-white/20 px-3 py-1 text-white tracking-[0.2em] text-sm font-light uppercase">
          Osama
        </div>

        {/* Navigation */}
        <nav>
          <a
            href="/osama_resume.pdf"
            download
            className="group flex items-center gap-2 text-white/90 hover:text-white text-sm font-light transition-colors"
          >
            Download Resume
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;