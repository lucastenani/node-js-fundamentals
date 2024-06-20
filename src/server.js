// commonJS => require
// ESModules => import/export

// GET - Fetch a resource
// POST - Create something
// PUT - Edit or update a resource
// PATCH - Update unique information about a resource
// DELETE - Delete a resource

import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Users List')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Create user')
  }

  return res.end('Hello, World!')
})

server.listen(3333) // localhost:3333
