import { useEffect, useRef } from 'react';
import Socials from './Socials';
import { Typewriter } from './ui/typewriter';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

function Contents() {
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-500 font-sans">
      {/* Hero Section */}
      <section className="container min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center w-full max-w-6xl mx-auto px-4">

          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <p className="text-xl md:text-2xl font-serif italic text-gray-300">
              Hi, My Name is
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight">
              Osama <span className="text-[#ff0033]">Abdullahi</span> Ibrahim
            </h1>

            <div className="h-8">
              <Typewriter
                texts={[
                  "I am a Mern Stack Developer!",
                  "I love gaming.....",
                  "I specialized in Crypto Airdrops too...",
                  "Hire me....Let's build something great leveraging AI!"
                ]}
              />
            </div>

            <div className="pt-12 flex justify-center md:justify-start">
              <Socials />
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 md:w-96 aspect-square rounded-[2rem] overflow-hidden bg-[#ff5722] shadow-[0_0_100px_-20px_rgba(255,87,34,0.3)]">
              <img
                src="/images/osama.jpg"
                alt="Osama Portrait"
                className="w-full h-full object-cover object-center mix-blend-normal hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/10 py-20">
        <div className="container max-w-4xl">
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="space-y-8 text-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 uppercase">About <span className="text-[#ff0033]">Me</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a <span className="text-foreground font-semibold">Mern Stack developer</span> with a passion for web development, Blockchain and AI.
                  I have a background and a Bachelor Degree (B.sc) in computer science,
                  and I have a strong interest in building Web Apps leveraging Artificial Intelligence and interacting with blockchain technology.
                  Have built and deployed 5+ web Apps...
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Technologies I have worked with:</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Node.js", "Express.js", "MongoDB", "Bootstrap",
                    "HTML/CSS", "JavaScript", "Git/GitHub", "React"
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Experience />

      <Education
        education={[
          {
            type: "TERTIARY INSTITUTION",
            institution: "Nasarawa State University, Keffi",
            course: "Computer Science",
            year: "2018 - 2023",
            description: "Bachelor Of Science In Computer Science."
          },
          {
            type: "HIGH SCHOOL",
            institution: "Olokpa Comprehensive High School, Doma, Nasarawa State",
            course: "Qualification: SSCE",
            year: "2011 - 2017",
            description: "West African Examination Council Certificate"
          }
        ]}
      />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Contents;