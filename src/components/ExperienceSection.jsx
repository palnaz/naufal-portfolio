import React from "react";

// --- DATA --- (Copy the data structures from above here)
const workExperience = {
  logo: "/images/dishut.png",
  company: "Dinas Kehutanan Provinsi Lampung",
  role: "Backend Developer Intern",
  duration: "Jul 2025 - Aug 2025",
  description:
    "Collaborated within a cross-functional team of five (Project Manager, 2 Backend, 1 Frontend, 1 QA) to develop a comprehensive forestry management application using Laravel as one of two backend developers.",
  tags: ["PHP", "MySQL", "Laravel", "REST APIs"],
  images: [
    "/images/sitanihut1.jpg", // Replace with your image path
    "/images/sitanihut2.jpg", // Replace with your image path
    "/images/sitanihut3.jpg", // Replace with your image path
  ],
};

const organizationalExperience = {
  logo: "/images/bnec.png",
  company: "BINUS English Club (BNEC)",
  roles: [
    {
      id: 1,
      role: "Staff of Product Research and Development",
      duration: "Jul 2024 - Jan 2025",
      description:
        "Enhanced product development through research and supported publication quality by proofreading and refining written materials.",
      tags: ["Research Skills", "Proofreading", "Mistake Proofing"],
    },
    {
      id: 2,
      role: "Coordinator of Event Division ",
      duration: "Sep 2024 - Feb 2025",
      description:
        "For the BNEC 2024 Social Event, directed a four-person team to plan and execute events, built strategic partnerships with 5 NGOs and 2 educational institutions to secure speakers and venues, and facilitated a Forum Group Discussion to promote knowledge exchange. Additionally, contributed to the event’s community mission by designing and delivering English language sessions for 60 students and 20 preschool teachers at partner schools.",
      tags: [
        "Event Management",
        "People Management",
        "External Relationships",
        "Public Speaking",
        "Teaching",
      ],
    },
    {
      id: 3,
      role: "Manager of Talent Development",
      duration: "Feb 2025 - Present",
      description:
        "Managed the Talent Development Division by overseeing coaching programs for Speech and Scrabble, handling coach contracts and funding proposals, liaising with coaches and competition organizers, and coordinating a team of four staff to support talent participation in competitions.",
      tags: [
        "Leadership",
        "People Management",
        "People Development",
        "Team Management",
      ],
    },
  ],
};

// --- COMPONENT ---
export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* --- Work Experience Section --- */}
        <h3 className="text-2xl font-bold text-center mb-8">Work Experience</h3>
        <div className="flex justify-center mb-24">
          <div className="relative bg-card rounded-lg shadow-lg p-8 max-w-2xl w-full">
            <img
              src={workExperience.logo}
              alt={`${workExperience.company} Logo`}
              className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/2 h-24 w-24 rounded-full bg-background p-2 border-2 border-primary object-contain"
            />

            <h4 className="text-2xl font-bold text-primary mb-6">
              {workExperience.company}
            </h4>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
              <h4 className="text-2xl font-bold">{workExperience.role}</h4>
              <span className="text-muted-foreground mt-2 sm:mt-0">
                {workExperience.duration}
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              {workExperience.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {workExperience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- Organizational Experience Section --- */}
        <h3 className="text-2xl font-bold text-center mb-8">
          Organizational Experience
        </h3>
        <div className="flex justify-center">
          <div className="relative bg-card rounded-lg shadow-lg p-8 max-w-2xl w-full">
            <img
              src={organizationalExperience.logo}
              alt={`${organizationalExperience.company} Logo`}
              className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/2 h-24 w-24 rounded-full bg-background p-2 border-2 border-primary object-contain"
            />

            {/* Display the shared company name once at the top */}
            <h4 className="text-2xl font-bold text-primary mb-6">
              {organizationalExperience.company}
            </h4>

            {/* Map through each role in the roles array */}
            {organizationalExperience.roles.map((roleItem) => (
              <div
                key={roleItem.id}
                className="mb-8 pb-8 border-b border-gray-700 last:mb-0 last:pb-0 last:border-b-0"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <h5 className="text-xl font-bold">{roleItem.role}</h5>
                  <span className="text-muted-foreground mt-2 sm:mt-0">
                    {roleItem.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {roleItem.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {roleItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
