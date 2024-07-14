import { db } from "./db";

export async function getProjects() {
  const projectList = await db.query.projects.findMany();

  return projectList;
}
