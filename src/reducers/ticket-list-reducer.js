export default (state = {}, action) => {
  let newState
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action

  switch (action.type) {
  case 'ADD_TICKET':
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    })
    return newState

  case 'UPDATE_TIME':
    newState = Object.assign({}, state, {
      [id]: Object.assign({}, state[id], {formattedWaitTime})
    })
    return newState

  default:
    return state
  }
}
