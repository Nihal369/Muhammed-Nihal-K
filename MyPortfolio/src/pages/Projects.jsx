import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "React + Django full-stack shop with cart & payment.",
      image: "https://via.placeholder.com/300",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Chat App",
      description: "Real-time messaging with Django & WebSockets.",
      image: "https://via.placeholder.com/300",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section className="p-10 grid gap-6 sm:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
