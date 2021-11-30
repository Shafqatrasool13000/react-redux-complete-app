import { FETCH_USERS_FAILURE } from "./actionTypes"

const FailureAction = (data) => {
    return {
        type:FETCH_USERS_FAILURE,
        payload:data
    }
}

export default FailureAction
