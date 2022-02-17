import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) { //if we receive a new action of CHANGE_SEARCH_FIELD
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload}); //return your new state and update props with action.payload
        default:
            return state;
        }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    err: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { err: action.payload, isPending: false })
        default: 
            return state;
    }
}