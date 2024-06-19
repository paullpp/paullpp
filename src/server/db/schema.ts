// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  integer,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `paullpp_${name}`);

export const projects = createTable(
  "project",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    description: varchar("description", { length: 1024 }),
    imageUrl: varchar("imageUrl", { length: 1024 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
);

export const tags = createTable(
  "tags",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
);

export const projects_tags = createTable(
  "projects_tags",
  {
    id: serial("id").primaryKey(),
    projectId: integer("project_id").notNull().references(() => projects.id),
    tagId: integer("tag_id").notNull().references(() => tags.id),
  }
);