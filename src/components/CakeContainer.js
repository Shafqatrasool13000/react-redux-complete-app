import React from 'react'
import { connect } from 'react-redux'
import buyCake from '../redux/cake/cakeAction'

const CakeContianer = (props) => {
    return (
        <div>
            <h1>Cakes in Shelf {props.cake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
//Take the state of redux store
const mapStateToProps=state=>{
    console.log(state)
 return {
   cake:state.numOfCakes
 }
}
//Dispatch method that helps in dispatch function to redux store
const mapDispatchToProps=dispatch=>{
  return {
    buyCake:()=>dispatch(buyCake())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContianer)
