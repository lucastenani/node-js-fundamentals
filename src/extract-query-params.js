// http://localhost:3333/users?q=Olha&page=2

// ['q','Olha'],['page','2'], [key, value]

export function extractQueryParams(query) {
  return query
    .substr(1)
    .split('&')
    .reduce((queryParams, param) => {
      const [key, value] = param.split('=')

      queryParams[key] = value

      return queryParams
    }, {})
}
