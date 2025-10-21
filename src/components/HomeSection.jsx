import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
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
      <div className="container max-w-4xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
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
              <p className="ml-2 opacity-0 animate-fade-in-delay-4">
                I'm a versatile Computer Science undergraduate student from
                BINUS University that aspires to be a Software
                Engineer/Fullstack Developer with a solid foundation in
                programming and practical industry experience as a backend
                developer, complemented by extensive experience in leadership,
                event planning, and product development. I am a bilingual and
                effective communicator with strong skills in teamwork and
                problem-solving, ready to bring both technical and leadership
                capabilities to a dynamic team.
              </p>
              <a
                href="assets/CV Naufal Ahmad Fauzan.pdf"
                download="assets/CV Naufal Ahmad Fauzan.pdf"
                className="cosmic-button hover:bg-foreground hover:text-primary transition-colors duration-300 ml-2 opacity-0 animate-fade-in-delay-4"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center opacity-0 animate-fade-in-delay-1">
            <img src="/images/me.png" alt="Naufal Ahmad Fauzan" />
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300 ${
          showScrollArrow ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
