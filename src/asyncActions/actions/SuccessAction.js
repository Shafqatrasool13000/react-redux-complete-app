import {FETCH_USERS_SUCCESS } from "./actionTypes"

const SuccessAction = (data) => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload:data
    }
}

export default SuccessAction
