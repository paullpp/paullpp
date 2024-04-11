import Navbar from './components/Navbar';
import './index.css';
import projects from '../public/data/projects.json';
import { Project } from './utils/types';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="divider" />
      <div className="body-container">
        <div className="projects-container">
          {projects?.map((project: Project) => <Card project={project} />)}
        </div>
      </div>
    </>
  );
}
