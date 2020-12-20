import { TOGGLE_NAVBAR } from '../actions/types'

const initState = {
    isNavbarOpen: false
}

const navbarReducer = (state=initState, action) => {
    switch(action.type){
        case TOGGLE_NAVBAR:
            const isOpen = action.payload
            return {...state, isNavbarOpen: isOpen }
        default:
            return state    
    }
}

export default navbarReducer