import ProjectList from "./_components/projectList";
import Typewriter from "./_components/typewriter";

export default function HomePage() {
  return (
    <div className="flex flex-col mt-10 text-white">
      <div className="flex min-h-[80vh] w-full items-center justify-center">
        <Typewriter text="Paul Lipp" />
      </div>
      <div>
        <ProjectList />
      </div>
    </div>
  );
}
