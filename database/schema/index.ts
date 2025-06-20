// NOTE: This file has been auto-generated - do not edit.
import { pgTable, text, boolean, uuid } from 'drizzle-orm/pg-core'
export const pages = pgTable('pages', {
  id: uuid('id').primaryKey(),
  title: text('title').notNull(),
  published: boolean('published'),
  category: text('category'),
})