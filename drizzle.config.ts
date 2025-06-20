import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './database/schema/index.ts',
  out: './database/migrations',
  // migrations: {
  //   prefix: 'modulus',
  // },
  dbCredentials: {
    // @ts-ignore
    url: process.env.POSTGRES_CONNECTION_STRING as string,
  },
  verbose: true,
  strict: true,
})
