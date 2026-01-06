import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = ["home", "about", "experience", "education", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-md pt-6 px-8 md:px-16 transition-all duration-300 border-b border-white/5">
      <div className="flex items-center justify-between pb-4">
        {/* Logo Area */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="border border-white/20 px-3 py-1 text-white tracking-[0.2em] text-sm font-light uppercase"
        >
          Osama
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "#home", id: "home" },
            { name: "About", href: "#about", id: "about" },
            { name: "Experience", href: "#experience", id: "experience" },
            { name: "Education", href: "#education", id: "education" },
            { name: "Projects", href: "#projects", id: "projects" },
            { name: "Contact", href: "#contact", id: "contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-300 ${activeSection === link.id ? "text-[#ff0033]" : "text-white/60 hover:text-white"
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ff0033]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          <div className="h-4 w-[1px] bg-white/20 mx-2" />

          <a
            href="/osama_resume.pdf"
            download
            className="group flex items-center gap-2 text-white/90 hover:text-white text-sm font-light transition-colors"
          >
            Resume
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <a
            href="/osama_resume.pdf"
            download
            className="text-white/90 hover:text-white text-xs px-3 py-1 border border-white/20 rounded-full"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff0033] origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}

export default Header;