import React, { useMemo, useState } from 'react'
import '.././App.css'

export default function UseMemo() {
    const [no,setNo] = useState(0)
    let myNoFunc = (num)=> {
        for (let index = 0; index < 100; index++) {
            num += 1;    
        }
        return num;
    }
    const incre = useMemo(()=>myNoFunc(no),[no]);

   

    let clickHere = () =>{
        setNo(no+1)
    }
  return (
    <div className='App App-header'>
        <h2>{no}</h2>
        <button className='btn btn-info' type='button' onClick={()=>{clickHere()}} >Clicked</button>
    </div>
  )
}
