import React from 'react'
import { connect } from 'react-redux'
import iceCreamAction from '../components/iceCream/iceCreamAction'
import buyCake from './cake/cakeAction'
const OwnPropsContainer = (props) => {
    return (
        <div>
           <h1>Item -{props.state}</h1> 
           <button onClick={props.getDispatched}>Buy Item</button>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
 const setItem=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCream
 return {
     state:setItem
 }
 }
 const mapToDispatchProps=(dispatch,ownProps)=>{
  const dispatchContainer=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(iceCreamAction())
  return {
      getDispatched:dispatchContainer
  }
 }

export default connect(mapStateToProps,mapToDispatchProps)(OwnPropsContainer) 
