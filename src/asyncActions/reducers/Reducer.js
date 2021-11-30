import { FETCH_USERS_DATA, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "../actions/actionTypes";

const initalState = {
    loading: false,
    users: [],
    error: ''
}
const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_USERS_DATA:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users:[],
                error:action.payload
            }

        default:
            return state
    }
}

export default Reducer
