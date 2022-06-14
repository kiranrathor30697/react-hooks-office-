import React, { Component, createRef } from 'react';
import '../../App.css'

export default class UseRefRcc extends Component {

   myRef = createRef();
   myRef2 = createRef();

   clickHere = (e) => {
    // console.log(e);
    let myData = this.myRef.current.value;
    let myData2 = this.myRef2.current
    myData2.innerHTML = myData;
   }
  render() {
    return (
      <div className='App App-header'>
        createRef Hook Rcc
        <form className='border mt-2 rounded p-3'>
          <h2>Create Ref Function</h2>
          <input className='form-control' ref={this.myRef} autoFocus placeholder='Enter value' />
          <div className='mt-2' ref={this.myRef2}>{}</div>
          <button type='button' className='btn btn-secondary mt-2 ' onClick={(e)=>{this.clickHere(e)}}>On Click</button>
        </form>
      </div>
    );
  }
}