import React, { useReducer, useState } from 'react'
import '.././App.css'

export default function UseReducer() {

  const [initialData,setInitialData] = useState({
    name:'Kiran Rathor'
  })

  const [number,setNumber] = useState({
    count:0
  })

let rootReducer = (number,initialData,action) => {
  
  switch(action.type){
    case 'change_Name':
     return setInitialData({...initialData,name:'Anjali Rathor'})
    case 'Increment':
    return {count:number.count+1}
    case 'Decrement ':
      return number = number-1
    default:
  }
  return initialData; 
}

  const [action,dispatch] = useReducer(rootReducer,initialData)

  let handleClick = () => {
    dispatch({
      type:"change_Name",
    })
  }

  return (
    <div className='App App-header '>
      <div className='border border-info p-3 rounded'>
        <h3>useReducer</h3>
        <h4>{initialData.name}</h4>
        <button className='btn btn-secondary' onClick={()=>{handleClick()}} >Change Name</button>
      </div>

    </div>
  )
}
