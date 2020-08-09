import {combineReducers} from 'redux'
import cartOrderReducer from './personal_cartOrder_reducer'

const rootReducers = combineReducers({
  cartorder:cartOrderReducer,
})
export default rootReducers