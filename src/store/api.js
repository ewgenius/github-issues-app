export const CALL_API = Symbol('CALL_API')

function parsePagination(link) {
  if (link) {
    const next = link.match(/page=(\d+)\S+>; rel="next"/)
    const last = link.match(/page=(\d+)\S+>; rel="last"/)
    console.log(link)
    return {
      next: next ? parseInt(next[1]) : null,
      total: last ? parseInt(last[1]) : null
    }
  }
  else return link
}

const callApi = endpoint => {
  return fetch(endpoint)
    .then(response => {
      if (response.status === 200) {
        return response.json().then(payload => ({
          payload,
          headers: response.headers,
          pagination: parsePagination(response.headers.get('link'))
        }))
      } else {
        throw {
          status: response.status,
          text: response.statusText
        }
      }
    })
}

export default store => next => action => {
  const call = action[CALL_API]

  if (typeof call === 'undefined')
    return next(action)

  const {endpoint, successType, errorType} = call

  return callApi(endpoint)
    .then(({payload, headers, pagination}) => next({
      type: successType,
      payload,
      headers,
      pagination
    }))
    .catch(error => next({
      type: errorType,
      error
    }))
}
