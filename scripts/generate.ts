import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Pages from '../collections/pages'

function generateDrizzleSchema(collection) {
  const lines: string[] = []
  lines.push('// NOTE: This file has been auto-generated - do not edit.')
  lines.push(`import { pgTable, text, boolean, uuid } from 'drizzle-orm/pg-core'`)
  lines.push(`export const ${collection.slug} = pgTable('${collection.slug}', {`)
  lines.push(`  id: uuid('id').primaryKey(),`)

  for (const field of collection.fields) {
    switch (field.type) {
      case 'text':
        lines.push(`  ${field.name}: text('${field.name}')${field.required ? '.notNull()' : ''},`)
        break
      case 'checkbox':
        lines.push(`  ${field.name}: boolean('${field.name}'),`)
        break
      case 'select':
        lines.push(`  ${field.name}: text('${field.name}')${field.required ? '.notNull()' : ''},`)
        break
    }
  }

  lines.push('})')
  return lines.join('\n')
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const schemaContent = generateDrizzleSchema(Pages)
fs.writeFileSync(path.join(__dirname, '../database/schema/index.ts'), schemaContent)
