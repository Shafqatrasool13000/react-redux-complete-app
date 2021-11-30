import { BUY_ICECREAM } from "./iceCreamTypes"


const iceCreamAction = (number=1) => {
    return {
        type:BUY_ICECREAM,
        payload:number
    }
}

export default iceCreamAction
