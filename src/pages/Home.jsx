import { CertificatesSection } from "../components/CertificatesSection";
import { ContactSection } from "../components/ContactsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/*Navbar*/}
      <Navbar />
      {/*Main section*/}
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
};
