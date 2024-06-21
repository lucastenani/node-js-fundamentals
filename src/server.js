// commonJS => require
// ESModules => import/export

// GET - Fetch a resource
// POST - Create something
// PUT - Edit or update a resource
// PATCH - Update unique information about a resource
// DELETE - Delete a resource

import { randomUUID } from 'node:crypto'
import http from 'node:http'

import { Database } from './database.js'
import { json } from './middlewares/json.js'

const database = new Database()

const server = http.createServer(async (req, res) => {
  const users = database.select('users')
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body
    const id = randomUUID()

    const user = {
      id,
      name,
      email,
    }

    database.insert('users', user)

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333) // localhost:3333
