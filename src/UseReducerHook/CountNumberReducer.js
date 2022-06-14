import React, { useReducer, useState } from 'react'
import '.././App.css'
export default function CountNumberReducer() {

  const [number,setNumber] = useState(0)

  let rootReducer = (state,action) => {
  
    switch(action.type){
      case 'Increment':
        return state = state + 1;
      case 'Decrement':
        return state = state - 1;
      default:
        return 100;
    }
  }

  const [state,dispatch] = useReducer(rootReducer,number)

  let handleClick1 = () =>{
    dispatch({
      type:"Increment",
    })
  }

  let handleClick2 = () =>{
    // console.log("click2")
    dispatch({
      type:"Decrement",
    })
  }
  return (
    <div className='App App-header'>
      <div className='border border-info p-3 rounded'>
        <h3>useReducer</h3>
        <h4>{state}</h4>
        <button className='btn btn-secondary' onClick={()=>{handleClick1()}} >Increment</button>
        <span>{' '}</span>
        <button className='btn btn-secondary' onClick={()=>{handleClick2()}} >Decrement</button>
      </div>
    </div>
  )
}
