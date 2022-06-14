import React from 'react'
import '.././App.css'
export default function UseCallBack() {
    const clickHere = () => {
        
    }

  return (
    <div className='App-header App'>
        <div className='border border-warning rounded p-3'>
            <h3>UseCallback</h3>
            <button className='btn btn-light sm mt-2' onClick={()=>{clickHere()}}>click Here</button>
        </div>
    </div>
  )
}
