import { db } from "./db";
import { eq } from "drizzle-orm";
import { projects_tags, tags } from "./db/schema";

export async function getProjects() {
  const projectList = await db.query.projects.findMany();
  const tagList = await db.select().from(projects_tags).leftJoin(tags, eq(projects_tags.tagId, tags.id));

  const tagMap = tagList.reduce((map, entry) => {
    const { projectId } = entry.projects_tags;
    const tagName = entry.tags?.name;

    if (map.has(projectId)) {
      map.get(projectId)!.push(tagName!);
    } else {
      map.set(projectId, [tagName!]);
    }

    return map;
  }, new Map<number, string[]>());

  const combinedList = projectList.map((project) => {
    return {
      ...project,
      tags: tagMap.get(project.id),
    }
  });

  return combinedList;
}
