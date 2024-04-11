import { Project } from '../utils/types';

type Props = { project: Project, };

export default function Card(props: Props): JSX.Element {
  const { project } = props;
  return (
    <div className="single-project">
      <a href={`/${project.id}`} className="card w-80 bg-base-100 shadow-xl">
        <figure><img src={((project.imageUrl === '') ? 'https://placehold.co/96x100' : project.imageUrl)} alt="Project" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {project.name}
          </h2>
          <p>
            {project.descriptionShort}
          </p>
          <div className="card-actions">
            {project.tags.slice(0, 3).map((tag: string) => (
              <div className="badge badge-accent">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
