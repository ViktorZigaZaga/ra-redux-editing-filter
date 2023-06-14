import {SET_FILTER, RESET_FILTER} from '../actions/actionsTypes'

const initialState = {
    filter: ''
}

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, filter: action.payload.filter};
        case RESET_FILTER:
            return {...state, filter: ''};
        default:
            return state;
    }
}