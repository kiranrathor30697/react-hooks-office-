import React, { createRef } from 'react';
import '../../App.css'

export const UseRefHook = () => {

  const myRef = createRef();
  const myRef2 = createRef();

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("click");
    // console.log(myRef.current.value);
    let getValue = myRef.current.value;
    let getValue2 = myRef2.current;
    // console.log(getValue);
    // console.log(getValue2);
    getValue2.innerHTML = getValue;
  }
  return (
    <div className='App App-header'>
      <form className='bg-secondary p-3 rounded'>
        <h2>Use Ref</h2>
        <input name='friend' ref={myRef} className='form-control mb-3' type="text" placeholder='Enter Value' />
        <h2 ref={myRef2} style={{color:'black'}} ></h2>
        <button className='btn btn-info' onClick={(e)=>{handleClick(e)}}>click Here</button>
      </form>
    </div>
  );
}
