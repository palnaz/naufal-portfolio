"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import profilePicture from "/images/me.png";
import htmlLogo from "/logos/html.svg";
import cssLogo from "/logos/css.svg";
import javaLogo from "/logos/java.svg";
import cLogo from "/logos/c.svg";
import pythonLogo from "/logos/python.svg";
import reactLogo from "/logos/react.svg";
import tailwindLogo from "/logos/tailwind.svg";
import javascriptLogo from "/logos/js.svg";
import laravelLogo from "/logos/laravel.svg";
import phpLogo from "/logos/php.svg";
import mysqlLogo from "/logos/mysql.svg";
import gitLogo from "/logos/git.svg";

const techStack = [
  { name: "HTML5", logo: htmlLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "Java", logo: javaLogo },
  { name: "C", logo: cLogo },
  { name: "Python", logo: pythonLogo },
  { name: "React", logo: reactLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "PHP", logo: phpLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Git", logo: gitLogo },
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
        <div className="flex flex-col md:flex-row items-center gap-x-12">
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
              <p className="text-lg text-muted-foreground ml-2 opacity-0 animate-fade-in-delay-4">
                I am a Computer Science student from BINUS University with a
                solid programming foundation and practical industry experience
                as a backend developer. An effective bilingual communicator, I
                possess strong problem-solving and teamwork skills, complemented
                by experience in product development and leadership, making me
                ready to contribute technical expertise to a dynamic team.
              </p>
            </div>

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

          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center opacity-0 animate-fade-in-delay-1">
            <img
              src={profilePicture}
              alt="Naufal Ahmad Fauzan"
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

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
