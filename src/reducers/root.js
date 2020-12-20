import workReducer from './work'
import navbarReducer from './navbar'
import awardsReducer from './awards'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    workExp: workReducer,
    navbar: navbarReducer,
    awards: awardsReducer
})

export default rootReducer
