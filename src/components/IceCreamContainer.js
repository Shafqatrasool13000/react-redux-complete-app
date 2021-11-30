import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import iceCreamAction from './iceCream/iceCreamAction'

const IceCreamContainer = () => {
    const [number, setNumber] = useState(1)
    const iceCreamState=useSelector(state=>state.iceCream.numOfIceCream)
    const dispatch=useDispatch()
    console.log(iceCreamState)
    return (
        <div>
            <h1>Number of IceCream {iceCreamState}</h1>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={()=>dispatch(iceCreamAction(number))}>Buy {number} IceCream</button>
        </div>
    )
}

export default IceCreamContainer
