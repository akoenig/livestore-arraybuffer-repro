import { Schema } from "@effect/schema";
import {
  DbSchema,
  defineMutation,
  makeSchema,
  sql,
} from "@livestore/livestore";

const todos = DbSchema.table("todos", {
  id: DbSchema.text({ primaryKey: true }),
  description: DbSchema.text(),
  completed: DbSchema.boolean({ default: false }),
  createdAt: DbSchema.integer({ default: { sql: `(strftime('%s','now'))` } }),
  updatedAt: DbSchema.integer({ default: { sql: `(strftime('%s','now'))` } }),
});

export const tables = { todos };

export const addTodo = defineMutation(
  "addTodo",
  Schema.Struct({ id: Schema.String, text: Schema.String }),
  sql`INSERT INTO todos (id, text, completed) VALUES ($id, $text, false)`,
);

const mutations = { addTodo };

export const schema = makeSchema({
  tables,
  mutations,
  migrations: { strategy: "from-mutation-log" },
});
