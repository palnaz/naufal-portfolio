import { useState } from "react";
import { CertificatesSection } from "../components/CertificatesSection";
import { ContactSection } from "../components/ContactsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/*Navbar*/}
      <Navbar setSelectedImage={setSelectedImage} />
      {/*Main section*/}
      <main>
        <HomeSection />
        <ExperienceSection setSelectedImage={setSelectedImage} />
        <ProjectsSection setSelectedImage={setSelectedImage} />
        <CertificatesSection setSelectedImage={setSelectedImage} />
        <ContactSection />
      </main>
      {/*Footer*/}
      <Footer />
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size view"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
