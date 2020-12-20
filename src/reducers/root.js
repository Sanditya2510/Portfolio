import workReducer from './work'
import navbarReducer from './navbar'
import awardsReducer from './awards'
import hobbiesReducer from './hobbies'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    workExp: workReducer,
    navbar: navbarReducer,
    awards: awardsReducer,
    hobbies: hobbiesReducer
})

export default rootReducer
