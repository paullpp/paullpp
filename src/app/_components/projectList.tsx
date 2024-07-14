import { getProjects } from "~/server/queries";
import ProjectCard from "./projectCard";

export default async function ProjectList() {
  const projects = await getProjects();

  return (
    <div className="flex flex-wrap gap-5 gap-y-10 m-5">
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}