import { getProjects } from "~/server/queries";

export default async function ProjectList() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center align-center">
      {projects?.map((project) => (
        <div key={project.id}  className="flex gap-5 w-5/6 bg-white rounded-lg">
          {project.imageUrl && <img alt={project.name ?? "project"} className="rounded-lg h-48 w-48" src={project.imageUrl}/>}
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold text-black m-3">
              {project.name}
            </p>
            <p className="text-lg text-black m-3">
              {project.tags?.join(' ')}
            </p>
            <p className="text-lg text-black m-3">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}