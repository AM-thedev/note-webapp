const notificationReducer = (state = null, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NOTIFICATION_DISPLAY': {
      const notification = action.data.content
      return notification
    }
    case 'NOTIFICATION_RESET': {
      const notification = null
      return notification
    }
    default:
      return state
  }
}

let timeoutID
export const displayNotification = (content, time) => {
  clearTimeout(timeoutID)
  return async dispatch => {
    dispatch({
      type: 'NOTIFICATION_DISPLAY',
      data: {content}
    })
    timeoutID = setTimeout(() => dispatch(clearNotification()), 1000 * time)
  }
}

export const clearNotification = () => {
  return {
    type: 'NOTIFICATION_RESET'
  }
}

export default notificationReducer