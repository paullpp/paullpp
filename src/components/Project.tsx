import { useParams } from 'react-router-dom';
import { Project } from '../utils/types';
import projects from '../data/projects.json';
import '../index.css';
import github from '../assets/github.svg';

export default function ProjectSite(): JSX.Element {
  const { projectId } = useParams<{ projectId?: string }>();
  const project: Project = projects[parseInt(projectId!, 10)];
  return (
    <div className="project-page-container">
      <div className="hero rounded-lg banner" style={{ backgroundImage: `url(${project.imageUrl})` }}>
        <div className="hero-overlay bg-opacity-60 rounded-lg" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {project.name}
            </h1>
            <p className="mb-5">
              {project.descriptionShort}
            </p>
          </div>
        </div>
      </div>
      <div className="project-tags">
        {project.tags?.map((tag: string) => (
          <div className="badge badge-success">
            {tag}
          </div>
        ))}
        <a href={project.githubUrl} className="btn mt-5 ml-5 sm:btn-sm md:btn-md lg:btn-lg p-2" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" className="w-5" />
          GitHub
        </a>
      </div>
      <div className="projectDescription">
        {project.descriptionLong}
      </div>
    </div>
  );
}
