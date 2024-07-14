"use client";
import { useState } from "react";

interface Project {
  id: number,
  name: string | null,
  url: string | null,
  gh_url: string | null,
  imageUrl: string | null,
  createdAt: Date,
  updatedAt: Date | null
}

export default function ProjectCard(props: { project: Project }) {
  const [ showInfo, setShowInfo ] = useState(false);

  const { project } = props;
  return (
    <div className="mockup-browser bg-base-300 w-96 h-72" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
      <div className="mockup-browser-toolbar">
        <div className="input">{project.name}</div>
      </div>
      <div className="grid">
        {showInfo &&
          <div className="col-start-1 row-start-1 bg-base-200 bg-opacity-70 flex justify-center gap-5 px-4 py-16 z-0">
            {project.gh_url && <a href={project.gh_url} target="_blank" className="w-10 h-10">
              <img className="w-10 h-10 image-scale-down" src="https://utfs.io/f/5c0b58cc-df0c-4e5b-9531-0e39bd453ad0-wqv0b7.png" alt="github link"/>
            </a>}
            {project.url && <a href={project.url} target="_blank" className="w-10 h-10">
              <img className="w-10 h-10 image-scale-down" src="https://utfs.io/f/3cfe0cdd-4bdb-461d-b9b0-2e7ed82b856b-9sad5i.png" alt="website link"/>
            </a>}
          </div>
        }
        <img className="col-start-1 row-start-1 image-scale-down hover:-z-10" alt={project.name!} src={project.imageUrl!}></img>
      </div>
    </div>
  );
}