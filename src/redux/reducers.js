import { combineReducers } from 'redux'
import {initialState} from './state';


export const listingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            return state.filter((business, index) => index !== action.value)
            
        default:
            return state
    }
}
// probably need to adjust this..
const fetches = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BUSINESSES':
            return action.value
            break;
        // case 'DELETE_BUSINESSES':
        //     const makes = [...state]
        //     makes.splice(action.value, 1)
        //     return makes
        default:
            return state
    }
}
const rootReducer = combineReducers({ 
    businesses: listingsReducer,
});

export default rootReducer;