const filterReducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case'SET_FILTER': {
      console.log(action.data.filter);
      return action.data.filter
    }

    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    data: {filter}
  }
}

export default filterReducer