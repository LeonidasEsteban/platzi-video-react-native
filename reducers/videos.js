function videos(state = {}, action) {
  switch (action.type) {
    case 'SET_SEGGESTION_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_CATEGORY_LIST': {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export default videos;
