"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
// 1. Import the CV image
import cvImage from "/assets/CV Naufal Ahmad Fauzan.png";

// 2. The CV item has been REMOVED from this array
const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

// 3. Accept 'setSelectedImage' as a prop
export const Navbar = ({ setSelectedImage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Naufal's</span>{" "}
            Portfolio
          </span>
        </a>

        {/* --- DESKTOP NAVBAR --- */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Render the normal navigation links from the array */}
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          {/* 4. Add the "View CV" button separately after the links */}
          <button
            onClick={() => setSelectedImage(cvImage)}
            className="cosmic-button text-sm"
          >
            View CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/*--- MOBILE MENU OVERLAY ---*/}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {/* Render the normal links in the mobile menu */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* 5. Add the "View CV" button to the mobile menu */}
            <button
              onClick={() => {
                setSelectedImage(cvImage);
                setIsMenuOpen(false);
              }}
              className="cosmic-button mt-4" // Added a top margin for spacing
            >
              View CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
