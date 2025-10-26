"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const techStack = [
  { name: "HTML5", logo: "/logos/html.svg" },
  { name: "CSS3", logo: "/logos/css.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "C", logo: "/logos/c.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "JavaScript", logo: "/logos/js.svg" },
  { name: "Laravel", logo: "/logos/laravel.svg" },
  { name: "PHP", logo: "/logos/php.svg" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "Git", logo: "/logos/git.svg" },
];

export const HomeSection = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollArrow(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* 1. Main layout container with a gap for spacing */}
        <div className="flex flex-col md:flex-row items-center gap-x-12">
          {/* --- Text Content & Tech Stack (Left Column) --- */}
          <div className="md:w-2/3 text-center md:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">
                  Hi, my name is
                </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                  {" "}
                  Naufal
                </span>
                <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
                  {" "}
                  Ahmad
                </span>
                <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-3">
                  {" "}
                  Fauzan
                </span>
              </h1>
              {/* 2. Reverted ScrollReveal to a standard <p> tag */}
              <p className="text-lg text-muted-foreground ml-2 opacity-0 animate-fade-in-delay-4">
                I am a Computer Science student from BINUS University with a
                solid programming foundation and practical industry experience
                as a backend developer. An effective bilingual communicator, I
                possess strong problem-solving and teamwork skills, complemented
                by experience in product development and leadership, making me
                ready to contribute technical expertise to a dynamic team.
              </p>
            </div>

            {/* 3. Tech Stack moved here and restructured */}
            <div className="mt-12">
              <h3 className="text-muted-foreground font-semibold mb-4 text-center md:text-left opacity-0 animate-fade-in-delay-4">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 opacity-0 animate-fade-in-delay-5">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="p-2 bg-card rounded-full" title={tech.name}>
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Image (Right Column) --- */}
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center opacity-0 animate-fade-in-delay-1">
            <img
              src="/images/me.png"
              alt="Naufal Ahmad Fauzan"
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300 ${
          showScrollArrow ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-sm text-muted-foreground mb-1"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
