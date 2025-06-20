// File: backend/server.ts
import cors from '@fastify/cors'
import { drizzle } from 'drizzle-orm/node-postgres'
import Fastify from 'fastify'
import { Pool } from 'pg'
import { v7 as uuidv7 } from 'uuid'
import * as schema from '../database/schema/index'

const server = Fastify({
  logger: true,
})

await server.register(cors, {
  // You can customize the CORS policy here
  origin: true, // or specify an array of origins
})

const pool = new Pool({ connectionString: process.env.POSTGRES_CONNECTION_STRING })
const db = drizzle(pool, { schema })

server.get('/api/pages', async () => {
  const pages = await db.select().from(schema.pages)
  return pages
})

server.post<{ Body: Record<string, any> }>('/api/pages', async (request, reply) => {
  const body = request.body
  // @ts-expect-error: test for now
  await db.insert(schema.pages).values({ id: uuidv7(), ...body })
  reply.code(201).send({ status: 'ok' })
})

const port = Number(process.env.PORT) || 3001
server.listen({ port })
  .then(() => server.log.info(`🚀 Server listening on port ${port}`))
  .catch(err => {
    server.log.error(err)
    process.exit(1)
  })
