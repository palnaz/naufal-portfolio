import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SITANIHUT",
    description:
      "SITANIHUT (Sistem Informasi Petani Hutan) is a full-stack web application designed to digitize and centralize agricultural reporting..",
    image: "/images/project1.jpg",
    tags: ["React", "TailwindCSS", "PHP", "Laravel", "MySQL"],
    demoUrl:
      "https://www.figma.com/design/79lCIxpzsmZXNV3SHo4K98/Web-UID-Sitanihut?node-id=1-15&t=sKbQ2dZcON1apHEH-1",
  },
  {
    id: 2,
    title: "FitnSync Website Design",
    description: "Design prototype of a wellness web-based app.",
    image: "/images/project2.png",
    tags: ["Figma"],
    demoUrl:
      "https://www.figma.com/design/hHchFJTHOu6lnSVH9zbNBs/FITnSYNC-Entre-Market-Validation?node-id=0-1&t=0GRoF8x0nskqPsLj-1",
  },
  {
    id: 3,
    title: "Music Streaming Platform Prototype",
    description: "Design prototype of a music streaming platform using Figma.",
    image: "/images/project3.png",
    tags: ["Figma"],
    demoUrl:
      "https://www.figma.com/design/HmBn9Eaag9f0sYfIb9iXjQ/Willify?node-id=0-1&t=cmT2YS8hZSyxSc0m-1",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"></p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3"></div>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/palnaz"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
