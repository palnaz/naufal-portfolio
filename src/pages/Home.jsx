import { CertificatesSection } from "../components/CertificatesSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* background effects */}
      <StarBackground />
      {/*Navbar*/}
      <Navbar />
      {/*Main section*/}
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
      </main>
      {/*Footer*/}
    </div>
  );
};
