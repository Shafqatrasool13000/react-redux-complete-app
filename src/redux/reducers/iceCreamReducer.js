import { BUY_ICECREAM } from "../../components/iceCream/iceCreamTypes";

const initalIceCream={
    numOfIceCream:20
}
const iceCreamReducer = (state=initalIceCream,action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream:state.numOfIceCream-action.payload
            }        
        default:return state     
    }
}

export default iceCreamReducer
