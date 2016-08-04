export const CALL_API = Symbol('CALL_API')

const callApi = endpoint => {
  return fetch(endpoint)
    .then(response => {
      if (response.status === 200) {
        return response.json()
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

  callApi(endpoint)
    .then(payload => next({
      type: successType,
      payload
    }))
    .catch(error => next({
      type: errorType,
      error
    }))
}