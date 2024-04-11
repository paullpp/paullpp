import projects from './data/projects.json';
import { Project } from './utils/types';
import Card from './components/Card';

export default function Projects() {
  return (
    <div className="projects-container">
      {projects?.map((project: Project) => <Card project={project} />)}
    </div>
  );
}
