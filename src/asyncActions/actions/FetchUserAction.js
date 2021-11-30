import axios from 'axios';
import FailureAction from './FailureAction';
import FetchAction from './FetchAction';
import SuccessAction from './SuccessAction';
const UserFetch = () => {
    return function (dispatch) {
        dispatch(FetchAction) 
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data;  
            dispatch(SuccessAction(users))

        }).catch(error => {
            const failure = error.message
            dispatch(FailureAction(failure))

        })
    }
}
export default UserFetch