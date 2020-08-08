import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers/index_reducer'

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;