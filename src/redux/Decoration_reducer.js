// import axios from 'axios'
const defaultState = {
  id: -1,
}
const reducers = (state = defaultState, action) => {
  // console.log(state)
  switch (action.type) {
    case 'Decoration_data':
      return { ...state, count: 1 }
    default:
      return { ...state, count: 9 }
  }
}
module.exports = { reducers }
