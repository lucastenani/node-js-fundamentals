// commonJS => require
// ESModules => import/export

// GET - Fetch a resource
// POST - Create something
// PUT - Edit or update a resource
// PATCH - Update unique information about a resource
// DELETE - Delete a resource

import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    })

    return res.end('Created user')
  }

  return res.end('Hello, World!')
})

server.listen(3333) // localhost:3333
