import Typewriter from "./_components/typewriter";

export default function HomePage() {
  return (
    <div className="flex flex-col mt-10 text-white">
      <div className="flex min-h-[80vh] w-full items-center justify-center">
        <Typewriter text="Paul Lipp" />
      </div>
      <div className="mx-10 font-semibold">
        Education
        <hr />
      </div>
      <div className="flex min-h-[40vh] w-full m-10">
        <p className="text-lg font-semibold"> Oregon State University </p>
      </div>
      <div className="mx-10 font-semibold">
        Work Experience
        <hr />
      </div>
      <div className="flex flex-col gap-5 min-h-[40vh] w-full m-10">
        <p className="text-lg font-semibold"> Kongregate - Junior Data Engineer </p>
        <ul className="flex flex-col ml-5 break-normal whitespace-pre list-style-none gap-5">
          <li>
            Working with a team of data analysts and software engineers to resolve backend issues for stakeholders
          </li>
          <li>
            Managing an ETL process to ensure quality data from various sources is available to be queried in our
            <br />data warehouse
          </li>
          <li>
            Maintain and improve internal tooling used by Analysts and Engineers
          </li>
        </ul>
        <p className="text-lg font-semibold mt-20"> Kongregate - Junior Data Analyst </p>
        <ul className="flex flex-col ml-5 break-normal whitespace-pre list-style-none gap-5">
          <li>
            Interpreting as well as visualizing large amounts of data by generating charts and tables that are used by
            <br />Product Managers and Marketing teams to drive key product decisions
          </li>
          <li>
            Helped migrate the companies entire BI stack onto a new, more modern platform, which helped improve user and 
            <br />developer experience, while simultaneously cutting cost
          </li>
        </ul>
      </div>
    </div>
  );
}
