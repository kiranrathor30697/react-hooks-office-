import React, { useCallback, useState } from 'react'
import '.././App.css'
import MyName from './MyName';
export default function UseCallBack() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState({
        name:'',
        surname:''
    });
    
    const clicked = useCallback(
      () => {
        console.log("addName");
        setName({
            name:'Kiran',
            surname:'Rathor'
        })
      },
      [name],
    );

    const clickHere = () => {
        setCount((preValue)=>preValue+1);
    }

  return (
    <div className='App-header App'>
        <div className='border border-warning rounded p-3'>
            
            <h3 >UseCallback</h3>
            <MyName name={name} />
            
            {count}<br />
            <button className='btn btn-light sm mt-2' onClick={()=>{clickHere()}}>click Here</button><br />

            {name.name}{' '}{name.surname}<br />
            <button className='btn btn-light sm mt-2' onClick={()=>{clicked()}}>callback</button>
        </div>
    </div>
  )
}
